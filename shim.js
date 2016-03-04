/**
 * Shim Libs
 *
 * This are shim libs, used because of node lack of support to full ES6 spec
 * TODO: Remove this once the ES6 spec is 'fully' implemented on node
 */
require('harmony-reflect'); //Enable Reflect and Proxy API
global.Promise = require('bluebird'); //Replace default promise with bluebird

/**
 * (Object.values | Object.entries) shim
 * @link https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js
 */
(() => {
    "use strict";

    const reduce       = Function.call.bind(Array.prototype.reduce);
    const isEnumerable = Function.call.bind(Object.prototype.propertyIsEnumerable);
    const concat       = Function.call.bind(Array.prototype.concat);
    const keys         = Reflect.ownKeys;

    if (!Object.values) {
        Object.values = function values(O) {
            return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
        };
    }

    if (!Object.entries) {
        Object.entries = function entries(O) {
            return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []), []);
        };
    }
})();