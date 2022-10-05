'use strict';
const router = require("express").Router();

var PaymentController = require('../controller/paypay');

router.post('/pay', PaymentController.pay);

router.get('/successful', PaymentController.success);

module.exports = router;
