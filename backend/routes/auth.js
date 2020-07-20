const router = require("express").Router();
const passport = require("../passport/index");

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

    // function for persistent login to return user object
    req.login(user, function (error) {
      if (error) {
        return res.status(500).json({
          message: "Something went wrong",
          error: "Error: " + error.message || "Internal server error",
        });
      }
      // adding authentication property
      user.isAuthenticated = true;
      // success logic TODO: remove user password
      return res.json(user);
    });
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

    // function for persistent login to return user object
    req.login(user, function (error) {
      if (error) {
        return res.status(500).json({
          message: "Something went wrong",
          error: "Error: " + error.message || "Internal server error",
        });
      }
      // adding authentication property
      user.isAuthenticated = true;
      // success logic TODO: remove user password
      return res.json(user);
    });
  })(req, res, next);
});

// custom call back for logging out using passport
router.get("/sign-out", (req, res) => {
  req.logOut();
  res.json("signed out");
});

module.exports = router;
