const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/healthcheck', (req, res) => {
    return res.send('api is on the air!');
})

module.exports = app;