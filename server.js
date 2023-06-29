// const stripe = require("stripe")(
//   "sk_test_51NOA4SDltZuFbXatKHv7ROPwdUQ13yVe8fsPhwFwjWsgWU1ElqQMIoLQMrG1tQm3ZDB9306j1BZbltPjKVTsfw7s006eHCJwKs"
// );
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "idk",
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(routes);

// app.post("/checkout", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     mode: "payment",
//     success_url: `${process.env.SERVER_URL}/success.html`,
//     cancel_url: `${process.env.SERVER_URL}/error.html`,
//     })
//     res.json({ url: session.url })
//   } catch (e) {
//     res.status(500).json({ error: e.message })
//   }

//   // res.redirect(303, session.url);
// });


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
