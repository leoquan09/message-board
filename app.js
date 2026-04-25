const path = require('node:path');
const express = require('express');
const homeRouter = require('./routes/homeRouter');
const newRouter = require('./routes/newRouter');
const app = express();
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', homeRouter);
app.use('/new', newRouter);

app.listen(3000, console.log('App running on localhost:3000'));