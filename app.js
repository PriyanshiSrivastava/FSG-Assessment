'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var fs = require('fs')
var cors = require('cors')
require('dotenv').config()

var app = express();
// parse application/json
app.use(bodyParser.json())

app.use(express.json());
app.use(cors())

app.use(express.urlencoded({
	extended: false
}));
app.use('/static', express.static('public'))

app.set("view engine", "ejs");

app.use('/test', require("./src/routes/home"));
app.use('/', require("./src/routes/book"));
app.use('/genre', require("./src/routes/genre"));
app.use('/checkout', require("./src/routes/checkout"));
// const { CLIENT_ID, APP_SECRET } = process.env;
// const paypal = require('paypal-rest-sdk');
// paypal.configure({
// 	'mode': 'sandbox', //sandbox or live
// 	'client_id': 'Ae4tzwobQvI_YtunxZ0YDfNepXVw_2z5Qo-B1iLkczmlmJN185YLzr8CqFvjMudKFHCxLFJunnp1C-lz',
// 	'client_secret': 'EGhpzEX1nW5VJEUOqW7mJUqc5zJcw6MdxQJ7ePcPytj45DDfM00fM7rzQAhXAHsiNCMdeHXTnAqT-5FS'
// });
// app.post('/pay', (req, res) => {
// 	const create_payment_json = {
// 		"intent": "sale",
// 		"payer": {
// 			"payment_method": "paypal"
// 		},
// 		"redirect_urls": {
// 			"return_url": "http://localhost:5000/successfull",
// 			"cancel_url": "http://localhost:5000/"
// 		},
// 		"transactions": [{
// 			"amount": {
// 				"currency": "USD",
// 				"total": req.query.price ? req.query.price : 0
// 			}
// 		}]
// 	};
// 	// app.get('/success', (req, res) => {
// 	// 	const payerId = req.query.PayerID;
// 	// 	const paymentId = req.query.paymentId;
// 	// 	const execute_payment_json = {
// 	// 		"payer_id": payerId,
// 	// 		"transactions": [{
// 	// 			"amount": {
// 	// 				"currency": "INR",
// 	// 				"total": req.query.price
// 	// 			}
// 	// 		}]
// 	// 	};

// 	// 	paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
// 	// 		if (error) {
// 	// 			console.log(error.response);
// 	// 			throw error;
// 	// 		} else {
// 	// 			console.log(JSON.stringify(payment));
// 	// 			res.send('Success');
// 	// 		}
// 	// 	});
// 	// });
// 	paypal.payment.create(create_payment_json, function (error, payment) {
// 		if (error) {
// 			throw error;
// 		} else {
// 			for (let i = 0; i < payment.links.length; i++) {
// 				if (payment.links[i].rel === 'approval_url') {
// 					res.redirect(payment.links[i].href);
// 				}
// 			}
// 		}
// 	});

// });
app.get('/cancel', (req, res) => res.send('Cancelled'));

app.listen(5000, () => {
	console.log(`Server listening on port ${5000}`);
	// app.use("/swagger", swaggerui.serve, swaggerui.setup(swaggerDoc));
});
//  module.exports = app;

// module.exports.handler = sls(app);