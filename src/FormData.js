"use strict";

/**
 * Node Internal Modules
 */
const stream = require('stream');
const http   = require('http');
const path   = require('path');
const fs     = require('fs');

/**
 * NPM External Modules
 */
const Promise  = require('bluebird');
const fileType = require('file-type');
const mime     = require('mime-types');

/**
 * Internal Modules
 */
const util = require('./util.js');

/*
 * Module Constants
 */
const LINE_BREAK = '\r\n';

/*================= Private Function =================*/
/**
 * This generates a 50 character boundary similar to those used by Firefox.
 * They are optimized for boyer-moore parsing.
 *
 * @returns {string}
 */
const generateBoundary = () => {
    var boundary = '--------------------------';

    for (var i = 0; i < 24; i++) {
        boundary += Math.floor(Math.random() * 10).toString(16);
    }

    return boundary;
};

/**
 * multipart/form-data Stream
 * @extends {stream.Transform}
 */
class FormData extends stream.Transform{
    /**
     * Constructor
     *
     * @param [opts] {Object}
     * @param   [opts.promiseTimeout]   {Number}
     * @param   [opts.requestTimeout]   {Number}
     * @param   [opts.speedLimit]       {Number}
     * @param   [opts.responseTimeout]  {Number}
     * @param   [opts.guess]            {Boolean}
     * @param   [opts.arrayTransform]   {Function|String}
     * @param   [opts.arrayDefault]     {*}
     */
    constructor(opts){
        opts = util.isObject(opts)? opts : {};

        super({writableObjectMode: true});

        this.boundary       = generateBoundary();
        this.length         = 0;
        this.overheadLength = 0;

        //Options
        this.speedLimit       = util.isAssigned(opts.speedLimit)      ? Number(opts.speedLimit)      : 128 * 1024; //128kB/s
        this.promiseTimeout   = util.isAssigned(opts.promiseTimeout)  ? Number(opts.promiseTimeout)  : 1000;  //1s
        this.requestTimeout   = util.isAssigned(opts.requestTimeout)  ? Number(opts.requestTimeout)  : 120 * 1000;
        this.responseTimeout  = util.isAssigned(opts.responseTimeout) ? Number(opts.responseTimeout) : 120 * 1000; //2min
        this.guess            = util.isBoolean(opts.guess)            ? opts.guess                   : true;

        if(util.isFunction(opts.arrayTransform) && !util.isGeneratorFunction(opts.arrayTransform)){
            this._arrayTransform = opts.arrayTransform;
            this._arrayDefault   = opts.arrayDefault || '[]';

        }else{
            /**@todo expand this*/
            switch (opts.arrayTransform){
                case 'buffer':
                    this._arrayTransform = arr => new Buffer(arr);
                    this._arrayDefault   = util.isAssigned(opts.arrayDefault)? opts.arrayDefault : new Buffer();
                    break;

                default:
                    this._arrayTransform = JSON.stringify;
                    this._arrayDefault   = util.isAssigned(opts.arrayDefault)? opts.arrayDefault : '[]';
                    break;
            }
        }
    }

    /**
     * @param field     {String}
     * @param val       {String|Number|Object|Array|Buffer|ArrayBuffer|Promise|stream.Readable|http.ClientRequest|http.IncomingMessage}
     * @param [opts]    {Object}
     * @param   [opts.header] {Object}
     * @param encoding  {String}
     * @param done      {Function}
     * @private
     */
    _transform({field, val, opts}, encoding, done){
        /* ======= Data Sanitization ======= */
        if(!util.isValidString(field)){
            done(new TypeError('Invalid field'));
            return;
        }

        if(util.isObject(opts)){
            opts.contentType = util.isString(opts.contentType)? opts.contentType : '';
            opts.fileName    = util.isString(opts.fileName)   ? opts.fileName    : '';

        }else{
            opts = {
                contentType: '',
                fileName: ''
            }
        }

        if(util.isObject(val)){
            if(!util.isBuffer(val)){
                if(val instanceof(stream.Stream)){
                    if(val instanceof(http.ClientRequest)){
                        if(val.finished) {
                            done(new Error('Client Request stream already finished'));
                            return;
                        }

                        let responseListener = res => this._transform({field: field, val: res, opts: opts}, encoding, done);
                        let err = err => {
                            val.removeListener('response', responseListener());
                            val.destroy();
                            done(err);
                        };

                        //@todo timeout
                        val.once('response', responseListener)
                            .once('abort', () => err(new Error('Request was aborted')))
                            .once('error', err)
                            .end();
                        return;

                    }else if(val.readable || val instanceof(stream.Readable)){
                        //fs and http IncomingMessage streams have internal fileName and/or contentType
                        if(val instanceof(http.IncomingMessage)){
                            opts.fileName = opts.fileName || val.path;

                            //Get length from request if present
                            if(util.isString(val.headers['content-length'])){
                                opts.length = Number(
                                    this.guess?
                                    (val.headers['content-length'] || opts.length)
                                    : (opts.length || val.headers['content-length'])
                                );
                            }

                            //Get contentType from request if present
                            if(util.isString(val.headers['content-type'])){
                                opts.contentType = this.guess?
                                    (val.headers['content-type'] || opts.contentType)
                                    : (opts.contentType || val.headers['content-type']);
                            }

                        }else if(util.isString(val.path)) {
                            opts.fileName = opts.fileName || val.path;
                        }

                        if(val._readableState.objectMode){
                            util.readableStreamToPromise(val)
                                .then(val => this._transform({field: field, val: val, opts: opts}, encoding, done))
                                .catch(done);

                        }else{
                            let onHead = data => {
                                opts.header = !this.guess && util.isValidString(opts.header)? opts.header : this._constructHeader(field, data, opts);
                                this.push(opts.header);
                                this.overheadLength += Buffer.byteLength(opts.header) + LINE_BREAK.length;
                            };

                            let onData = data => {
                                this.length += data.length;
                                this.push(data);
                            };

                            let onEnd = () => done(null, LINE_BREAK);

                            let onError = err => {
                                val.removeEventListener('data', onHead);
                                val.removeEventListener('data', onData);
                                val.removeEventListener('end', onEnd);

                                try{
                                    done(err);
                                }catch(ignore){}
                            };

                            val.once('error', onError);
                            val.once('data', onHead);
                            val.on('data', onData);
                            val.once('end', onEnd);
                        }

                        return;

                    }else{ //Unparsable kind of stream, probably Writable or old Style
                        done(new Error('Unparsable kind of stream'));
                    }

                }else if(util.isArray(val)){
                    try{
                        val = this._arrayTransform(val);

                    }catch (error){
                        this.emit('error', error);
                        val = this._arrayDefault; //We attempt to continue with a default array representation
                    }

                }else if(val.buffer instanceof(ArrayBuffer)){
                    val = new Buffer(val.buffer);

                }else if(val instanceof(ArrayBuffer)){
                    val = new Buffer(val);

                }else if(val instanceof(Promise) || util.isFunction(val.then)){
                    let promise = Promise.resolve(val); //Wait promise result

                    //If timeout is 0 we wait till promise complete
                    if(this.promiseTimeout){
                        promise = promise.timeout(this.promiseTimeout, "Promise Timeout");
                    }

                    promise
                        .then(val => this._transform({field: field, val: val, opts: opts}, encoding, done))
                        .catch(done);
                    return;

                }else{
                    try{
                        val = JSON.stringify(val) || '{}';

                    }catch (error){
                        this.emit('error', error);
                        val = "{}"; //We attempt to continue with empty obj representation
                    }
                }
            }

        }else if(!util.isString(val)){ //Ok not an Object neither a String
            try{
                val = JSON.stringify(val) || '';

            }catch (error){
                this.emit('error', error);
                val = ''; //We attempt to continue with empty value
            }
        }
        /* ======= Data Sanitization ======= */

        /**@assert val {String|Buffer}*/

        //Construct header if not provided
        opts.header = !this.guess && util.isValidString(opts.header)? opts.header : this._constructHeader(field, val, opts);

        this.push(opts.header);
        this.push(val);
        this.push(LINE_BREAK);

        this._updateLength(val, opts);

        done();
    }

    _flush(done){
        //Only add this if we have some content
        if(this.overheadLength){
            let lastBoundary = `--${this.boundary}--${LINE_BREAK}`;

            this.push(lastBoundary);
            this.length += Buffer.byteLength(lastBoundary);
        }

        done();
    }

    /**
     * Construct Data Header
     *
     * @param field         {String}
     * @param value         {Buffer|String}
     * @param [fileName]    {String}
     * @param [contentType] {String}
     *
     * @returns {String} - Header
     * @private
     */
    _constructHeader(field, value, {fileName, contentType}) {
        fileName = path.parse(fileName);
        let ext  = fileName.ext;
        fileName = fileName.name;

        if(this.guess){
            /**@type {{ext: String, mime: String}|Null|Boolean}*/
            let type;
            if(util.isBuffer(value) && (type = fileType(value))){
                ext         = '.' + type.ext;
                contentType = type.mime;

            }else if(type = mime.lookup(ext)){
                 contentType = type;

            //Make sure extension is compatible with contentType
            }else if(contentType && contentType !== mime.lookup(ext)){
                ext = '.' + mime.extension(contentType);
            }

        }else if(!contentType){
            if(!(contentType = mime.lookup(ext)) && util.isBuffer(value) && (contentType = fileType(value))){
                ext         = '.' + contentType.ext;
                contentType = contentType.mime;
            }

        }else if(!ext){ //We have content-type but no extension, so get one
            ext = '.' + mime.extension(contentType);
        }

        return `--${this.boundary}${LINE_BREAK}Content-Disposition: form-data; name="${field}"`
            //If we don't have a file name attempt to generate one from content type
            + (fileName || (fileName = FormData._getNameFromMime(contentType))?
                `; filename="${fileName + ext}"${LINE_BREAK}`
                + (contentType?
                    `Content-Type: ${contentType}${LINE_BREAK}`
                    : '')
                : LINE_BREAK)
            + LINE_BREAK;
    }

    static _getNameFromMime(mime){
        return mime.split('/')[0];
    }

    _updateLength(value, {header, length}){
        /**@check why add CRLF? does this account for custom/multiple CRLFs?*/
        this.overheadLength += Buffer.byteLength(header) + LINE_BREAK.length;

        this.length += this.guess || !util.isInteger(length) || length < 0?
            (util.isString(value)? Buffer.byteLength(value) : (util.isBuffer(value)? value.length : length))
            : length;
    }

    getHeaders (userHeaders) {
       return Object.assign({'Content-Type': `multipart/form-data; boundary=${this.boundary}`}, userHeaders);
    }

    getLength(){return this.overheadLength + this.length;}

    append(field, val, opts){return super.write({field: field, val: val, opts: opts});}
    write(field, val, opts){return super.write({field: field, val: val, opts: opts});}
}

module.exports = FormData;