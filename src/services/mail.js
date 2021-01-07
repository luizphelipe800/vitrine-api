const nodemailer = require('nodemailer');
const hbs = require('express-handlebars');
const nhbs = require('nodemailer-express-handlebars');
const path = require('path');

const transport = nodemailer.createTransport({
  host: 'vitrine-mailhog',
  port: '1025',
  auth: null
});

transport.use('compile', nhbs({
  viewEngine: hbs.create({
    layoutsDir: path.resolve(__dirname, '..', 'templates', 'layouts'),
    partialsDir: path.resolve(__dirname, '..', 'templates', 'partials'),
    defaultLayout: 'default',
    extname: '.hbs'
  }),
  viewPath: path.resolve(__dirname, '..', 'templates'),
  extName: '.hbs'
}))

module.exports = transport;
