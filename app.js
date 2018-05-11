var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var db = require('./db');


var UserController = require('./user/userControllers');
app.use('/users', UserController);

var routes = require('./user/userControllers');
app.use('/', routes);


var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

module.exports = app;
