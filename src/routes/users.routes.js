const { Router } = require('express');

const UsersController = require('../controllers/UserController');

const usersRoutes = Router();

const useController = new UsersController();

usersRoutes.POST('/', useController.create);

module.exports = usersRoutes;
