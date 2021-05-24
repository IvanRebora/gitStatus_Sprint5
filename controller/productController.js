//let productos = require('../data/productsData');

const jsonDB = require('../model/jsonDatabase');

const productModel = jsonDB('products');

let productController = {

    home: (req, res) => {
        console.log('entro al home del produt controller y redirijo')

        res.redirect('/')

    },
    cart: (req, res) => {
        res.render('cart');
    },

    
        create: (req, res) => {
            console.log('entre a crear')
            res.render('createProd');
        },
    show: (req, res) => {
        console.log('me hicieron click :' + req.params.id)

      //  let product = productos.find(function (value) {
        //    console.log('me encoraron:' + value.id)
          //  return value.id === req.params.id
        //})
        const product = productModel.find(req.params.id);
        console.log(product)
        if (product) {
          res.render('productDesc', { product });
        } else {
            res.render('error404');
        }
    },
    
    store: (req, res) => {
        console.log('entre al storess')
        console.log(req.body)

        const product = req.body;
        product.image = req.file ? req.file.filename : '';
      
        console.log(product.image)
        productModel.create(product);


        //const maxIdProduct = productos.reduce( (curr, next) => curr.id >= next.id ? curr : next );
   

       // let producto =
        /*{

            id: maxIdProduct.id + 1,
            name: req.body.name,
            retailer: req.body.retailer,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: req.body.image

        }
        productos.push(producto)*/
      
        res.redirect('/')
    },
    edit: (req, res) => {
        console.log('ESTOY ENTRANDO AL METODO EDIT:')

        let product = productModel.find(req.params.id);


        console.log(product)
        if (product) {
            res.render('editProd', { product });
        } else {
            res.render('error404');
        }
    },

    update: (req, res) => {
        console.log('Entré al Update')
        console.log(req.body)

        let  product = req.body;
        
        product.id = req.params.id;

        product.image = req.file ? req.file.filename : req.body.oldImagen;
        
        if (req.body.image===undefined) {
          product.image = product.oldImage
      }
      
      delete product.oldImage;
      
        productModel.update(product);
       /* let producto = {

            id: req.params.id,
            name: req.body.name,
            retailer: req.body.retailer,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: req.body.image

        }
        console.log(producto)
        console.log('---------------------------------------')
        console.log('me seleccionaron en update :' + req.params.id)


        productos.forEach(function (i) {
            if (i.id === req.params.id) {
                i.name = producto.name
                i.retailer = producto.retailer
                i.description = producto.description
                i.price = producto.price
                i.discount = producto.discount
            }

        })
        console.log(productos)*/

        res.redirect('/')
    },

    destroy: (req, res) => {
        console.log('entre destroy')
        console.log(req.params.id)


        productModel.delete(req.params.id);

      /*  let menorArray = productos.filter(function (value) {

            return value.id !== req.params.id
        })
        console.log('-------ARRAY NUEVO MENOR')
        console.log(menorArray)
        productos = [...menorArray]
        console.log('----------ARRAY VISITADOS')
        console.log(productos)*/
        res.redirect('/')
    },

    search: (req, res) => {

        let dataABuscar = req.query
        res.sed(dataABuscar)
    }



}

module.exports = productController;