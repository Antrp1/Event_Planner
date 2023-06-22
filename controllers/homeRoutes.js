const Product = require("../models/product");
const router = require("express").Router();

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

router.get("/", async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    res.render("homepage");
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;
