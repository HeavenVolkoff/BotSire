"use strict";

const util = require('../util');

class ReplyKeyboardMarkup{
    constructor(keyboard, opts){
        if(util.isArray(keyboard)){
            if(!util.isArray(keyboard[0])){
                for(let counter = 0; counter < keyboard.length; counter++){
                    keyboard[counter] = [keyboard[counter]];
                }
            }

            this.keyboard = keyboard;

        }else{
            if(util.isObject(keyboard) && !util.isAssigned(opts)){
                opts = keyboard;
            }

            this.keyboard = [];
        }

        if(util.isObject(opts)){
            this.resize_keyboar    = Boolean(opts.resize_keyboar);
            this.one_time_keyboard = Boolean(opts.one_time_keyboard);
            this.selective         = Boolean(opts.selective);

        }else{
            this.resize_keyboar    = false;
            this.one_time_keyboard = false;
            this.selective         = false;
        }
    }

    addButtons(row, val){
        if(!util.isArray(this.keyboard[row])){
            this.keyboard[row] = [];
        }

        if(util.isArray(val)){
            this.keyboard[row].concat(val);

        }else{
            this.keyboard[row].push(val);
        }
    }

    pushRow(row){
        if(util.isArray(row)){
            this.keyboard.push(row);

            return true;
        }

        return false;
    }
}

module.exports = ReplyKeyboardMarkup;