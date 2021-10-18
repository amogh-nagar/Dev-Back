const { emailValidate, passwordValidate } = require("../utils/validation");

/**
 * @param {*} req
 * @description
 * email validation
 * password validation
 */

const registerInitialChecks = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else res.status(401).send("Initial checks failed");
};

module.exports = registerInitialChecks;
