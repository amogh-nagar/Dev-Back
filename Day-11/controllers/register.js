const { validationResult } = require("express-validator");

const register = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (errors.length > 0) {
    res.status(401).jaon({ errors: errors });
    return;
  }
  
};

module.exports = {
  register,
};
