require('colors');

var postmaster = require('../index')({
	apiKey: '0b9a54438fba2dc0d39be8f7c6c71a58',
	password: undefined
}, true);

var sNull = function(n) {
    if (n === null) {
        return 'null';
    }
    return n;
};

// POST https://api.postmaster.io/v1/shipments
// postmaster.v1.shipment.create({
// 	to: {
// 		company: 'acme',
// 		contact: 'Joe Smith',
// 		line1: '1110 Someplace Ave.',
// 		city: 'Austin',
// 		state: 'TX',
// 		zip_code: '78704',
// 		phone_no: '5551234444'
// 	},
// 	carrier: 'ups',
// 	service: '2DAY',
// 	package: {
// 		weight: 1.5,
// 		length: 10,
// 		width: 6,
// 		height: 8
// 	}
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('shipment.create', err.red, postmaster.stringify(response).green);
// });

// GET https://api.postmaster.io/v1/shipments
// postmaster.v1.shipment.list({
// 	limit:10
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('shipment.list', err.red, postmaster.stringify(response).green);
// });

// DELETE https://api.postmaster.io/v1/shipments/1234/void
// postmaster.v1.shipment.void(1234, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('shipment.void', err.red, postmaster.stringify(response).green);
// });

// GET https://api.postmaster.io/v1/shipments/1234/track
// postmaster.v1.track.byId(1234, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('track.byId', err.red, postmaster.stringify(response).green);
// });

// GET https://api.postmaster.io/v1/track?tracking=1234
// postmaster.v1.track.byReferenceNo({
// 	tracking: '1234'
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('track.byReferenceNo', err.red, postmaster.stringify(response).green);
// });

// POST https://api.postmaster.io/v1/track
// postmaster.v1.track.monitorExternalPackage({
// 	tracking_no: '1Z1896X70305267337',
//     url: 'http://example.com/your-listener',
//     events: ['Delivered', 'Exception']
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('track.monitorExternalPackage', err.red, postmaster.stringify(response).green);
// });

// POST https://api.postmaster.io/v1/validate
// postmaster.v1.address.validate({
// 	company: 'ACME',
//     contact: 'Joe Smith',
//     line1: '100 Congress Ave.',
//     city: 'Austin',
//     state: 'TX',
//     zip_code: '78701'
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('address.validate', err.red, postmaster.stringify(response).green);
// });

// POST https://api.postmaster.io/v1/times
// postmaster.v1.time.list({
// 	from_zip: '28771',
// 	to_zip: '78704',
// 	weight: 1.0,
// 	carrier: 'ups'
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('time.list', err.red, postmaster.stringify(response).green);
// });

// POST https://api.postmaster.io/v1/rates
// postmaster.v1.rate.list({
// 	from_zip: '28771',
// 	to_zip: '78704',
// 	weight: 1.0,
// 	carrier: 'ups'
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('rate.list', err.red, postmaster.stringify(response).green);
// });


// POST https://api.postmaster.io/v1/packages
// postmaster.v1.box.create({
// 	width: 10,
// 	height: 12,
// 	length: 8,
// 	name: 'My Fun Box'
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('box.create', err.red, postmaster.stringify(response).green);
// });

// GET https://api.postmaster.io/v1/packages
// postmaster.v1.box.list({
// 	limit: 2
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('box.list', err.red, postmaster.stringify(response).green);
// });

// POST https://api.postmaster.io/v1/packages/fit
// postmaster.v1.box.fit({
// 	items: [{
//         'width': 2.2,
//         'length': 3,
//         'height': 1,
//         'count': 2,
//         'sku': '123ABC',
//     }],
//     packages: [{
// 	        'width': 6,
// 	        'length': 6,
// 	        'height': 6,
// 	    }, {
// 	        'width': 12,
// 	        'length': 12,
// 	        'height': 12,
//     }]
// }, function(err, response) {
// 	if (err === null) err = 'No errors';
// 	console.log('box.fit', err.red, postmaster.stringify(response).green);
// });