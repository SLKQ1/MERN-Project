const router = require("express").Router();
let Comment = require("../models/comment.model");
const { route } = require("./users");
const { json } = require("express");

// Get routes **********************************
// getting all comments
router.route("/").get((req, res) => {
  Comment.find()
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// getting a specific comment
router.route("/:id").get((req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// getting all comments from a specific user
router.route("/userComments/:username").get((req, res) => {
  Comment.find({ postedBy: req.params.username })
    .then((userComments) => res.json(userComments))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Post routes **********************************
// creating a new comment
router.route("/add").post((req, res) => {
  const postedBy = req.body.postedBy;
  const content = req.body.content;

  const newComment = new Comment({
    postedBy,
    content,
  });

  newComment
    .save()
    .then((comment) => res.json("Comment added: " + comment))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Put/Patch Routes *********************************************************
// updating a specific comment
router.route("/update/:id").put((req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => {
      (comment.postedBy = req.body.postedBy),
        (comment.content = req.body.content),
        comment
          .save()
          .then(() => res.json("Comment updated: " + comment))
          .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete Routes *********************************************************
// deleting a specific comments
router.route("/delete/:id").delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((comment) => res.json("Comment deleted: " + comment))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete all comments (for testing)
router.route("/deleteAll").delete((req, res) => {
  Comment.deleteMany({})
    .then(() => res.json("All comments deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
