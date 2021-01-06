const express = require('express');
const path = require('path');
const passport = require('./src/middlewares/passport');
const { route } = require('./src/routes');
const routes = require('./src/routes');

const app = express();

app.use('/', express.static(path.resolve(__dirname, 'temp')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(routes);

app.get('/healthcheck', (req, res) => {
    return res.send('api is on the air!');
})

module.exports = app;
