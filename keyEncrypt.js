var CryptoJS = require("crypto-js");

// Encrypt and save into a external file
var cipherKey = CryptoJS.AES.encrypt(
  "my private key",
  "secret password"
).toString();
console.log(cipherKey);
// Decrypt in your code
var bytes = CryptoJS.AES.decrypt(cipherKey, "secret password");
var privateKey = bytes.toString(CryptoJS.enc.Utf8);

console.log(privateKey); //'mi private key'
