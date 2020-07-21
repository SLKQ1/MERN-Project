const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String },
    imgURL: { type: String, required: true },
    postedBy: { type: String, required: true },
    votes: { type: Number },
    comments: { type: [String] },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
