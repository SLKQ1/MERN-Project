const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const UserModel = require("./user.model");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    postedBy: { type: String },
    votes: { type: Number },
    comments: { type: [String] },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
