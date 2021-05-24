let productos = require('../data/productsData');

const jsonDB = require('../model/jsonDatabase');

const productModel = jsonDB('products');

let homeController = {
    show: (req, res) => {
     
        const products = productModel.all();


        res.render('home', { products});
    }
}

module.exports = homeController;