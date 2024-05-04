const { Router } = require('express');

const usersRoutes = require('./users.routes');
const sessionsRouter = require('./sessions.routes');
const orderRoutes = require('./orders.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRouter);
routes.use('/order', orderRoutes);

module.exports = routes;
