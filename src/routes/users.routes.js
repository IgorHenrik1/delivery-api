const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const UserController = require('../controllers/UserController');
const UserAvatarController = require('../controllers/UserAvatarController');

const usersRoutes = Router();

const userController = new UserController();
const upload = multer(uploadConfig.MULTER);

const userAvatarController = new UserAvatarController();

usersRoutes.post('/', userController.create);
usersRoutes.put('/', ensureAuthenticated, userController.update);
usersRoutes.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    userAvatarController.update,
);

module.exports = usersRoutes;
