const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const SignInStrategy = new LocalStrategy({ usernameField: "email" }, function (
  email,
  password,
  done
) {
  // finding user in db if exists
  User.findOne({ email })
    .lean()
    .exec((err, user) => {
      // error logic
      if (err) {
        console.log("there was an error");
        return done(err, null);
      }
      // if user is not found
      if (!user) {
        done(null, false, { message: "Sorry, this user does not exist." });
      }
      // making sure user password is valid
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        done(null, false, {
          message: "Sorry, your email or password was incorrect.",
        });
      }
      // incorrect password case
      else {
        done(null, user);
      }
    });
});

module.exports = SignInStrategy;
