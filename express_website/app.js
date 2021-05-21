//Initializations
const hostname = '127.0.0.1';
const port = 3000;//1337;//3000;

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Handle the request
app.get('/', function(req, res){
    res.send('<h1>Hello there !!</h1>');
    red.end;
});

//Port listen
app.listen(port);
console.log('Server is running on ${port}');