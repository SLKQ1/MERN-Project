const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// requiring passport
const passport = require("./passport/index");
// requiring dotenv for env
const dotenv = require("dotenv");
dotenv.config();
// requiring cookie session
var cookieSession = require("cookie-session");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 30 * 60 * 60 * 1000,
    keys: ["key1", "key2"],
  })
);
// using passport
app.use(passport.initialize());
app.use(passport.session());

// connecting to mongoDB
const URI = process.env.ATLAS_URI;
mongoose.connect(
  "mongodb+srv://Faiz:Faiz@wristshot-tv0qm.mongodb.net/WristShot?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// using routes
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");
const commentsRouter = require("./routes/comments");

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

// starting server
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
