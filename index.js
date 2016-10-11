var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./config/routes.js');
var path = require('path');

mongoose.connect('mongodb://expressCandies:expressCandies@ds033307.mlab.com:33307/candies')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

app.listen(port, function(){
    console.log("magic is happening on port " + port);
});