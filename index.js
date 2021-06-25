const express = require("express");
const db = require("./config/db");
const registerNewUser = require("./routes/signUp.route");
const triviaRouter = require("./routes/trivia.route");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());

//DB Connection
db();

app.get("/", (req, res) => {
  res.send("Yoga Trivia API");
});

app.use("/register", registerNewUser);
app.use("/trivia", triviaRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
