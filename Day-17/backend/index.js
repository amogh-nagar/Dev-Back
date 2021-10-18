const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const stripe = require("stripe")(
  `YOUR_API_KEY`
);


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.post("/payment", async (req, res) => {
  console.log(req.body);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: req.body.price * 100,
          name: "Shopping",
          currency: "usd",
          quantity: 2,
        },
      ],
      payment_method_types: ["card"],
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}?canceled=true`,
    });
    // console.log(session);
    res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

app.listen(8080, () => {
  console.log("Connected");
});
