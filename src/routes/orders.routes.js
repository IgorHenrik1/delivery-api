const { Router } = require('express');

const OrderController = require('../controllers/OrderController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const orderRoutes = Router();

const orderController = new OrderController();

orderRoutes.post('/', ensureAuthenticated, orderController.create);

module.exports = orderRoutes;
