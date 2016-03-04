'use strict';

exports.UpdateError = class UpdateError extends Error{
    constructor(){
        super(`Invalid Update`);
        this.errno = 'EUPDT';
    }
};

exports.RequestError = class RequestError extends Error{
    constructor(message, statusCode){
        super(message);
        this.errno      = 'ERQST';
        this.statusCode = statusCode;
    }

    toString(){
        return `${this.message}, status Code: ${this.statusCode}`;
    }
};

exports.TelegramError = class TelegramError extends Error{
    constructor(message, code){
        super(message);
        this.errno = 'ETLGRAM';
        this.code  = code;
    }

    toString(){
        return `Telegram Bot Api request unsuccessful, description: ${this.message}, error code: ${this.code}`;
    }
};

exports.InvalidMessage = class InvalidMessage extends Error{
    constructor(){
        super('Invalid Message');
        this.errno = 'EINVMSG'
    }
};