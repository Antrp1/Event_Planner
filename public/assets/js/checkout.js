// const router = require("express").Router();
// const express = require("express");

// document.getElementById("checkout").addEventListener("click", () => {
//   const storeItems = new Map([
//     [1, { priceInCents: 10000, name: "Keyboard" }],
//     [2, { priceInCents: 20000, name: "Monitor" }],
//   ]);
//   console.log("ok");
//   fetch("/checkout", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: [
//         { id: 1, quantity: 3 },
//         { id: 2, quantity: 1 },
//       ],
//     }),
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json(); // Call res.json() to parse the response as JSON
//       } else {
//         throw new Error("Error: " + res.status); // Handle non-OK response
//       }
//     })
//     .then((data) => {
//       // Handle the parsed JSON data here
//       console.log(data);
//     })
//     .catch((error) => {
//       // Handle any errors that occurred during the fetch request
//       console.error(error);
//     });
// });

// router.post("/checkout", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: req.body.items.map((item) => {
//         const storeItem = storeItem.get(item.id);
//         return {
//           price_data: {
//             currency: `usd`,
//             product_data: {
//               name: storeItem.name,
//             },
//             unit_amount: storeItem.priceInCents,
//           },
//           quantity: item.quantity,
//         };
//       }),
//       success_url: `${process.env.SERVER_URL}/success.html`,
//       cancel_url: `${process.env.SERVER_URL}/error.html`,
//     });
//     res.json({ url: session.url });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }

//   // res.redirect(303, session.url);
// });

// module.exports = { items };
