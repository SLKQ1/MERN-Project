const router = require("express").Router();
let Post = require("../models/post.model");

// getting all posts
router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

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

// getting a specific post
router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
});

// getting all the posts from a specific user
router.route("/userPosts/:username").get((req, res) => {
  console.log(req.params.username);
  Post.find({ postedBy: req.params.username })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

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
