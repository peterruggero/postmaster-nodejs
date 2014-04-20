var util        = require('util');
var request     = require('request');
var helpers     = require('./lib/helpers');

var API_VERSION = 'v1';
var BASE_URI    = 'https://api.postmaster.io/';
var PROD_URL    = 'https://api.postmaster.io/' + API_VERSION + '/';
var USER_AGENT  = 'Postmaster/' + API_VERSION + ' Node.js';

/**
 * Format function arguments for output.
 * @param  {Object} args Function arguments to be formatted.
 * @return {string}      Formatted arguments.
 */
var formatArgs = function(args) {
    return [util.format.apply(util.format, Array.prototype.slice.call(args))];
};

/**
 * JSON.stringify with extra options.
 * @param  {Object} data     Object to be stringified.
 * @param  {function} replacer Replacer function.
 * @return {string}          Stringified object.
 */
var stringify = function (data, replacer) {
    if (replacer && replacer === true) return JSON.stringify(data, helpers.replacer);
    return JSON.stringify(data, null, 4);
};

/**
 * JSON.parse data safely in case a malformed object is passed in.
 * @param  {string} data JSON string to be parsed.
 * @return {Object}      Parse JSON string.
 */
var safeParse = function (data) {
    try {
        return JSON.parse(data);
    } catch (e) {
        if (e.message === 'Unexpected token data') {
            return data;
        }
        return null;
    }
};

/**
 * Expose index functionality.
 * @param  {Object} credentials API credentials.
 * @param  {boolean} debug       Indicates debug mode.
 * @return {Object}             Current API lib information.
 */
module.exports = function (credentials, debug) {

    debug = debug || false;

    if (debug === true) {
        console.debug = function(){
            return console.log.apply(console.log, formatArgs(arguments));
        };
    } else {
        console.debug = function() {
            return void 0;
        };
    }

    var url  = PROD_URL;
    var requestor  = require('./lib/requestor')(request, credentials, stringify, safeParse);
    var v1 = require('./lib/v1.js')(requestor, url, stringify);

    var apiLib = {
        v1: v1,
        url: url,
        requestor: requestor,
        safeParse: safeParse,
        stringify: stringify,
        formatArgs: formatArgs
    };

    console.debug('Postmaser Node.js Client Library'.blue, '\n', apiLib);

    // Check for API key.
    if (!credentials.apiKey) throw new Error('Please supply an API key.');

    return apiLib;
};