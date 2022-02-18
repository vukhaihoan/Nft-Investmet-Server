var express = require("express");
var router = express.Router();
const { body, query, validationResult } = require("express-validator");
const web3utils = require("web3-utils");
const { signUp, signIn, secret } = require("./controllers/auth");
const { order } = require("./controllers/order");

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
function validateTokenAddress(value) {
  if (!web3utils.isAddress(value)) {
    throw new Error("Invalid token address");
  }

  // Indicates the success of this synchronous custom validator
  return true;
}
const accountAddress = "0x8104b928A9b772F284B328256Cf659017F4a3324";
router.post(
  "/buy",
  body("tokenId").isInt(),
  body("tokenAddress").custom(validateTokenAddress),
  order
);

module.exports = router;
