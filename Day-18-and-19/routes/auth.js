var express = require("express");
var router = express.Router();

const registerInitialChecks = require("../middlewares/registerChecks");
const register = require("../controllers/register");
/**
 * @requires {email,name,password,confirm} - req.body
 * Security,performance ans edge cases
 * level 2
 * JS/SQL injection
 */

router.post("/register", registerInitialChecks, register);

module.exports = router;
