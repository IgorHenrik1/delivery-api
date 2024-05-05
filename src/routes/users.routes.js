const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload');
const UserController = require('../controllers/UserController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const usersRoutes = Router();

const userController = new UserController();
const upload = multer(uploadConfig.MULTER);

usersRoutes.post('/', userController.create);
usersRoutes.put('/', ensureAuthenticated, userController.update);
usersRoutes.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    (req, res) => {
        console.log(req.file.filename);
        res.json();
    },
);

module.exports = usersRoutes;
