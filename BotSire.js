//   ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
//  ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//  ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀
//  ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌               ▐░▌     ▐░▌       ▐░▌▐░▌
//  ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄
//  ▐░░░░░░░░░░▌ ▐░▌       ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//  ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌     ▐░▌      ▀▀▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀▀▀
//  ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌               ▐░▌     ▐░▌     ▐░▌     ▐░▌  ▐░▌
//  ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌      ▄▄▄▄▄▄▄▄▄█░▌ ▄▄▄▄█░█▄▄▄▄ ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄
//  ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌
//   ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀
//
//                    Y.                      _
//                    Y.                      _
//                    YiL                   .```.
//                    Yii;   Many Let's   .; .;;`.
//                    YY;ii._           .;`.;;;; :
//                    iiYYYYYYiiiii;;;;i` ;;::;;;;
//  Much Arrows   _.;YYYYYYiiiiiiYYYii  .;;.   ;;;
//             .YYYYYYYYYYiiYYYYYYYYYYYYii;`  ;;;;
//           .YYYYYYY$$YYiiYY$$$$iiiYYYYYY;.ii;`..
//          :YYY$!.  TYiiYY$$$$$YYYYYYYiiYYYYiYYii.
//          Y$MM$:   :YYYYYY$!"``"4YYYYYiiiYYYYiiYY.
//       `. :MM$$b.,dYY$$Yii" :'   :YYYYllYiiYYYiYY
//    _.._ :`4MM$!YYYYYYYYYii,.__.diii$$YYYYYYYYYYY
//    .,._ $b`P`     "4$$$$$iiiiiiii$$$$YY$$$$$$YiY;    Such Classes
//       `,.`$:       :$$$$$$$$$YYYYY$$$$$$$$$YYiiYYL
//        "`;$$.    .;PPb$`.,.``T$$YY$$$$YYYYYYiiiYYU:
//      ' ;$P$;;: ;;;;i$y$"!Y$$$b;$$$Y$YY$$YYYiiiYYiYY
//        $Fi$$ .. ``:iii.`-";YYYYY$$YY$$$$$YYYiiYiYYY
//        :Y$$rb ````  `_..;;i;YYY$YY$$$$$$$YYYYYYYiYY:
//         :$$$$$i;;iiiiidYYYYYYYYYY$$$$$$YYYYYYYiiYYYY.
//          `$$$$$$$YYYYYYYYYYYYY$$$$$$YYYYYYYYiiiYYYYYY
//  So ES6  .i!$$$$$$YYYYYYYYY$$$$$$YYY$$YYiiiiiiYYYYYYY
//         :YYiii$$$$$$$YYYYYYY$$$$YY$$$$YYiiiiiYYYYYYi' (author: cmang)
'use strict';

/**
 * Performance concerns:
 * We should follow the benchmarking results of this test
 * @link: https://github.com/bevry/esnext-benchmarks
 */

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
const https        = require('https');
const url          = require('url');
const EventEmitter = require('events');

/**
 * NPM External Modules
 */
const debug = require('debug');
const co    = require('co');

/**
 * Internal Modules
 */
const FormData = require('./FormData.js');
const errors   = require('./errors.js');
const util     = require('./util.js');

/*
 * Module Constants
 */
const telegramBotApiUrl = 'https://api.telegram.org/bot';
const methodDefinitions = util.parseJsonFileSync('./methods.json');
const messageTypes      = [
    //text is parsed separated because of command types
    /*'text',*/ 'audio', 'document', 'photo', 'sticker',
    'video', 'voice', 'contact', 'location',
    'new_chat_participant', 'left_chat_participant',
    'new_chat_title', 'new_chat_photo',
    'delete_chat_photo', 'group_chat_created',
    'supergroup_chat_created', 'channel_chat_created'
    /*, 'migrate_to_chat_id', 'migrate_from_chat_id'*/
]; /**@check Don't know if the last ones are messages types or just properties of other messages*/

/*================= Private Function =================*/
/**
 * Populate BotSire internal properties
 *
 * @param self {BotSire}
 * @param opts {Object}
 */
const populate = (self, opts) => {
    /**
     * BotSire Default Options
     * @type {Object}
     */
    let options = {
        requestTimeout:  300,
        poolingInterval: 10, //seconds
        poolingLimit:    100
    };

    if(util.isString(opts)){
        options.token = opts;

    }else if(util.isObject(opts)){
        options.token           = util.isString(opts.token)? opts.token : '';
        options.requestTimeout  = util.isInteger(opts.requestTimeout)? opts.requestTimeout : options.requestTimeout;
        options.poolingInterval = util.isInteger(opts.poolingInterval)? opts.poolingInterval : options.poolingInterval;
        options.poolingLimit    = util.isInteger(opts.poolingLimit)? opts.poolingLimit : options.poolingLimit
    }

    Object.assign(self, options);
};

/**
 * Generate Telegram Bot API methods as defined in methods.json file
 */
const generateMethodFunctions = () => {
    if(!methodDefinitions){
        throw new TypeError('Unable to read Bot API method definitions from ./methods.json');
    }

    for(let method in methodDefinitions){
        if(!methodDefinitions.hasOwnProperty(method)){
            continue;
        }
        method = methodDefinitions[method];

        let requiredArgs;
        let fileUploadArg;

        if(method){
            requiredArgs  = method.required? Object.keys(method) : '';
            fileUploadArg = method.fileUpload;

        }else{
            requiredArgs  = ''; //little hack, strings have length ;p
            fileUploadArg = null;
        }

        Object.defineProperty(BotSire.prototype, method, {
            writable: true,
            enumerable: false,
            value: function botApiGenericMethod(){
                let methodArgs = {};
                let counter;
                let fileUpload = false;

                if(arguments.length < requiredArgs.length){
                    return Promise.reject(new TypeError('Insufficient arguments'));
                }

                for(counter = 0; counter < requiredArgs.length; counter++){
                    methodArgs[requiredArgs[counter]] = arguments[counter];
                }

                if(util.isObject(arguments[counter])){ //Get optional arguments
                    methodArgs = Object.assign(arguments[counter], methodArgs);
                }

                //if is a object then we use formData
                if(fileUpload && util.isObject(methodArgs[fileUploadArg])){
                    fileUpload = true;
                }

                return this._request(method, methodArgs, fileUpload);
            }
        })
    }
};

/**
 * Create your Telegram bot with ease
 */
class BotSire extends EventEmitter{
    constructor(opts) {
        super();

        //Populate internal properties
        populate(this, opts);

        if(!this.token){
            throw new TypeError(`Invalid Bot Token: ${this.token}`);
        }

        //Generate generic bot api methods from methods.json
        generateMethodFunctions();

        /*======= Private Variables =======*/
        this._pooling = null;
        /*======= Private Variables =======*/

        //Logger Set-up
        this.log = debug('BotSire');
        this.on('error', err => this.log(err)); //Log Errors
        this.on('message', msg => this.log(`New message id: ${msg.message_id}` + (msg.from? ` from ${msg.from.first_name}` : '')));

        this.log('Waiting bot personal information...');

        this.getMe().then(result => {
            this.id       = result.id;
            this.name     = result.first_name;
            this.username = result.username;

            this.log(`Hello owner, I am Bot ${this.id}, but you can call me ${this.name}, my username on Telegram is @${this.username}. Let's get to work...`);
            this.emit('ready');

        }).catch(err => this.emit('error', err));
    }

    pooling(){
        if(this.webHook){
            this.log('WebHook is set, please disable webHook before using pooling');
            return false;
        }

        if(!this._pooling){
            this._pooling = {
                abort: false,
                offset: 0
            }

        }else if(!this._pooling.abort){
            this.log('Pooling already running');
            return;

        }else{
            this._pooling.abort = false;
        }

        let poolingLoop = () => {
            if(this._pooling.abort){
                this.log('Pooling was aborted');
                return;
            }

            this.getUpdates({offset: this._pooling.offset, limit: this.poolingLimit, timeout: this.poolingInterval})
                .then(updates => this._parseUpdate(updates))
                .catch(err => {
                    this.log('Error while pooling for data');
                    this.emit('error', err);
                    /**
                     * @todo| Check errors, beware that webHook can be set, we should verify this, and set the
                     * @todo| this.webHook variable if so
                     */
                })
                .finally(() => poolingLoop());
        };

        poolingLoop();

        return true;
    }

    /**
     * Parse Update Array
     *
     * @param updates {{update_id, message, inline_query, chosen_inline_result}[]}
     * @private
     */
    _parseUpdate(updates){
        let counter;

        if(util.isArray(updates)){
            if(updates.length){
                //just to make sure
                for(counter = 0; updates[counter].update_id < this._pooling.offset && counter < updates.length; counter++){}

                this.log(`Received ${updates.length - counter} new messages`);

                for(; counter < updates.length; counter++){
                    let update = updates[counter];

                    if(util.isObject(update)){
                        if(update.message){
                            this.emit('message', update.message);
                            console.log(require('util').inspect(update.message, {colors: true}));
                            //this._parseMessage(update.message);
                            continue;

                        }else if(update.inline_query){
                            this.emit('inlineQuery', update.inline_query);
                            continue;

                        }else if(update.chosen_inline_result){
                            this.emit('chosenInlineResult', update.chosen_inline_result);
                            continue;
                        }
                    }

                    this.emit('error', new errors.UpdateError());
                }

                this._pooling.offset = updates[counter - 1].update_id + 1;
            }

        }else{
            this.emit('error', new errors.UpdateError());
        }
    }

    /**
     * Parse Message into its different types
     * @param message {{text}}
     * @param   message.message_id {Number}
     * @param   [message.from]     {{id, first_name, last_name, username}}
     * @param   message.data       {Number}
     * @param   message.chat       {id, type}
     * @private
     */
    _parseMessage(message){
        if(message.text){


        }else{
            for(let counter = 0; counter < messageTypes.length; counter++){
                let type = messageTypes[counter];

                if(message[type]){
                    this.emit(type);
                    return;
                }
            }

            this.emit('error', new errors.InvalidMessage());
        }
    }

    _methodUrl(method) {
        return `${telegramBotApiUrl + this.token}/${method}`;
    }

    _request(methodName, methodArgs, fileUpload) {
        this.log(`Request for method ${methodName}`);

        return new Promise((resolve, reject) => {
            let request;
            let requestOpts    = url.parse(this._methodUrl(methodName));
            requestOpts.method = 'POST';
            requestOpts.port   = 443;

            let errorListener;

            if(fileUpload){
                let fields          = Object.keys(methodArgs);
                let index           = 0;
                let formData        = new FormData();/**@todo allow custom options*/
                let endCalled       = false;
                requestOpts.headers = formData.getHeaders();
                request             = https.request(requestOpts);

                let drainListener = () => {
                    if(endCalled){
                        formData.end();
                        return;

                    }else if(index === fields.length){ //edge cases when last append returned false
                        endCalled = true;
                        formData.end();
                        return;
                    }

                    while(!endCalled){
                        if(formData.append(fields[index], methodArgs[fields[index]])){
                            methodArgs[fields[index++]] = null; //Save memory
                            if(index === fields.length){
                                endCalled = true;
                                formData.end();
                                return;
                            }

                        }else{
                            methodArgs[fields[index++]] = null; //Save memory
                            break;
                        }
                    }
                };

                let endListener = () => {
                    request.setHeader('Content-Length', formData.getLength());
                    /**@todo set timeout here*/
                    request.end()
                };

                errorListener = err => {
                    formData.removeListener('end', endListener);
                    formData.removeListener('drain', drainListener);
                    formData.unpipe(request);

                    if(!endCalled){
                        endCalled = true;
                        formData.end();
                    }

                    request.abort(); //cancel request event
                    reject(err);
                };

                formData.pipe(request);
                formData.once('error', errorListener);
                formData.on('drain', drainListener);
                formData.once('end', endListener);

                //Allow us to bind request events before pushing data
                process.nextTick(drainListener); //Start pushing data to formData

            }else{
                let methodJsonParams;

                try{
                    methodJsonParams = JSON.stringify(methodArgs);

                }catch (error){
                    reject(error);
                    return;
                }

                requestOpts.headers = {
                    'Content-Type': "application/json; charset=utf-8",
                    'Content-Length': Buffer.byteLength(methodJsonParams)
                };

                request = https.request(requestOpts);

                errorListener = err => {
                    request.abort();
                    reject(err);
                };

                //Allow us to bind request events before pushing data
                process.nextTick(request.write.bind(request, methodJsonParams, 'utf8', () => request.end()));
            }

            //Listen to request Events
            request.once('error', errorListener);
            request.once('response', res => {
                res.setEncoding('utf8'); //get as string
                if(res.statusCode >= 200 && res.statusCode < 300){
                    resolve(util.readableStreamToPromise(res, this.requestTimeout, true))

                }else{
                    res.resume();//throw data away
                    reject(new errors.RequestError(`Request error: ${res.statusMessage}`, res.statusCode));
                }
            });

            if(this.requestTimeout){/**@todo remove this from here*/
                request.setTimeout(this.requestTimeout, () => errorListener(new Error('Request Timeout')));
            }

        }).then(json => {
            this.log(`Received result for ${methodName}`);

            /**@type {{ok, [result], [description], [error_code]}}*/
            json = JSON.parse(json);

            if(json.ok){
                this.log(`Telegram Bot Api ${methodName} successful` + (json.description? ` description: ${json.description}` : ''));
                return json.result;
            }

            throw new errors.TelegramError(json.description, json.error_code);

        }).catchThrow(err => this.log(`Error while processing ${methodName}: ${err}`));
    }
}

module.exports = BotSire;

