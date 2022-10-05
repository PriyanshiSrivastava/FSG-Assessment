const paypal = require('paypal-rest-sdk');
paypal.configure({
	'mode': 'sandbox', //sandbox or live
	'client_id': process.env.CLIENT_ID,
	'client_secret': process.env.CLIENT_SECRET
});
exports.pay = async (req, res) => {
	const paymentJson = {
		"intent": "sale",
		"payer": {
			"payment_method": "paypal"
		},
		"redirect_urls": {
			"return_url": process.env.SUCCESS_URL,
			"cancel_url": process.env.CANCEL_URL
		},
		"transactions": [{
			"amount": {
				"currency": "USD",
				"total": req.query.price ? req.query.price : 0
			}
		}]
	};
	paypal.payment.create(paymentJson, function (error, payment) {
		if (error) {
			throw error;
		} else {
			for (let i = 0; i < payment.links.length; i++) {
				if (payment.links[i].rel === 'approval_url') {
					res.redirect(payment.links[i].href);
				}
			}
		}
	});
};
exports.success = async (req, res) => {
	return res.json('Checkout successful!' );
}