const express = require("express");
const db = require("./config/db");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

db();

app.get("/", (req, res) => {
  res.send("Yoga Trivia API");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
