'use strict';

exports.UpdateError = class UpdateError extends Error{
    constructor(update){
        super(`${UpdateError.name}: Invalid Update ${update}`);
        this.errno  = 'EUPDT';
        this.update = update;
    }
};

exports.RequestError = class RequestError extends Error{
    constructor(msg, statusCode){
        super(`${RequestError.name}: Response was ${msg}, with status code ${statusCode}`);
        this.errno      = 'ERQST';
        this.statusCode = statusCode;
    }
};

exports.TelegramError = class TelegramError extends Error{
    constructor(msg, code){
        super(`${TelegramError.name}: Telegram Bot Api request unsuccessful, description: ${msg}, error code: ${code}`);
        this.errno = 'ETLGRAM';
        this.code  = code;
    }
};

exports.MessageError = class MessageError extends Error{
    constructor(msg){
        super(`${MessageError.name}: Invalid Message ${msg}`);
        this.errno = 'EINVMSG';
        this.msg   = msg;
    }
};

exports.MethodError = class MethodError extends Error{
    constructor(method, err){
        super(`${MethodError.name}: Failed to process method ${method}, because ${err.message}'`);
        this.errno  = 'EMETHOD';
        this.method = method;
        this.err    = err;
    }

    get stack(){
        return `${this.err.constructor.name} Stack Trace: ${this.err.stack}`;
    }
};

exports.PoolingError = class PoolingError extends Error{
    constructor(err){
        super(`${PoolingError.name}: Failed while polling for data, because ${err.message}`);
        this.errno = 'EPOOL';
        this.err   = err;
    }

    get stack(){
        return `${this.err.constructor.name} Stack Trace: ${this.err.stack}`;
    }
};

exports.CommandError = class CommandError extends Error{
    constructor(msg, code){
        super(`${CommandError.name}: Failed to process command, because ${msg}`);
        this.errno = 'ECMD';
        this.code  = code;
    }
};