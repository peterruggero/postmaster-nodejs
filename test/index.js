require('colors');

var postmaster = require('../index')({
    apiKey: '0b9a54438fba2dc0d39be8f7c6c71a58',
    password: undefined
}, true);

/**
 * Log response from test function.
 * @param  {Object} err      Error response object or null.
 * @param  {Object} response Response object.
 * @param  {String} action   Postmaster action type.
 */
var logTestResponse = function(err, response, action) {
    if (err === null) {
        console.log(action, 'Test passed!'.green);
    }
    else {
        var errPrefix = 'Test failed!\nHTTP Status Code:' + response.statusCode.toString() + '\n';
        console.log(action, errPrefix.red, err.red);
    }
}

console.log('----------');

// // POST https://api.postmaster.io/v1/shipments
// postmaster.v1.shipment.create({
//     to: {
//         company: 'acme',
//         contact: 'Joe Smith',
//         line1: '1110 Someplace Ave.',
//         city: 'Austin',
//         state: 'TX',
//         zip_code: '78704',
//         phone_no: '5551234444'
//     },
//     carrier: 'ups',
//     service: '2DAY',
//     package: {
//         weight: 1.5,
//         length: 10,
//         width: 6,
//         height: 8
//     }
// }, function(err, response) {
//     logTestResponse(err, response, 'shipment.create');
// });

// // POST https://api.postmaster.io/v1/shipments (international shipment)
// postmaster.v1.shipment.create({
//     to: {
//         'company': 'Groupe SEB',
//         'contact': 'Joe Smith',
//         'line1': 'Les 4 M - Chemin du Petit Bois',
//         'line2': 'BP 172',
//         'city': 'ECULLY CEDEX',
//         'zip_code': '69134',
//         'phone_no': '9197207941',
//         'country': 'FR'
//     },
//     packages: [{
//         'weight': 2.2,
//         'length': 10,
//         'width': 6,
//         'height': 8,
//         'customs': {
//             'type': 'Other',
//             'comments': 'Some great stuff.',
//             'contents': [{
//                 'description': 'A Bolt',
//                 'value': '0.34',
//                 'weight': 1,
//                 'quantity': 1,
//                 'country_of_origin': 'US'
//             }]
//         }
//     }],
//     carrier: 'fedex',
//     service: 'INTL_PRIORITY'
// }, function(err, response) {
//     logTestResponse(err, response, 'shipment.create (international)');
// });

// // GET https://api.postmaster.io/v1/shipments
// postmaster.v1.shipment.list({
//     limit:1
// }, function(err, response) {
//     logTestResponse(err, response, 'shipment.list');
// });

// // // DELETE https://api.postmaster.io/v1/shipments/1234/void
// // postmaster.v1.shipment.void(1234, function(err, response) {
// //     logTestResponse(err, response, 'shipment.void');
// // });

// // // GET https://api.postmaster.io/v1/shipments/1234/track
// // postmaster.v1.track.byId(1234, function(err, response) {
// //     logTestResponse(err, response, 'track.byId');
// // });

// // GET https://api.postmaster.io/v1/track?tracking=1234
// // postmaster.v1.track.byReferenceNo({
// //     tracking: '1Z2325X60390227005'
// // }, function(err, response) {
// //     console.log(response);
// //     logTestResponse(err, response, 'track.byReferenceNo');
// // });

// // // POST https://api.postmaster.io/v1/track
// // postmaster.v1.track.monitorExternalPackage({
// //     tracking_no: '1Z1896X70305267337',
// //     url: 'http://example.com/your-listener',
// //     events: ['Delivered', 'Exception']
// // }, function(err, response) {
// //     logTestResponse(err, response, 'track.monitorExternalPackage');
// // });

// // POST https://api.postmaster.io/v1/validate
// postmaster.v1.address.validate({
//     company: 'ACME',
//     contact: 'Joe Smith',
//     line1: '100 Congress Ave.',
//     city: 'Austin',
//     state: 'TX',
//     zip_code: '78701'
// }, function(err, response) {
//     logTestResponse(err, response, 'address.validate');
// });

// // POST https://api.postmaster.io/v1/times
// postmaster.v1.time.list({
//     from_zip: '28771',
//     to_zip: '78704',
//     weight: 1.0,
//     carrier: 'ups'
// }, function(err, response) {
//     logTestResponse(err, response, 'time.list');
// });

// // POST https://api.postmaster.io/v1/rates
// // postmaster.v1.rate.list({
// //     from_zip: '28771',
// //     to_zip: '78704',
// //     weight: 1.0,
// //     carrier: 'ups'
// // }, function(err, response) {
// //     logTestResponse(err, response, 'rate.list');
// // });

// postmaster.v1.rate.list({
//     from_zip: '14202',
//     to_zip: '01999',
//     from_country: 'US',
//     to_country: 'DE',
//     weight: 1.0,
//     carrier: 'USPS'
// }, function(err, response) {
//     logTestResponse(err, response, 'rate.list');
// });

// // POST https://api.postmaster.io/v1/packages
// postmaster.v1.box.create({
//     width: 10,
//     height: 12,
//     length: 8,
//     name: 'My Fun Box'
// }, function(err, response) {
//     logTestResponse(err, response, 'box.create');
// });

// // DELETE https://api.postmaster.io/v1/packages/1234/
// // postmaster.v1.box.delete(5653527728750592, function(err, response) {
// //     logTestResponse(err, response, 'box.delete');
// // });

// // GET https://api.postmaster.io/v1/packages
// postmaster.v1.box.list({
//     limit: 5
// }, function(err, response) {
//     logTestResponse(err, response, 'box.list');
// });

// // POST https://api.postmaster.io/v1/packages/fit
// postmaster.v1.box.fit({
//     items: [{
//         'width': 2.2,
//         'length': 3,
//         'height': 1,
//         'count': 2,
//         'sku': '123ABC',
//     }],
//     packages: [{
//         'width': 6,
//         'length': 6,
//         'height': 6,
//      }, {
//         'width': 12,
//         'length': 12,
//         'height': 12,
//     }]
// }, function(err, response) {
//     logTestResponse(err, response, 'box.fit');
// });