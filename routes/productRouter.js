const express = require('express');

const router = express.Router();

const multer = require('multer');
const path = require('path');
const controller = require('../controller/productController');

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/images'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});



const upload = multer({ storage });

router.get('/create', controller.create);

router.get('/cart', controller.cart);

router.get('/:id/edit', controller.edit);

router.get('/:id', controller.show);

router.get('/search', controller.search);

router.put('/:id', upload.single('image'), controller.update);

router.post('/store', upload.single('image'), controller.store);

router.delete('/:id', controller.destroy);

module.exports = router;