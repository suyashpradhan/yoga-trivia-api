const express = require("express");
const db = require("./config/db");
const registerNewUser = require("./routes/signUp.route");
const loginUser = require("./routes/signIn.route");
const triviaRouter = require("./routes/trivia.route");
const userRouter = require("./routes/user.route");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//DB Connection
db();

app.get("/", (req, res) => {
  res.send("Yoga Trivia API");
});

app.use("/register", registerNewUser);
app.use("/login", loginUser);
app.use("/trivia", triviaRouter);
app.use("/user", userRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
