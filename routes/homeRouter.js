
const express = require('express');

const router = express.Router();

const controller = require('../controller/homeController');

router.get('/', controller.show);



module.exports = router;
