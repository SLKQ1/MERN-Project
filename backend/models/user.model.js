const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = require("../models/post.model");
const { timeStamp } = require("console");

const userSchema = new Schema(
  {
    username: {
      String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 10,
    },
    email: { String, required: true, unique: true, trim: true },
    password: { String, required: true },
    post: [{ post }],
  },
  { timestaps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
