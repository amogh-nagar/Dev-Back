var express = require("express");
var router = express.Router();
const { body } = require("express-validator");
const { register } = require("../controllers/register");

/* GET home page. */

router.get("/", (req, res, next) => {
  res.send("Home");
});

router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 3 }),
    body("confirmpassword").custom((value,{req}) => {
      if (value !== req.body.password) {
        throw new Error("Password should match");
      }
      return true;
    }),
  ],
  register
);

module.exports = router;
