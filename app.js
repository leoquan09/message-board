require('dotenv').config();
const path = require('node:path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const configurePassport = require('./config/passport');
const homeRouter = require('./routes/homeRouter');
const newRouter = require('./routes/newRouter');
const logInRouter = require('./routes/log-in');
const signUpRouter = require('./routes/signUp');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'catInTheRiceHat',
    resave: false,
    saveUninitialized: false,
}));

configurePassport(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use(homeRouter);
app.use(newRouter);
app.use(logInRouter);
app.use(signUpRouter);

app.listen(3000, console.log('App running on localhost:3000'));
