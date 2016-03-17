"use strict";

/**
 * Node Internal Modules
 */
const fs = require('fs');
const util = require('util');
const stream = require('stream');

/**
 * NPM External Modules
 */
const Promise  = require('bluebird');

//================ Validation checks ===================

util.GeneratorFunction   = Object.getPrototypeOf(function*(){}).constructor;
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
util.isValid     = val => typeof(val) !== "undefined" && val !== null && val !== '';

util.isObject         = obj     => typeof(obj) === "object" && obj !== null;
//util.isNotEmptyObject = obj     => util.isObject(obj) && Reflect.ownKeys(obj).length;
//util.isEmptyObject    = obj     => util.isObject(obj) && !(Reflect.ownKeys(obj).length);
util.isBuffer         = Buffer.isBuffer;
util.isBufferLike     = buf     => util.isObject(buf) && (buf instanceof(ArrayBuffer) || buf.buffer instanceof(ArrayBuffer));
util.isPromise        = promise => util.isObject(promise) && (promise instanceof(Promise) || util.isFunction(promise.then));

util.isArray         = Array.isArray;
util.isNotEmptyArray = arr => util.isArray(arr) && arr.length;

/**
 * NOP - Blank function
 */
util.nop = () => {};

/**
 * Synchronous Json File Parser
 *
 * @param {String} filePath
 * @returns {Object|Array}
 */
util.parseJsonFileSync = filePath => {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));

    } catch (ignore) {
        return null;
    }
};

///**
// * Helper function for template string
// *
// * @param {Array} strTemplate
// * @param {Array} values
// * @returns {String}
// */
//util.parseTemplateString = (strTemplate, ...values) => {
//    var str = "";
//
//    strTemplate.forEach((piece, index) => {
//        str += piece + (values[index] || "");
//    });
//
//    return str;
//};

/**
 * Transform Readable stream into a Promise
 *
 * @param readableStream {stream.Readable}
 * @param [timeout] {Number}
 * @returns {Promise}
 */
util.readableStreamToPromise = (readableStream, timeout) => {
    if(!(readableStream.readable || readableStream instanceof(stream.Readable))){
        return Promise.reject(new Error('Not a Readable Stream'));
    }

    if(readableStream._readableState.endEmitted){
        return Promise.reject(new Error('Stream already ended'));
    }

    let dataListener;
    let endListener;
    let errorListener;
    let clearListeners = () => {
        readableStream.removeListener('data', dataListener);
        readableStream.removeListener('end', endListener);
        readableStream.removeListener('error', errorListener);
    };

    let promise = new Promise((resolve, reject) => {
        let data;
        let error;
        let dataSize = 0;
        let dataType = -1;

        dataListener = chunk => {
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

                dataType = (dataType < 0 || type === dataType)? type : 0;

            }else{
                data = chunk;

                if(util.isBuffer(chunk)){ //in case we receive more buffer chunks
                    dataSize += chunk.length;
                }
            }
        };

        endListener = () => {
            clearListeners();

            switch (dataType){
                case 1: //Case Buffer
                    data = Buffer.concat(data, dataSize);
                    break;

                case 2: //Case String
                    data = data.join();
                    break;
            }

            resolve(data);
        };

        errorListener = err => reject(err);

        readableStream.on('data', dataListener);
        readableStream.once('error', errorListener);
        readableStream.once('end', endListener);
    });

    return (util.isInteger(timeout)? promise.timeout(timeout) : promise).catch(err => {
        clearListeners();
        readableStream.resume();

        throw err;
    });
};

module.exports = util;