var express = require('express');
var path = require('path');

// Fill me in.
// var db = require('db_file');
// var routes = require('routes_file');



var app = express();

app.use(express.static('../client'));

app.listen(8080);