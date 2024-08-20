// create web server
// use express.js
// use body-parser
// use path
// use mysql
// use ejs
// use express-session
// use express-validator

// create connection to database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

// connect to database
connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to database');
});

// create express app
var express = require('express');
var app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

// use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// use express-session
var session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// use express-validator
var expressValidator = require('express-validator');
app.use(expressValidator());

// create route for home page
app.get('/', function(req, res) {
    res.render('index');
});

// create route for login page
app.get('/login', function(req, res) {
    res.render('login');
});

// create route for signup page
app.get('/signup', function(req, res) {
    res.render('signup');
});

// create route for login request
app.post('/login', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(err, result) {
        if (result.length > 0) {
            req.session.loggedin = true;
            req.session.email = email;
            res.redirect('/');
        } else {
            res.send('Incorrect email or password');
        }
        res.end();
    });
});

// create route for signup request
app.post('/signup', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('confirmPassword', '');
});