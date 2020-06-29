const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// requiring dotenv for env
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// connecting to mongoDB
const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// using routes
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// starting server
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});