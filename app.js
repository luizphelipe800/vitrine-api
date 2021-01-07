const express = require('express');
const path = require('path');
const passport = require('./src/middlewares/passport');
const { route } = require('./src/routes');
const routes = require('./src/routes');

const app = express();

app.use(express.static(path.resolve(__dirname, 'temp')));
app.use('/docs', express.static(path.resolve(__dirname, 'docs')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(routes);



module.exports = app;
