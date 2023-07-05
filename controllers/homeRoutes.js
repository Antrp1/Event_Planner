// const Product = require("../models/product");
const stripe = require("stripe")(
  "sk_test_51NOA4SDltZuFbXatKHv7ROPwdUQ13yVe8fsPhwFwjWsgWU1ElqQMIoLQMrG1tQm3ZDB9306j1BZbltPjKVTsfw7s006eHCJwKs"
);
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
