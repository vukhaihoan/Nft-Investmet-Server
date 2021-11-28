var express = require("express");
var router = express.Router();
const { body, query, validationResult } = require("express-validator");

const { signUp, signIn, secret } = require("./controllers/auth");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", function (req, res) {
  res.send("oke");
});
router.post("/signup", signUp, function (req, res) {
  res.send("sign up oke");
});
router.post("/signin", signIn, function (req, res) {
  res.send("sign in oke");
});
router.get("/secret", secret, function (req, res) {
  res.send("you are in secret page");
});

module.exports = router;
