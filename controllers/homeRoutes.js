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
  const miceId = req.params.id; // Retrieve the "mice.id" from the URL parameter


  // Fetch the images related to the "miceId" or perform any necessary operations

  // Render the "checkout" view template and pass the necessary data
  res.render("checkout", { miceId: miceId }); // You can pass more data if needed
});

router.get("/checkouts/monitor/:id", (req, res) => {
  const monitorId = req.params.id; // Retrieve the "mice.id" from the URL parameter

  // Fetch the images related to the "miceId" or perform any necessary operations

  // Render the "checkout" view template and pass the necessary data
  res.render("checkout", { miceId: miceId }); // You can pass more data if needed
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
