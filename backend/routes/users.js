const router = require("express").Router();
let User = require("../models/user.model");

// getting all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// creating a new user
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const posts = [];
  const newUser = new User({ username, email, password, posts });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// getting a specific user
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// updating a specific user
router.route("/update/:id").put((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      (user.username = req.body.username),
        (user.email = req.body.email),
        (user.password = req.body.password),
        (user.posts = user.body.posts);

      user
        .save()
        .then((user) => res.json("User updated: " + user))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// deleting a specific user
router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.json("User deleted: " + user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete all users (for testing)
router.route("/deleteAll").delete((req, res) => {
  User.deleteMany({})
    .then(() => res.json("All users deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
