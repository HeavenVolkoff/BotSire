"use strict";

/**
 * NPM External Modules
 */
const Promise = require('bluebird');
const debug   = require('debug');

/**
 * Internal Modules
 */
const util = require('./util.js');
const errors = require('./errors');

/*
 * Module Constants
 */
const Regexps = {
    SPACES:                  /\s+/,
    COMMAND_VALIDATE_ARGS:   /^(?:<\w+>)*(?:\[\w+])*(?:\.\.\.\w+)?$/,
    COMMAND_REQUIRED_ARGS:   /<\w+>/g,
    COMMAND_OPTIONAL_ARGS:   /\w+(?=])/g,
    COMMAND_SPREAD_ARGS:     /\.\.\.\w+/,
    COMMAND_PARSE_NAME:      /^\/\w+/,
    COMMAND_PARSE_ARGUMENTS: /(?:^\s?\/[\w@]+)|(?:\s+)/
};

class Command extends Map{
    /**
     *
     * @param opts {Array|{commands: {Array}, [annotations]: {Object}}}
     */
    constructor(opts){
        super();

        this.log         = debug('BotSire:command');
        this.log.log     = console.info.bind(console);
        this.annotations = null;
        this.onError     = util.nop;

        if(util.isObject(opts)){
            let commands;

            if(util.isArray(opts)){
                commands = opts;

            }else{
                commands = util.isArray(opts.commands)? opts.commands : '';

                if(util.isObject(opts.annotations)){
                    for(let annotation in opts.annotations){
                        if(opts.annotations.hasOwnProperty(annotation) && !util.isFunction(opts.annotations[annotation])){
                            throw(new TypeError(`Invalid annotation: ${annotation}`))
                        }
                    }

                    this.annotations = opts.annotations;
                }
            }

            for(let counter = 0; counter < commands.length; counter++){
                /**@type {{definition: {String}, callback: {Function}}}*/
                let command = commands[counter];

                if(util.isObject(command)){
                    this.set(command.definition, command.callback);

                }else{
                    throw new TypeError(`Invalid command: ${command}`);
                }
            }
        }
    }

    err(callback){
        if(!util.isFunction(callback)){
            throw new TypeError(`Callback is invalid`);

        }

        this.onError = callback;
    }

    /**
     * Register a Command event Listener
     *
     * @param definition {String}
     * @param callback {Function}
     */
    on(definition, callback){
        if(!(util.isString(definition) && util.isFunction(callback))){
            throw new TypeError(`Command is invalid`);

        }

        let counter;
        let commandName;
        let commandModel = definition.split(Regexps.SPACES);
        let command    = {
            definition: definition,
            callback  : callback
        };

        for(counter = 0; counter < commandModel.length; counter++){
            if(commandModel[counter][0] === '/'){
                commandName = commandModel[counter++];
                break;

            }else if(!(this.annotations && this.annotations[commandModel[counter]])){
                throw new TypeError(`Undefined Annotation: ${commandModel[counter]}`);

            }else if(util.isArray(command.annotations)){
                command.annotations.push(commandModel[counter]);

            }else if(util.isAssigned(command.annotations)){
                command.annotations = [command.annotations, commandModel[counter]];

            }else{
                command.annotations = commandModel[counter];
            }
        }

        if(!commandName){
            throw new TypeError('Invalid Command');
        }

        if(counter < commandModel.length){ //We have args
            let commandArgs = commandModel.slice(counter, commandModel.length).join(''); //args only

            if(!Regexps.COMMAND_VALIDATE_ARGS.test(commandArgs)){
                throw new TypeError('Invalid Command');

            }else if(commandArgs.length){ //Ok we have custom args
                command.args = {
                    required: (commandArgs.match(Regexps.COMMAND_REQUIRED_ARGS) || '').length,
                    optional: commandArgs.match(Regexps.COMMAND_OPTIONAL_ARGS),
                    spread  : Regexps.COMMAND_SPREAD_ARGS.test(commandArgs)
                }
            }
        }

        this.set(commandName, command);
    }

    /**
     * Emit Command Event
     * @param command {String} - Command event name plus arguments to-be parsed
     * @param msg     {Object}
     * @param that    {Object}
     */
    emit(command, msg, that){
        let commandModel;
        let commandName;
        let commandArgs;

        if(!(commandName = command.match(Regexps.COMMAND_PARSE_NAME))){ //safe measure case RegExp returns null
            this.onError('INVALID_COMMAND', command, msg);
            return Promise.reject(new errors.CommandError(`Invalid Command: ${command}`, 'INVALID_COMMAND'));
        }

        if(!(commandModel = this.get(commandName = commandName[0]))){
            this.onError('UNKNOWN_COMMAND', command, msg, commandName);
            return Promise.reject(new errors.CommandError('Unknown Command', 'UNKNOWN_COMMAND'));
        }

        commandArgs = command.split(Regexps.COMMAND_PARSE_ARGUMENTS).filter(Boolean); //Remove empty args

        if(commandModel.annotations){
            if(util.isArray(commandModel.annotations)){
                for(let counter = 0; counter < commandModel.annotations.length; counter++){
                    if(!this.annotations[commandModel.annotations[counter]](commandName, commandArgs, commandModel, msg)){ //Exec annotation
                        this.log(`Command ${commandName} aborted by annotation`);
                        return resolve();
                    }
                }

            }else{
                if(!this.annotations[commandModel.annotations](commandName, commandArgs, commandModel, msg)){ //Exec annotation
                    this.log(`Command ${commandName} aborted by annotation`);
                    return resolve();
                }
            }
        }

        this.log(`Received command: ${commandName} with arguments {${commandArgs.join(', ')}}`);

        if(commandModel.args){
            if(commandArgs.length < commandModel.args.required){ //Check if we receive at least the required arguments
                this.onError('MISSING_ARGUMENT', command, msg, commandName, commandModel);
                return Promise.reject(new errors.CommandError(`Command ${commandName} received ${commandArgs.length} of the ${commandModel.args.required} required arguments`, 'MISSING_ARGUMENT'));

            }else{
                let offset = commandModel.args.required;
                let args = commandArgs.slice(0, offset);

                if(commandModel.args.optional){
                    let optionalArgs = {};

                    for(let counter = 0; counter < commandModel.args.optional.length && offset < commandArgs.length; offset++, counter++){
                        optionalArgs[commandModel.args.optional[counter]] = commandArgs[offset];
                    }

                    args.push(optionalArgs);
                }

                if(commandModel.args.spread){
                    args.push(commandArgs.slice(offset, commandArgs.length));
                }

                args.push(msg);

                try{
                    resolve(commandModel.callback.apply(that, args));

                }catch(error){
                   return Promise.reject(error);
                }
            }

        }else{
            try{
                resolve(commandModel.callback.call(that, msg));

            }catch(error){
                return Promise.reject(error);
            }
        }
    }
}

module.exports = Command;