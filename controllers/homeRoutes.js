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

router.get("/checkouts/mice/:id", async (req, res) => {
  const miceId = req.params.id;
  // same thing
  const miceInfo =  await Product.findByPk(req.params.id)
  const info = miceInfo.get({ plain: true })

  res.render("checkout", { miceId: miceId, info });
});

router.get("/checkouts/monitor/:id", async (req, res) => {
  const monitorId = req.params.id;
  const monitorInfo =  await Product.findByPk(req.params.id)
  const info = monitorInfo.get({ plain: true })
  console.log(info)
  res.render("checkout", { monitorId: monitorId, info });
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

// click shop now and push into localstorage then take me into checkout page 