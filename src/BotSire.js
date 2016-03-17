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
//         :YYiii$$$$$$$YYYYYYY$$$$YY$$$$YYiiiiiYYYYYYi' (modified, author: cmang)
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
const http         = require('http');
const url          = require('url');

/**
 * NPM External Modules
 */
const Promise = require('bluebird');
const request = require('hyperquest');
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
        requestTimeout:  120 * 1000, //2 min
        poolingInterval: 60,         //1 min
        poolingLimit:    100,        //Limit of updates received from Telegram
        polling:         false,      //Enable polling after start event
        inlineCommands:  null        //Parse commands at inline queries
    };

    if(util.isString(opts)){
        options.token = opts;

    }else if(util.isObject(opts)){
        options.polling = Boolean(opts.polling);

        options.token           = util.isString(opts.token)           ? opts.token           : '';
        options.requestTimeout  = util.isInteger(opts.requestTimeout) ? opts.requestTimeout  : options.requestTimeout;
        options.poolingInterval = util.isInteger(opts.poolingInterval)? opts.poolingInterval : options.poolingInterval;
        options.poolingLimit    = util.isInteger(opts.poolingLimit)   ? opts.poolingLimit    : options.poolingLimit;
        options.inlineCommands  = util.isObject(opts.inlineCommands)  ? opts.inlineCommands  : options.inlineCommands;

        /*Command Options*/
        options.commands = opts.commands;

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

                this.log(`Call method ${methodName} with args\n  ${util.inspect(methodArgs, {colors: true, depth: 0})}`);
                return this._request(methodName, methodArgs, fileUpload);
            }
        })
    }
};

/**
 * Create your Telegram bot with ease.
 */
class BotSire extends EventEmitter{
    /**
     * @param opts
     * @emits BotSire#ready
     */
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
        this.command         = new Command(this.config.commands);
        this.config.commands = null; //we don't need to save this after init Command
        this.agent           = {
            http:  new http.Agent({keepAlive: true}),
            https: new https.Agent({keepAlive: true})
        };

        //Logger Set-up
        this.log            = debug('BotSire:log');
        this.log.log        = console.info.bind(console);
        this.err            = debug('BotSire:error');
        this.err.log        = console.error.bind(console);
        let messageListener = msg => this.log('New message:\n  ' + util.inspect(msg, {colors: true}));
        this.on('error',                err => this.err(err.stack));
        this.on('message',              messageListener);
        this.on('inline_query',         (err, msg) => messageListener(msg));
        this.on('chosen_inline_result', messageListener);

        //Pooling Abort
        this.polling.abort = () => {
            if(this._polling && !this._polling.abort){
                this._polling.promise.cancel();
                this._polling.promise = null;
                this._polling.abort   = true;
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

            if(this.config.polling){
                this.polling();
            }

            this.emit('ready');
        });
    }

    /**
     * Starts continuous poll for Telegram updates
     * @returns {boolean}
     */
    polling(){
        if(this.webHook){/**@todo WebHook logic*/
            this.log('WebHook is set, please disable webHook before using polling');
            return false;
        }

        if(!this._polling){
            this._polling = {
                abort:   false,
                offset:  0,
                timeout: 1,
                promise: null
            }

        }else if(!this._polling.abort){
            this.log('Pooling already running');
            return false;

        }else{
            this._polling.abort = false;
        }

        /**
         * Long Poll loop
         * @emits BotSire#error
         */
        let pollingLoop = () => {
            if(this._polling.abort){
                return;
            }

            (this._polling.promise = this._request(
                'getUpdates',
                {
                    limit:   this.config.poolingLimit,
                    offset:  this._polling.offset,
                    timeout: this.config.poolingInterval
                },
                false,
                {requestTimeout: this.config.poolingInterval * 2000}

            )).then(updates => {
                this._polling.timeout = 1;
                this._parseUpdates(updates);

            }).catch(err => {
                //Was intentionally cancelled not an error
                if(!(err instanceof(Promise.CancellationError))){
                    this.emit('error', new errors.PollingError(err));

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
     * Parse inline extra arguments
     *
     * @param query {String}
     * @returns {null|{query}}
     * @throws {errors.InlineCommandError}
     * @private
     */
    _inlineQueryCommands(query){
        if(!this.config.inlineCommands || !query.length){
            return {};
        }

        let args = {};
        let queryArr = query.split(/\s+/);

        for(let index = 0; index < queryArr.length; index++){
            let command = queryArr[index];

            if(command[0] === '/'){
                if(this.config.inlineCommands.hasOwnProperty(command)){
                    queryArr[index] = '';

                    if(this.config.inlineCommands[command]){ //need to be a Boolean, determine if arg is a flag or if it has parameters
                        if(++index === queryArr.length){
                            throw new errors.InlineCommandError(`Command ${command} requires parameters`);

                        }else if(queryArr[index][0] === '"'){
                            if(queryArr[index][queryArr[index].length - 1] === '"') {
                                args[command]   = queryArr[index].slice(1, queryArr[index].length - 1);
                                queryArr[index] = '';

                            }else{
                                args[command]   = queryArr[index].slice(1) + ' ';
                                queryArr[index] = '';

                                if(++index === queryArr.length){
                                    throw new errors.InlineCommandError(`Unmatched closing \" at command ${command}`);
                                }

                                while(queryArr[index][queryArr[index].length - 1] !== '"'){
                                    if(queryArr[index][0] === '/'){
                                        throw new errors.InlineCommandError(`Unmatched closing \" at command ${command}`);
                                    }

                                    args[command]  += queryArr[index] + ' ';
                                    queryArr[index] = '';

                                    if(++index === queryArr.length){
                                        throw new errors.InlineCommandError(`Unmatched closing \" at command ${command}`);
                                    }
                                }

                                args[command]  += queryArr[index].slice(0, queryArr[index].length - 1);
                                queryArr[index] = '';
                            }

                        }else if(queryArr[index][0] !== '/'){
                            args[command]   = queryArr[index];
                            queryArr[index] = '';

                        }else{
                            throw new errors.InlineCommandError(`Command ${command} requires parameters`);
                        }
                    }else{
                        args[command] = true;
                    }

                }else{
                    throw new errors.InlineCommandError(`Unknown Command ${command}`);
                }
            }
        }

        args.query = queryArr.filter(Boolean).join(' ');
        return args;
    }

    /**
     * Parse Update Array
     *
     * @param updates {Array}
     * @emits BotSire#error
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
     * @emits BotSire#message
     * @emits BotSire#inline_query
     * @emits BotSire#chosen_inline_result
     * @emits BotSire#error
     */
    _parseUpdate(update){
        if(util.isObject(update)){
            if(util.isObject(update.message)){
                this.emit('message', update.message);
                this._parseMessage(update.message);
                return;

            }else if(util.isObject(update.inline_query)){

                try{
                    this.emit('inline_query', null, update.inline_query, this._inlineQueryCommands(update.inline_query.query));

                }catch (err){
                    this.emit('error', err);
                    this.emit('inline_query', err, update.inline_query); /**@check error should also be here?*/
                }

                return;

            }else if(util.isObject(update.chosen_inline_result)){
                this.emit('chosen_inline_result', update.chosen_inline_result);
                return;
            }
        }

        this.emit('error', new errors.UpdateError(update));
    }

    /**
     * Parse Message into its different types
     *
     * @param message {{text}}
     * @param   message.message_id {Number}
     * @param   [message.from]     {{id, first_name, last_name, username}}
     * @param   message.data       {Number}
     * @param   message.chat       {id, type}
     *
     * @emits BotSire#text
     * @emits BotSire#audio
     * @emits BotSire#document
     * @emits BotSire#photo
     * @emits BotSire#sticker
     * @emits BotSire#video
     * @emits BotSire#voice
     * @emits BotSire#contact
     * @emits BotSire#location
     * @emits BotSire#new_chat_participant
     * @emits BotSire#left_chat_participant
     * @emits BotSire#new_chat_title
     * @emits BotSire#new_chat_photo
     * @emits BotSire#delete_chat_photo
     * @emits BotSire#group_chat_created
     * @emits BotSire#supergroup_chat_created
     * @emits BotSire#channel_chat_created
     * @emits BotSire#error
     * @private
     */
    _parseMessage(message){
        /**@todo Message custom type creation*/
        if(message.text){
            if(message.text[0] === '/'){ //we got a command
                return this.command.emit(message.text, message, this).catch(err => this.emit('error', err));
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

    /**
     * Return Telegram API URL for methodName
     *
     * @param methodName
     * @returns {String}
     * @private
     */
    _methodUrl(methodName) {
        return `${telegramBotApiUrl + this.config.token}/${methodName}`;
    }

    /**
     * Request Method from Telegram API
     *
     * @param methodName {String}
     * @param methodArgs {Object}
     * @param fileUpload {Boolean}
     * @param [config]   {Object} for now config are internal use only
     * @returns {Promise.<T>}
     * @emits BotSire#error
     * @private
     */
    _request(methodName, methodArgs, fileUpload, config) {
        if(util.isObject(config)){
            config = Object.assign({}, this.config, config);

        }else{
            config = this.config;
        }

        this.log(`Request for method ${methodName}`);

        return new Promise((resolve, reject, onCancel) => {
            let reqOpts = {agent: this.agent.https, method: 'POST'};
            let url     = this._methodUrl(methodName);
            let clear;
            let req;
            /**@todo get Socket Timeout to work properly*/

            if(fileUpload){
                let fields      = Object.keys(methodArgs);
                let index       = 0;
                let formData    = new FormData(config.formData);
                let endCalled   = false;
                reqOpts.headers = formData.getHeaders();
                req             = request(url, reqOpts);

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

                clear = () => {
                    formData
                        .removeListener('drain', drainListener)
                        .unpipe(req);

                    if(!endCalled){
                        endCalled = true;
                        formData.end();
                    }

                    req.emit('close'); //cancel request event
                };

                formData
                    .pipe(req)
                    .once('error', err => {clear(); reject(err);})
                    .on('drain', drainListener);

                //Allow us to bind request events before pushing data
                process.nextTick(drainListener); //Start pushing data to formData

            }else{
                let methodJsonParams;
                clear = () => req.emit('close');

                try{
                    methodJsonParams = JSON.stringify(methodArgs);

                }catch (error){ return reject(error); }

                reqOpts.headers = {
                    'Content-Type':   "application/json; charset=utf-8",
                    'Content-Length': Buffer.byteLength(methodJsonParams)
                };

                (req = request(url, reqOpts)).end(methodJsonParams, 'utf8');
            }

            req.once('response', res => {
                res.setEncoding('utf8'); //get as string
                if(res.statusCode < 200 || res.statusCode >= 300){
                    this.emit('error', new errors.RequestError(res.statusMessage, res.statusCode));
                }
            });

            resolve(util.readableStreamToPromise(req).catch(err => {clear(); throw err;}));
            onCancel(clear);

        }).then(json => {
            this.log(`Received result for ${methodName}`);

            try{
                /**@type {{ok, [result], [description], [error_code]}}*/
                json = JSON.parse(json);

            }catch (error){
                throw new errors.JSONParseError(error, json);
            }

            if(json.ok){
                this.log(`Call to ${methodName} successful` + (json.description? ` description: ${json.description}` : ''));
                return json.result;
            }

            throw new errors.TelegramError(json.description, json.error_code);

        }).catch(err => {
            this.emit('error', new errors.MethodError(methodName, err));
            throw err;
        });
    }
}

module.exports = BotSire;