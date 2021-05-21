//Initializations
const hostname = '127.0.0.1';
const port = 3000;//1337;//3000;

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Handle the request
app.get('/', function(req, res){
    res.render('index', {title: 'Welcome'});
});

app.get('/about', function(req, res){
    res.render('about');
});

//Port listen
app.listen(port);
console.log('Server is running on ${port}');