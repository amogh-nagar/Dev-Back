var express = require("express");
var router = express.Router();
const path = require("path");
router.get("/:file", function (req, res, next) {
  //   console.log(req.params);
  let name = req.params.file + ".jpg";
  res.sendFile(path.join(__dirname, "..", "public", "images", name));
});

module.exports = router;
