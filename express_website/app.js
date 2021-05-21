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

app.get('/contact', function(req, res){
    res.render('contact');
});

app.post('/contact/send', function(req, res){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jmunoz@syner.info',
            pass: 'juan11info'
        }
    });

    var mailOptions = {
        from: 'Juancho <jmunoz@syner.info>',
        to: 'juan.arturo.munoz@gmail.com',
        subject: 'Website sumission',
        text: 'You have a submission with the following details... Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
        html: '<p>You have a submission with the following details...</p><ul><li>Name: '+ req.body.name +'</li><li>Email: '+ req.body.email +'</li><li>Message: '+ req.body.message +'</li></ul>'
    }
    
    transporter.sendMail(mailOptions, function(error){
        if(error){
            console.log(error);
            res.redirect('/');
        }else{
            console.log('Message sent: ' + info.response);
            res.redirect('/');
        }
    });

});

//Port listen
app.listen(port);
console.log('Server is running on ${port}');