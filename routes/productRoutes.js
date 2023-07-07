const router = require('express').Router();
const { Product } = require('../models');

// Get all products
router.get('/products', async (req, res) => {
  try {
    const productsData = await Product.findAll();
    console.log(productsData)
    res.status(200).json(productsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one product by id
router.get('/products/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id);
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new product
router.post('/products', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a product by id
router.put('/products/:id', async (req, res) => {
  try {
    const productData = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!productData[0]) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a product by id
router.delete('/products/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
