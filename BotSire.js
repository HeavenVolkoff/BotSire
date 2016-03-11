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
 * We should follow the benchmarking results of this tests
 * @link: https://github.com/bevry/esnext-benchmarks
 */

/**
 * Node Internal Modules
 */
const EventEmitter = require('events');
const https        = require('https');
const url          = require('url');

/**
 * NPM External Modules
 */
const Promise = require('bluebird');
const debug   = require('debug');

/**
 * Internal Modules
 */
const FormData = require('./FormData.js');
const Command  = require('./Command.js');
const errors   = require('./errors.js');
const util     = require('./util.js');

/**
 * JSON files
 */
/**@type {Object}*/
const methodDefinitions = require('./methods.json');

/*
 * Module Constants
 */
const telegramBotApiUrl = 'https://api.telegram.org/bot';
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

//BlueBird config
Promise.config({
    cancellation: true
});

/*================= Private Function =================*/
/**
 * Populate BotSire internal properties
 *
 * @param opts {Object}
 */
const populateOptions = (opts) => {
    /**
     * BotSire Default Options
     * @type {Object}
     */
    let options = {
        requestTimeout:  2000,
        poolingInterval: 120, //2min
        poolingLimit:    100
    };

    if(util.isString(opts)){
        options.token = opts;

    }else if(util.isObject(opts)){
        options.token           = util.isString(opts.token)           ? opts.token           : '';
        options.requestTimeout  = util.isInteger(opts.requestTimeout) ? opts.requestTimeout  : options.requestTimeout;
        options.poolingInterval = util.isInteger(opts.poolingInterval)? opts.poolingInterval : options.poolingInterval;
        options.poolingLimit    = util.isInteger(opts.poolingLimit)   ? opts.poolingLimit    : options.poolingLimit;

        /*Command Options*/
        options.command = opts.command;

        /*FormData Options*/
        options.formData = opts.formData;
    }

    return options;
};

/**
 * Generate Telegram Bot API methods as defined in methods.json file
 */
const generateMethodFunctions = () => {
    for(let methodName in methodDefinitions){
        if(!methodDefinitions.hasOwnProperty(methodName)){
            continue;
        }

        /**@type {{required: {Object, null}, optional: {Object, null}, [fileUpload]: {String}}}*/
        let method = methodDefinitions[methodName];
        let requiredArgs;
        let fileUploadArg;

        if(method){
            requiredArgs  = method.required? Object.keys(method.required) : '';
            fileUploadArg = method.fileUpload;

        }else{
            requiredArgs  = ''; //little hack, strings have length ;p
            fileUploadArg = null;
        }

        Object.defineProperty(BotSire.prototype, methodName, {
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
                if(fileUploadArg && util.isObject(methodArgs[fileUploadArg])){
                    fileUpload = true;
                }

                this.log(`Call method ${methodName} with args ${util.inspect(methodArgs, {colors: true, depth: 0})}`);
                return this._request(methodName, methodArgs, fileUpload);
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
        this.config = populateOptions(opts);

        if(!this.config.token){
            throw new TypeError(`Invalid Bot Token: ${this.config.token}`);
        }

        //Generate generic bot api methods from methods.json
        generateMethodFunctions();

        //Private Properties
        this._polling = null;

        //Public Properties
        this.command = new Command(this.config.command);
        this.config.command = null; //we don't need to save this after init Command

        //Logger Set-up
        this.log = debug('BotSire:log');
        this.err = debug('BotSire:error');
        let messageListener = msg => this.log('New message: ' + util.inspect(msg, {colors: true}));
        this.on('error', err => this.err(err.message + ', Stack Trace: ' + err.stack)); //Log Errors
        this.on('message', messageListener);
        this.on('inline_query', messageListener);
        this.on('chosen_inline_result', messageListener);

        //Pooling Abort
        this.polling.abort = () => {
            if(this._polling && !this._polling.abort){
                this._polling.promise.cancel();
                this._polling.promise = null;
                this._polling.abort = true;
                this._polling.timeout = 1;

                this.log('Polling was cancelled');
                return;
            }

            this.log('Polling is not running');
        };

        this.log('Waiting bot personal information...');

        //Start
        this.getMe().then(result => {
            this.id       = result.id;
            this.name     = result.first_name;
            this.username = result.username;

            this.log(`Hello owner, I am Bot ${this.id}, but you can call me ${this.name}, my username on Telegram is @${this.username}. Let's get to work...`);
            this.emit('ready');
        });
    }

    polling(){
        if(this.webHook){/**@todo WebHook logic*/
            this.log('WebHook is set, please disable webHook before using polling');
            return false;
        }

        if(!this._polling){
            this._polling = {
                promise: null,
                abort: false,
                timeout: 1,
                offset: 0
            }

        }else if(!this._polling.abort){
            this.log('Pooling already running');
            return;

        }else{
            this._polling.abort = false;
        }

        let pollingLoop = () => {
            if(this._polling.abort){
                return;
            }

            (this._polling.promise = this._request(
                'getUpdates',
                {offset: this._polling.offset, limit: this.config.poolingLimit, timeout: this.config.poolingInterval},
                false,
                {requestTimeout: this.config.poolingInterval * 2000}

            )).then(updates => {
                this._polling.timeout = 1;
                this._parseUpdates(updates)

            }).catch(err => {
                //Was intentionally cancelled not an error
                if(!(err instanceof Promise.CancellationError)){
                    this.emit('error', new errors.PoolingError(err));
                    /**
                     * @todo| Check errors, beware that webHook can be set, we should verify this, and set the
                     * @todo| this.webHook variable if so
                     */

                    this._polling.timeout *= 2; //Timeout to reconnect
                }

            }).finally(() => {
                if(this._polling.timeout > 1){
                    setTimeout(() => pollingLoop(), this._polling.timeout);
                    return;
                }

                process.nextTick(() => pollingLoop());
            });
        };

        pollingLoop();

        return true;
    }

    /**
     * Parse Update Array
     *
     * @param updates {Array}
     * @private
     */
    _parseUpdates(updates){
        let counter;

        if(util.isArray(updates)){
            if(updates.length){
                //just to make sure
                for(counter = 0; updates[counter].update_id < this._polling.offset && counter < updates.length; counter++){}

                this.log(`Received ${updates.length - counter} new messages`);

                for(; counter < updates.length; counter++){
                    this._parseUpdate(updates[counter]);
                }

                this._polling.offset = updates[counter - 1].update_id + 1;
            }

        }else{
            this.emit('error', new errors.UpdateError(updates));
        }
    }

    /**
     * Parse Update Object
     *
     * @param update {{update_id, message, inline_query, chosen_inline_result}}
     * @private
     */
    _parseUpdate(update){
        if(util.isObject(update)){
            if(update.message){
                this.emit('message', update.message);
                this._parseMessage(update.message);
                return;

            }else if(update.inline_query){
                this.emit('inline_query', update.inline_query);
                return;

            }else if(update.chosen_inline_result){
                this.emit('chosen_inline_result', update.chosen_inline_result);
                return;
            }
        }

        this.emit('error', new errors.UpdateError(update));
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
        /**@todo Message custom type creation*/
        if(message.text){
            if(message.text[0] === '/'){ //we got a command
                return this.command.emit(message.text, message).catch(err => this.emit('error', err));
            }

            this.emit('text', message);

        }else{
            for(let counter = 0; counter < messageTypes.length; counter++){
                let type = messageTypes[counter];

                if(message[type]){
                    this.emit(type, message);
                    return;
                }
            }

            this.emit('error', new errors.MessageError(message));
        }
    }

    _methodUrl(method) {
        return `${telegramBotApiUrl + this.config.token}/${method}`;
    }

    _request(methodName, methodArgs, fileUpload, config) { //for now opts are internal use only
        if(util.isObject(config)){
            config = Object.assign({}, this.config, config);

        }else{
            config = this.config;
        }

        this.log(`Request for method ${methodName}`);

        return new Promise((resolve, reject, onCancel) => {
            let request;
            let requestOpts    = url.parse(this._methodUrl(methodName));
            requestOpts.method = 'POST';
            requestOpts.port   = 443;

            let clear;
            /**@todo get Socket Timeout to work properly*/

            if(fileUpload){
                let fields          = Object.keys(methodArgs);
                let index           = 0;
                let formData        = new FormData(config.formData); //allow custom options
                let endCalled       = false;
                requestOpts.headers = formData.getHeaders();
                request             = https.request(requestOpts);

                let drainListener = () => {
                    if(endCalled){
                        formData.end();
                        return;

                    }else if(index === fields.length){ //cases when last append returned false
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

                let endListener = () => request.end;

                clear = () => {
                    formData.removeListener('end', endListener);
                    formData.removeListener('drain', drainListener);
                    formData.unpipe(request);

                    if(!endCalled){
                        endCalled = true;
                        formData.end();
                    }

                    request.abort(); //cancel request event
                };

                formData.pipe(request);
                formData.once('error', err => {
                    clear();
                    reject(err);
                });
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

                clear = () => request.abort();

                //Allow us to bind request events before pushing data
                process.nextTick(() => request.write(methodJsonParams, 'utf8', () => request.end));
            }

            //Listen to request Events
            request.once('error', err => {
                clear();
                reject(err);
            });

            request.once('response', res => {
                res.setEncoding('utf8'); //get as string
                if(res.statusCode < 200 || res.statusCode >= 300){
                    this.emit('error', new errors.RequestError(res.statusMessage, res.statusCode));
                }

                resolve(util.readableStreamToPromise(res/*, config.requestTimeout*/));/**@todo timeout*/
            });

            onCancel(clear);

        }).then(json => {
            this.log(`Received result for ${methodName}`);

            /**@type {{ok, [result], [description], [error_code]}}*/
            json = JSON.parse(json);

            if(json.ok){
                this.log(`Call to ${methodName} successful` + (json.description? ` description: ${json.description}` : ''));
                return json.result;
            }

            throw new errors.TelegramError(json.description, json.error_code);

        }).catch(err => {
            this.emit('error', new errors.MethodError(err));
            throw err;
        });
    }
}

module.exports = BotSire;

