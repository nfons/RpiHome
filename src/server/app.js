"use strict";

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var dinnerRoutes = require('./routes/dinner-route');

var app = express();


app.use(bodyParser.json());
app.use('/dinner', dinnerRoutes);

//serve static files
app.use('/',express.static(path.resolve(__dirname+'../../../dist')));


mongoose.connect('mongodb://localhost:27017/rpihome');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s, %s', host, port, __dirname);
});