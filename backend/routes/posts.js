const router = require("express").Router();
let Post = require("../models/post.model");

// Post Routes *********************************************************

// creating a new post
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const postedBy = req.body.postedBy;
  const imgURL = req.body.imgURL;

  const newPost = new Post({
    title,
    description,
    postedBy,
    imgURL,
  });

  newPost
    .save()
    .then((post) => res.json("Post added: " + post))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Routes *********************************************************

// getting all posts
router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

// getting all posts sorted from most to least votes
router.route("/sorted").get((req, res) => {
  Post.find()
    .sort({ voteCount: -1 })
    .exec()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

// getting a specific post
router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
});

// getting a specific post and populating its comments and votes
router.route("/populate/:id").get((req, res) => {
  Post.findById(req.params.id)
    .populate("votes")
    .populate("comments")
    .exec()
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
});

// getting all the posts from a specific user
router.route("/userPosts/:username").get((req, res) => {
  Post.find({ postedBy: req.params.username })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Put/Patch Routes *********************************************************

// updating a specific post
router.route("/update/:id").put((req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.title = req.body.title;
      post.description = req.body.description;
      post.postedBy = post.body.postedBy;
      post.imgURL = post.body.imgURL;
      post.votes = Number(post.body.votes);
      post.comments = post.body.comments;

      post
        .save()
        .then(() => res.json("Post updated: " + post))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// update a posts vote count
router.route("/vote/:id").patch((req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    { $addToSet: { votes: req.body.userID } }
  )
    .then((post) => {
      res.json(post);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// update posts comments
router.route("/comment/:id").patch((req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    { $addToSet: { comments: req.body.comment } }
  )
    .then((post) => {
      res.json(post);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete Routes *********************************************************

// deleting a specific post
router.route("/delete/:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((post) => res.json("Post deleted: " + post))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete all posts (for testing)
router.route("/deleteAll").delete((req, res) => {
  Post.deleteMany({})
    .then(() => res.json("All posts deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
