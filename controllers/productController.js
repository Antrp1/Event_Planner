const Product = require('../models/product');

//GET request
exports.getProducts = (req, res) => {
    Product.findAll()
    .then(products => res.json(products))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    });
};

//POST request
exports.addProduct = (req, res) => {
    Product.create(req.body)
    .then(product => res.status(201).json(product))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    });
};