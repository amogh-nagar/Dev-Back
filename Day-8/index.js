const express = require("express");
const app = express();
app.get(
  "/",
  (req, res, next) => {
    console.log("1st middleware");
    if (req.query.role !== "admin") {
      res.status(401).send("Not autorized");
    }

    next();
  },
  (req, res, next) => {
    console.log("2nd middleware");
    res.send("2 middlwares");
  }
);

app.post("/product", (req, res) => {
  console.log(req.query);
  res.send("Post request accepted");
});

app.listen(3000);
