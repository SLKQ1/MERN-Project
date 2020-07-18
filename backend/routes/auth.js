const passport = require("../passport/index");
const router = require("./posts");

// custom passport callback for sign up
router.post("/sign-up", (req, res, next) => {
  passport.authenticate("local-sign-up", (error, user, info) => {
    // error logic
    if (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: "Error: " + error.message || "Internal server error",
      });
    }
    // // logic for if user already exists
    // if (user === false) {
    //   return res.json(info.message);
    // }
    // success logic
    return res.json(user);
  })(req, res, next);
});

// custom callback for sign in using passport
router.post("/sign-in", (req, res, next) => {
  passport.authenticate("local-sign-in", (error, user, info) => {
    // error logic
    if (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: "Error: " + error.message || "Internal server error",
      });
    }
    // // logic for if user already exists
    // if (user === false) {
    //   return res.json(user);
    // }
    // success logic
    return res.json(user);
  })(req, res, next);
});

module.exports = router;
