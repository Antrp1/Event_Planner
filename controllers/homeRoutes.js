// const Product = require("../models/product");

const router = require("express").Router();
const { Product, Category } = require("../models");

// var checkout = document.getElementById("link");
// console.log(checkout);
// function getLink() {
//   var requestUrl = checkout;
// }
// console.log(requestUrl)

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
          model: Category,
        },
      ],
    });

    const products = productsData.map((product) =>
      product.get({ plain: true })
    );
    console.log(products);

    const keyboards = products.filter((product) => product.category_id === 1);
    console.log(keyboards);

    const monitors = products.filter((product) => product.category_id === 2);
    console.log(monitors);

    const headsets = products.filter((product) => product.category_id === 3);
    console.log(headsets);

    const mouse = products.filter((product) => product.category_id === 4);
    console.log(mouse);

    res.render("products", {
      monitors,
      keyboards,
      headsets,
      mouse,
    });
  } catch (err) {
    console.log(err);
  }
});

// router.get("/checkouts/:id", async (req, res) => {
//   try {
//     res.render("checkout");
//   } catch (err) {
//     console.log(err);
//   }

// });

router.get("/checkouts/mice/:id", (req, res) => {
  const miceId = req.params.id;

  res.render("checkout", { miceId: miceId }); //
});

router.get("/checkouts/monitor/:id", (req, res) => {
  const monitorId = req.params.id;

  res.render("checkout", { monitorId: monitorId });
});

router.get("/checkouts/keyboard/:id", (req, res) => {
  const keyboardId = req.params.id;

  res.render("checkout", { keyboardId: keyboardId });
});

router.get("/checkouts/headset/:id", (req, res) => {
  const headsetId = req.params.id;

  res.render("checkout", { headsetId: headsetId });
});

module.exports = router;
