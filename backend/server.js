const express = require("express");
const cors = require("cors");

// requiring dotenv for env
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json);

// starting server
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
