const path = require('node:path');
const express = require('express');
const homeRouter = require('./routes/homeRouter');
const app = express();

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', homeRouter);

app.listen(3000, console.log('App running on localhost:3000'));