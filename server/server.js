var express = require('express');
// var path = require('path');

var app = express();

app.use(express.static('bundle'));

app.listen(8080);