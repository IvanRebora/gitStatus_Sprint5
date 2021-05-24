const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const path = require('path');

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
//const authMiddleware = require('../middlewares/authMiddleware');



router.get('/register', guestMiddleware, controller.register);

router.get('/login',guestMiddleware, controller.login);

router.post('/find', controller.loginProcess);

router.post('/store', uploadFile.single('avatar'), validations, controller.store);

//router.get('/profile/', authMiddleware, usersController.profile);

// Logout
//router.get('/logout/', usersController.logout);

module.exports = router;