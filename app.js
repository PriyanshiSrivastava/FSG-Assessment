'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var fs = require('fs')
require('dotenv').config()

var app = express();
// parse application/json
app.use(bodyParser.json())

app.use(express.json());

app.use(express.urlencoded({
	extended: false
}));
app.use('/static', express.static('public'))

app.set("view engine", "ejs");

app.use('/test', require("./src/routes/home"));
app.use('/', require("./src/routes/book"));
app.use('/genre', require("./src/routes/genre"));
app.use('/checkout', require("./src/routes/checkout"));

app.listen(5000, () => {
	console.log(`Server listening on port ${5000}`);
});
