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

router.get("/checkouts/:id", async (req, res) => {
  try {
    res.render("checkout");
  } catch (err) {
    console.log(err);
  }
});

// router.get("/checkouts/", async (req, res) => {
//   try {
//     const productData = await Product.findByPk(req.params.id, {
//       include: [
//         {
//           model: Product
//         },
//       ],
//     });

//     const product = productData.get({ plain: true });

//     res.render("checkout");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
