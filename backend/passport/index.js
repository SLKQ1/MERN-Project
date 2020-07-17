const passport = require("passport");

// importing strategies
const SignUpStrategy = require("./SignUpStrategy");
const SignInStrategy = require("./SignInStrategy");

// using strategies
passport.use("local-sign-up", SignUpStrategy);
passport.use("local-sign-in", SignInStrategy);

module.exports = passport;
