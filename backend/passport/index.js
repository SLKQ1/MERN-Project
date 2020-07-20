const passport = require("passport");
const User = require("../models/user.model");

// passport serializing user
passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (email, done) {
  User.findOne({ email })
    .lean()
    .exec((err, user) => {
      done(err, user);
    });
});

// importing strategies
const SignUpStrategy = require("./SignUpStrategy");
const SignInStrategy = require("./SignInStrategy");

// using strategies
passport.use("local-sign-up", SignUpStrategy);
passport.use("local-sign-in", SignInStrategy);

module.exports = passport;
