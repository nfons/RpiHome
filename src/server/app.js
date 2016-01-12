"use strict";

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var dinnerRoutes = require('./routes/dinner-route');

var app = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.all('/',allowCrossDomain);
app.use(bodyParser.json());
app.use('/dinner', dinnerRoutes);


//serve static files
app.use('/',express.static(path.resolve(__dirname+'../../../dist')));


mongoose.connect('mongodb://localhost:27017/rpihome');

var server = app.listen(8181, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s, %s', host, port, __dirname);
});