const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const SignUpStrategy = new LocalStrategy({ passReqToCallback: true }, function (
  req,
  username,
  password,
  done
) {
  const email = req.body.email;
  // finding user in db if exists
  User.findOne({ email })
    .lean()
    .exec((err, user) => {
      // error logic
      if (err) {
        return done(err, null);
      }
      // if user already exists
      if (user) {
        return done(null, false, {
          message: "Sorry, this user already exists.",
        });
      }
      // encrypting password and creating new user
      const encryptedPassword = bcrypt.hashSync(password, salt);
      const newUser = new User({
        username,
        email,
        password: encryptedPassword,
        posts: [],
      });
      newUser
        .save()
        .then(() => {
          return done(null, newUser, { message: "New user created!" });
        })
        .catch((err) => done(err, null));
    });
});

module.exports = SignUpStrategy;
