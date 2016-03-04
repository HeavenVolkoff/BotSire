"use strict";

/**
 * Shim Libs
 *
 * This are shim libs, used because of node lack of support to full ES6 spec
 * @todo: Remove this once the ES6 spec is 'fully' implemented on node
 */
require('./shim.js');

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

/**@todo Make Custom error types*/
class FormData extends stream.Transform{
    /**
     * Constructor
     *
     * @param [opts] {Object}
     * @param   [opts.promiseTimeout]   {Number}
     * @param   [opts.streamTimeout]    {Number}
     * @param   [opts.guessContentType] {Boolean}
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
        this.guessContentType = util.isBoolean(opts.guessContentType)? opts.guessContentType       : true;
        this.promiseTimeout   = util.isAssigned(opts.promiseTimeout) ? Number(opts.promiseTimeout) : 300;
        /**@todo calculate timeout based on content-length and a downloadSpeed limit (100kbps)*/
        //this.streamTimeout    = util.isAssigned(opts.streamTimeout)  ? Number(opts.streamTimeout)  : 500;
        this.speedLimit       = util.isAssigned(opts.speedLimit)     ? Number(opts.speedLimit)     : 131072; //128kbps

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
     * @param val       {String|Number|Object}
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

        opts             = util.isObject(opts)            ? opts             : {};
        opts.contentType = util.isString(opts.contentType)? opts.contentType : '';
        opts.fileName    = util.isString(opts.fileName)   ? opts.fileName    : '';

        if(util.isObject(val)){
            if(!util.isBuffer(val)){
                if(val instanceof(stream.Stream)){
                    if(val instanceof http.ClientRequest){
                        if(val.finished){
                            this.emit('error', new Error('Client Request stream already finished'));
                            //We attempt to continue with empty value
                            val = '';

                        }else{
                            let responseListener = res => this._transform({field: field, val: res, opts: opts}, encoding, done);

                            //Check if stream already has a timeout and if we have a valid streamTimeout
                            if(!val.timeoutCb && this.streamTimeout){
                                val.setTimeout(this.streamTimeout);
                            }

                            val.once('timeout', () => {
                                /**@check necessary?*/
                                val.removeListener('response', responseListener);
                                this.emit('error', new Error('Client Request stream Timeout'));
                                //We attempt to continue with empty value
                                this._transform({field: field, opts: opts}, encoding, done);
                            });
                            val.once('response', responseListener);
                            val.end();
                            return;
                        }

                    }else if(val.readable || val instanceof(stream.Readable)){
                        //fs and http IncomingMessage streams have internal fileName and/or contentType
                        if(val instanceof(http.IncomingMessage)){
                            opts.fileName = opts.fileName || val.path;

                            //Get contentType from request if present
                            if(util.isString(val.headers['content-type'])){
                                opts.contentType = this.guessContentType?
                                    (val.headers['content-type'] || opts.contentType) : (opts.contentType || val.headers['content-type']);
                            }

                        }else if(util.isString(val.path)) {
                            opts.fileName = opts.fileName || val.path;
                        }

                        util.readableStreamToPromise(val, this.streamTimeout, true)
                            .then(val => this._transform({field: field, val: val, opts: opts}, encoding, done))
                            .catch(({error, data}) => {
                                this.emit('error', error);
                                //Continue with what data we could read
                                this._transform({field: field, val: data, opts: opts}, encoding, done);
                            });

                        return;

                    }else{ //Unparsable kind of stream, probably Writable or old Style
                        this.emit('error', new Error('Unparsable kind of stream'));
                        //We attempt to continue with empty value
                        val = '';
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
                        .catch(error => {
                            this.emit('error', error);
                            //We attempt to continue with empty value
                            this._transform({field: field, opts: opts}, encoding, done);
                        });
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

        }else {
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
        opts.header = opts.header || this._constructHeader(field, val, opts);

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
        let getNameFromMime = mime => mime.split('/')[0];

        fileName = path.parse(fileName);
        let ext  = fileName.ext;
        fileName = fileName.name;

        if(this.guessContentType){
            /**@type {{ext: String, mime: String}|Null|Boolean}*/
            let type;
            if(util.isBuffer(value) && (type = fileType(value))){
                ext         = '.' + type.ext;
                contentType = type.mime;

            }else if(type = mime.lookup(ext)){
                 contentType = type;

            }else if(contentType && contentType !== mime.lookup(ext)){
                //Make sure extension is compatible with contentType
                ext = '.' + mime.extension(contentType);
            }

        }else if(!contentType){
            if(!(contentType = mime.lookup(ext)) && util.isBuffer(value) && (contentType = fileType(value))){
                ext         = '.' + contentType.ext;
                contentType = contentType.mime;
            }

         /** @check should we do this? We are not guessing, so the user should know what he is doing, right?
           * maybe add a option?*/
        }else if(contentType !== mime.lookup(ext)){ //Make sure extension is compatible with contentType
            ext = '.' + mime.extension(contentType);
        }

        return `--${this.boundary}${LINE_BREAK}Content-Disposition: form-data; name="${field}"`
            //If we don't have a file name attempt to generate one from content type
            + (fileName || (fileName = getNameFromMime(contentType))?
                `; filename="${fileName + ext}"${LINE_BREAK}`
                + (contentType?
                    `Content-Type: ${contentType}${LINE_BREAK}`
                    : '')
                : LINE_BREAK)
            + LINE_BREAK;
    }

    _updateLength(value, {header, length}){
        /**@check why add CRLF? does this account for custom/multiple CRLFs?*/
        this.overheadLength += Buffer.byteLength(header) + LINE_BREAK.length;

        if(!util.isInteger(length) || length < 0){
            if(length < 0){
                this.emit(new Error('Invalid Length'));
            }

            if(util.isString(value)){
                length = Buffer.byteLength(value);

            }else if(util.isBuffer(value)){
                length = value.length;

            }
        }

        this.length += length;
    }

    getHeaders (userHeaders) {
       return Object.assign({'Content-Type': `multipart/form-data; boundary=${this.boundary}`}, userHeaders);
    }

    getLength(){return this.overheadLength + this.length;}

    append(field, val, opts){return super.write({field: field, val: val, opts: opts});}
    write(field, val, opts){return super.write({field: field, val: val, opts: opts});}
}

module.exports = FormData;