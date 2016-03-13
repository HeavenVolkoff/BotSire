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
        super(`${MethodError.name}: Failed to process method ${method}` + (err.errno? ` Error code: ${err.errno}` : ''));
        this.errno  = 'EMETHOD';
        this.method = method;
        this.err    = err;
        this.stack  = `${this.message}\n  Stack Trace: ${this.err.stack}`;
    }
};

exports.PollingError = class PollingError extends Error{
    constructor(err){
        super(`${PollingError.name}: Failed while polling for data` + (err.errno? ` Error code: ${err.errno}` : ''));
        this.errno = 'EPOOL';
        this.err   = err;
        this.stack = `${this.message}\n  Stack Trace: ${this.err.stack}`;
    }
};

exports.CommandError = class CommandError extends Error{
    constructor(msg, code){
        super(`${CommandError.name}: Failed to process command, because ${msg}`);
        this.errno = 'ECMD';
        this.code  = code;
    }
};

exports.InlineCommandError = class InlineCommandError extends Error{
    constructor(msg){
        super(`${InlineCommandError.name}: ${msg}`);
        this.errno = 'EINCMD';
    }
};