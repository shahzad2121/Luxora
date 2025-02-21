const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
