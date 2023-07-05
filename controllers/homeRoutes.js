// const Product = require("../models/product");
const router = require("express").Router();
const { Product } = require("../models");

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
    const threeThings = ["Hello", "world", "!!!!!!!"];
    res.render("products", {
      threeThings,
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
