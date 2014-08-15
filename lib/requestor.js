require('colors');

module.exports = function (request, credentials, stringify, safeParse) {
    return function (opts, callback) {
        // console.debug('API Request'.blue, stringify(opts).yellow);

        if (!credentials.apiKey) {
            throw new Error('An API key is required as part of your credentials.');
        }

        // Force 30 second timeout for now until memory leak is fixed.
        opts.timeout = 30000;

        /**
         * POST.
         * @type {string}
         */
        if (opts.method === 'POST') {
            if (!opts.body || !(opts.body instanceof Object)) {
                throw new Error('Invalid request body. Please review your structure.');
            }

            // stringify POST body
            opts.body = stringify(opts.body);

            // perform request
            request.post(opts, function(err, response, data) {
                if (err || response && response.statusCode >= 400) {
                    var error = err || data || new Error('Bad API Response');
                    // console.debug('Status Code:'.red, response.statusCode.toString().red);
                    // console.debug(stringify(error).red);
                    return callback(error, response);
                }

                // parse response body
                var body = safeParse(data);

                if (body === null) {
                    return callback(new Error('No JSON Response returned'), null);
                }

                return callback(null, body);
            }).auth(credentials.apiKey, credentials.password, true);
        }

        /**
         * GET.
         * @type {string}
         */
        if (opts.method === 'GET') {
            // perform request
            request.get(opts, function(err, response, data) {
                if (err || response && response.statusCode >= 400) {
                    var error = err || data || new Error('Bad API Response');
                    // console.debug('Status Code:'.red, response.statusCode.toString().red);
                    // console.debug(stringify(error).red);
                    return callback(error, response);
                }

                // parse response body
                var body = safeParse(data);

                if (body === null) {
                    return callback(new Error('No JSON Response returned'), null);
                }

                return callback(null, body);
            }).auth(credentials.apiKey, credentials.password, true);
        }

        /**
         * DELETE.
         * @type {int}
         */
        if (opts.method === 'DELETE') {
            // perform request
            request.del(opts, function(err, response, data) {
                if (err || response && response.statusCode >= 400) {
                    var error = err || data || new Error('Bad API Response');
                    // console.debug('Status Code:'.red, response.statusCode.toString().red);
                    // console.debug(stringify(error).red);
                    return callback(error, response);
                }

                return callback(null, response.statusCode);
            }).auth(credentials.apiKey, credentials.password, true);
        }
    };
};