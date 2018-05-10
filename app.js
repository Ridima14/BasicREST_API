var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var db = require('./db');


var UserController = require('./user/UserControllers');
app.use('/users', UserController);

var routes = require('./user/userControllers');
app.use('/', routes);


module.exports = app;
