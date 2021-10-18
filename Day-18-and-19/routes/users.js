var express = require("express");
var router = express.Router();
const {
  getAllUsers,
  getUserByid,
  deleteUser,
} = require("../controllers/users");

/* GET users listing. */
router.get("/", getAllUsers);

router.get("/:id", getUserByid);

router.delete("/:id", deleteUser);

module.exports = router;
