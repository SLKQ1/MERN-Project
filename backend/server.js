const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// requiring passport
const passport = require("./passport/index");
// const bodyParser = require()
// requiring dotenv for env
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

// connecting to mongoDB
const URI = process.env.ATLAS_URI;
mongoose.connect(
  "mongodb+srv://Faiz:Faiz@wristshot-tv0qm.mongodb.net/WristShot?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
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

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/auth", authRouter);
// using passport
app.use(passport.initialize());
// app.use(passport.session());

// starting server
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
