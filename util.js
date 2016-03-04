"use strict";

/**
 * Shim Libs
 *
 * This are shim libs, used because of node lack of support to full ES6 spec
 * TODO: Remove this once the ES6 spec is 'fully' implemented on node
 */
require('./shim.js');

/**
 * Node Internal Modules
 */
const fs = require('fs');
const util = require('util');

//================ Validation checks ===================

util.GeneratorFunction   = Reflect.getPrototypeOf(function*(){}).constructor;
util.isFunction          = func    => typeof(func) === "function";
util.isGeneratorFunction = genFunc => util.isFunction(genFunc) && genFunc instanceof(util.GeneratorFunction);

util.isNumber      = num => typeof(num) === "number";
util.isValidNumber = num => util.isNumber(num) && !Number.isNaN(num) && Number.isFinite(num);
util.isFloat       = num => util.isValidNumber(num) && (num % 1 !== 0);
util.isInteger     = Number.isInteger;

util.isString      = str => typeof(str) === "string";
util.isValidString = str => util.isString(str) && str.length;

util.isBoolean = bool => typeof(bool) === "boolean";

util.isUndefined = und => typeof(und) === "undefined";
util.isAssigned  = val => typeof(val) !== "undefined";
util.isNull      = nil => nil === null;
util.isValid     = val => typeof(val) !== "undefined" && val !== null && val != '';

util.isObject         = obj     => typeof(obj) === "object" && obj !== null;
util.isNotEmptyObject = obj     => util.isObject(obj) && Reflect.ownKeys(obj).length;
util.isEmptyObject    = obj     => util.isObject(obj) && !(Reflect.ownKeys(obj).length);
util.isBuffer         = Buffer.isBuffer;
util.isBufferLike     = buf     => util.isObject(buf) && (buf instanceof(ArrayBuffer) || buf.buffer instanceof(ArrayBuffer));
util.isPromise        = promise => util.isObject(promise) && (promise instanceof(Promise) || util.isFunction(promise.then));

util.isArray         = Array.isArray;
util.isNotEmptyArray = arr => util.isArray(arr) && arr.length;

/**
 * Synchronous Json File Parser
 *
 * @param {String} filePath
 * @returns {Object|Array}
 */
util.parseJsonFileSync = filePath => {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));

    } catch (err) {
        return null;
    }
};

/**
 * Helper function for template string
 *
 * @param {Array} strTemplate
 * @param {Array} values
 * @returns {String}
 */
util.parseTemplateString = (strTemplate, ...values) => {
    var str = "";

    strTemplate.forEach((piece, index) => {
        str += piece + (values[index] || "");
    });

    return str;
};

/**
 * Transform Readable stream into a Promise
 *
 * @param stream  {stream.Readable}
 * @param [timeout] {Number}
 * @param [rejectOnError] {Boolean}
 * @returns {Promise}
 */
util.readableStreamToPromise = (stream, timeout, rejectOnError) => {
    /**
     * Data sanitization
     * timeout       = util.isInteger(timeout)? timeout : util.isInteger(rejectOnError)? rejectOnError : 0;
     * rejectOnError = util.isBoolean(rejectOnError)? rejectOnError : false;
     */

    let data;
    let error;
    let dataSize = 0;
    let dataType = 0;
    let resolve  = util.nop;
    let reject   = util.nop;
    let promise  = new Promise((yes, no) => {resolve = yes; reject = no;});

    if(stream._readableState.ended){
        reject({error: new Error('Stream already ended')});
        return promise;
    }

    let dataListener = chunk => {
        if(data){
            let type = 0;

            if(util.isBuffer(chunk)){
                dataSize += chunk.length;
                type = 1;

            }else if(util.isString(chunk)){
                type = 2;
            }

            if(util.isArray(data)){
                data.push(chunk);

            }else{
                data = [data, chunk];
            }

            dataType = (!dataType || type === dataType)? type : 0;

        }else{
            data = chunk;
        }
    };

    let endListener = () => {
        clearListeners();
        /**@check Should we make an option to parse or not stream data*/
        switch (dataType){
            case 1:
                data = Buffer.concat(data, dataSize);
                break;
            case 2:
                data = data.join();
                break;
        }

        return error? reject({error: error, data: data}) : resolve(data);
    };

    let errorListener = err => {
        if(rejectOnError){
            return reject(err);
        }

        //Only last error is recorded
        error = err;
    };

    let clearListeners = () => {
        stream.removeListener('data', dataListener);
        stream.removeListener('end', endListener);
        stream.removeListener('error', errorListener);
    };

    stream.on('data', dataListener);
    stream.on('error', errorListener);
    stream.once('end', endListener); //Protect against repeated call

    if(timeout || rejectOnError){
        //If timeout is 0 we wait till stream end
        promise = (timeout? promise.timeout(timeout, "Stream Timeout") : promise).catch(error => {
            clearListeners();
            /**@check Should we make an option to parse or not stream result*/
            switch (dataType){
                case 1:
                    data = Buffer.concat(data, dataSize);
                    break;
                case 2:
                    data = data.join();
                    break;
            }

            //Internal error, we try to continue with what data we got
            return Promise.reject({error: error, data: data});
        });
    }

    return promise;
};

/**
 * NOP - Blank function
 */
util.nop = () => {};

module.exports = util;