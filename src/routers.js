var express = require("express");
var router = express.Router();
const { body, query, validationResult } = require("express-validator");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", function (req, res) {
  res.send("oke");
});

module.exports = router;
