// const Product = require("../models/product");

const router = require("express").Router();
const { Product, Category } = require("../models");

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
    const productsData = await Product.findAll({
      include: [
        {
          model: Category
        }
      ]
    })

    const products = productsData.map((product) => product.get({ plain: true }));
    console.log(products)

    res.render("products", {
      products,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/checkouts", async (req, res) => {
  try {
    res.render("checkout");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
