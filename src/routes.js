const routes = require('express').Router();
const auth = require('./middlewares/passport');
const users = require('./controllers/users');
const shops = require('./controllers/shops');

routes.post('/login', users.validate);
routes.post('/register', users.create);

routes.get('/shops', shops.index);
routes.get('/shops/:id', shops.show);

routes.use(auth.authenticate('jwt', { session: false }));

routes.get('/users/:id', users.show);
routes.put('/users/:id', users.update);
routes.delete('/users/:id', users.remove);

routes.post('/shops', shops.create);
routes.put('/shops/:id', shops.update);
routes.delete('/shops/:id', shops.remove);

module.exports = routes;
