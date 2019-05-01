const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const session = require('express-session');
const axios = require('axios');
const _ = require('lodash');
const fs = require('fs');

const register = require('./js/register.js');
// const test = require('./test_format');

const {
    PORT = 8080,
    SESS_LIFETIME = 1000 * 60 * 60 * 2,
    SESS_NAME = 'sid',
    SESS_SECRET = 'fight sim'
} = process.env;

var user = 'Characters';

var app = express();
hbs.registerPartials(__dirname + '/views/partials');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    name: SESS_NAME,
    secret: SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: SESS_LIFETIME,
        secure: false,
        sameSite: true
    }
}));

const redirectLogin = (request, response, next) => {
    if (!request.session.userId) {
        response.redirect('/')
    } else {
        next()
    }
};

const redirectHome = (request, response, next) => {
    if (request.session.userId) {
        response.redirect('/index_b')
    } else {
        next()
    }
};

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/views'));

app.get('/', (request, response) => {
    response.render('index.hbs')
});

app.post('/register', async (request, response) => {
    var username = request.body.username;
    var email = request.body.email;
    var password = request.body.password;
    var re_password = request.body.confirm_password;

    var output = await register.addData(username, email, password, re_password);
    // var data = await register.showData();

    response.render('index.hbs', {
        account_creation: output
    })

    // if (register.addData(request.body.username, request.body.email, request.body.password, request.body.confirm_password) === false) {
    //     // var output = register.validateForm(request.body.username, request.body.email, request.body.password, request.body.confirm_password);
    //     var username = register.checkName(request.body.username);
    //     var email = register.checkEmail(request.body.email);
    //     var password = register.checkEmail(request.body.password);
    //     var re_password = register.checkPass(request.body.confirm_password);
    //     response.render('index.hbs', {
    //         error_output: output
    //     })
    // } else {
    //     response.render('register.hbs', {
    //         output: 'Success'
    //     })
    // }
});

app.post('/delete_account', async (request, response) => {

    var output = await register.deleteData(request.body.email);

    response.render('index.hbs', {
        account_deletion: output
    })
});

app.post('/account_details', async (request, response) => {

    var output = await register.showData(request.body.email);

    response.render('index.hbs', {
        account_details: output
    })
});

app.post('/update_username', async (request, response) => {
    var output1 = await register.updateUsername(request.body.email, request.body.username);

    response.render('index.hbs', {
        update: output1
    })
});

app.listen(PORT, () => {
    console.log(`Server is up on the port ${PORT}`);

    // character_db.init();
});