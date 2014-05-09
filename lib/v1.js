/**
 * Expose v1 functions.
 * @param  {function} requestor Responsible for HTTP(S) requests.
 * @param  {string} url       Production URL.
 * @param  {function} stringify JSON.stringify with more options.
 * @return {Object}           API response.
 */
module.exports = function(requestor, url, stringify) {
	return {

		/**
		 * Shipment functions.
		 * @type {Object}
		 */
		shipment: {

			/**
			 * Create a shipment.
			 * @param  {Object}   object   Shipment to be created.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			create: function(object, callback) {
				requestor({
					method: 'POST',
					url: url + 'shipments',
					headers: {
						'Content-type': 'application/json'
					},
					followAllRedirects: false,
					body: object
				}, callback);
			},

			/**
			 * Void a shipment.
			 * @param  {Object}   id       Shipment ID to be voided.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			void: function(id, callback) {
				if (!id) {
					throw new Error('An ID is required.');
				}

				requestor({
					method: 'DELETE',
					url: url + 'shipments/' + id + '/void',
					followAllRedirects: false
				}, callback);
			},
			
			/**
			 * List all or a limited number of shipments.
			 * @param  {Object}   queryStrings Querystring options for listing shipments.
			 * @param  {Function} callback     Callback function.
			 * @return {Object}                API response.
			 */
			list: function(queryStrings, callback) {
				if (queryStrings && !(queryStrings instanceof Object)) {
					throw new Error('Querystring object must be of type Object.');
				}

				stringify(queryStrings, true);
				
				requestor({
					method: 'GET',
					url: url + 'shipments',
					followAllRedirects: false,
					qs: queryStrings
				}, callback);
			}
		},

		/**
		 * Tracking functions.
		 * @type {Object}
		 */
		track: {

			/**
			 * Track shipment by ID.
			 * @param  {Object}   id       Shipment ID to be tracked.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			byId: function(id, callback) {
				if (!id) {
					throw new Error('An ID is required.');
				}

				requestor({
					method: 'GET',
					url: url + 'shipments/' + id + '/track',
					followAllRedirects: false
				}, callback);
			},

			/**
			 * Track shipment by Reference Number.
			 * @param  {Object}   queryStrings Querystring options for tracking a shipment.
			 * @param  {Function} callback     Callback function.
			 * @return {Object}                API response.
			 */
			byReferenceNo: function(queryStrings, callback) {
				if (queryStrings && !(queryStrings instanceof Object)) {
					throw new Error('Querystring object must be of type Object.');
				}

				stringify(queryStrings, true);
				
				requestor({
					method: 'GET',
					url: url + 'track',
					followAllRedirects: false,
					qs: queryStrings
				}, callback);
			},

			/**
			 * Subscribe to webhook to monitor an external package.
			 * @param  {Object}   object   Request options for monitoring an external package.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			monitorExternalPackage: function(object, callback) {
				requestor({
					method: 'POST',
					url: url + 'track',
					headers: {
						'Content-type': 'application/json'
					},
					followAllRedirects: false,
					body: object
				}, callback);
			}
		},

		/**
		 * Address functions.
		 * @type {Object}
		 */
		address: {

			/**
			 * Validate an address.
			 * @param  {Object}   object   Address to be validated.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			validate: function(object, callback) {
				requestor({
					method: 'POST',
					url: url + 'validate',
					headers: {
						'Content-type': 'application/json'
					},
					followAllRedirects: false,
					body: object
				}, callback);
			}
		},

		/**
		 * Time functions.
		 * @type {Object}
		 */
		time: {

			/**
			 * List times to ship a package between two locations.
			 * @param  {Object}   object   Request options for getting transport times.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			list: function(object, callback) {
				requestor({
					method: 'POST',
					url: url + 'times',
					headers: {
						'Content-type': 'application/json'
					},
					followAllRedirects: false,
					body: object
				}, callback);
			}
		},

		/**
		 * Rate functions.
		 * @type {Object}
		 */
		rate: {

			/**
			 * List rates to ship a package between two locations.
			 * @param  {Object}   object   Request options for getting shipping rates.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			list: function(object, callback) {
				requestor({
					method: 'POST',
					url: url + 'rates',
					headers: {
						'Content-type': 'application/json'
					},
					followAllRedirects: false,
					body: object
				}, callback);
			}
		},

		/**
		 * Box functions.
		 * @type {Object}
		 */
		box: {

			/**
			 * Create a box.
			 * @param  {Object}   object   Box to be created.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			create: function(object, callback) {
				requestor({
					method: 'POST',
					url: url + 'packages',
					headers: {
						'Content-type': 'application/json'
					},
					followAllRedirects: false,
					body: object
				}, callback);
			},

			/**
			 * Delete a box.
			 * @param  {Object}   id       Box ID to be deleted.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			delete: function(id, callback) {
				if (!id) {
					throw new Error('An ID is required.');
				}

				requestor({
					method: 'DELETE',
					url: url + 'packages/' + id,
					followAllRedirects: false
				}, callback);
			},

			/**
			 * List all or a limited number of boxes.
			 * @param  {Object}   object   Request options for listing boxes.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			
			/**
			 * List all or a limited number of boxes.
			 * @param  {Object}   queryStrings Querystring options for listing boxes.
			 * @param  {Function} callback     Callback function.
			 * @return {Object}                API response.
			 */
			list: function(queryStrings, callback) {
				if (queryStrings && !(queryStrings instanceof Object)) {
					throw new Error('Querystring object must be of type Object.');
				}

				stringify(queryStrings, true);
				
				requestor({
					method: 'GET',
					url: url + 'packages',
					followAllRedirects: false,
					qs: queryStrings
				}, callback);
			},

			/**
			 * Fit items into a box.
			 * @param  {Object}   object   Request options for fitting items into a box.
			 * @param  {Function} callback Callback function.
			 * @return {Object}            API response.
			 */
			fit: function(object, callback) {
				requestor({
					method: 'POST',
					url: url + 'packages/fit',
					headers: {
						'Content-type': 'application/json'
					},
					followAllRedirects: false,
					body: object
				}, callback);
			}
		}
	}
}