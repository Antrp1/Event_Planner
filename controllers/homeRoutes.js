// const Product = require("../models/product");
const router = require("express").Router();
const { Product } = require("../models")

router.get("/", async (req, res) => {
  try {

   
    res.render("homepage");
  } catch (err) {
    console.log(err);
  }
});

router.get("/products", async (req, res) => {
  try {
    // const products = await Product.findAll()
    const threeThings = ["Hello", "world", "!!!!!!!"]
      res.render("products", {
     threeThings
    })
    } catch (err) {
      console.log(err);
    }
});

router.get("/checkout", async (req, res) => {
  try {
    res.render("checkout");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

// //GET request
// exports.getProducts = (req, res) => {
//     Product.findAll()
//     .then(products => res.json(products))
//     .catch(err => {
//         console.error(err);
//         res.status(500).json({ message: 'Internal server error' });
//     });
// };

// //POST request
// exports.addProduct = (req, res) => {
//     Product.create(req.body)
//     .then(product => res.status(201).json(product))
//     .catch(err => {
//         console.error(err);
//         res.status(500).json({ message: 'Internal server error' });
//     });
// };
