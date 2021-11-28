// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// exports.signUp = signUp;
// exports.signIn = signIn;
// exports.secret = secret;

const auth = {
  signUp,
  signIn,
  secret,
};

module.exports = auth;
module.exports = {
  signUp,
  signIn,
  secret,
};
