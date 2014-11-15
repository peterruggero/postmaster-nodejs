postmaster-nodejs
=================

Developer Friendly Shipping

Postmaster takes the pain out of sending shipments via UPS, Fedex, and USPS. Save money before you ship, while you ship, and after you ship.

https://www.postmaster.io/


<h2>Installation</h2>
```
npm install postmaster-shipping
```

<h2>Usage</h2>
If the library was installed through ```npm```:

```
var postmaster = require('postmaster-shipping')({
    apiKey: '0b9a54438fba2dc0d39be8f7c6c71a58',
    password: undefined
}, true);
```

If running from source, see ```test/index.js``` for sample code.

For those who have passwordless accounts, simply leave the password field as ```undefined```. The ```true``` flag indicates debug mode, which outputs slightly more information to the console.

See https://www.postmaster.io/docs for further tutorials and documentation.

<h2>Issues</h2>
Please use appropriately tagged github <a href="https://github.com/postmaster/postmaster-api/issues">issues</a> to request features or report bugs.
