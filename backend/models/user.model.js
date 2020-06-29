const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = require("../models/post.model");
const { timeStamp } = require("console");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 10,
    },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    post: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;