"use strict";
var express = require('express');
var config = require('config');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/user', require('./src/routes/user'));
app.listen(config.get('port'), function () {
    console.log("Server work");
});
