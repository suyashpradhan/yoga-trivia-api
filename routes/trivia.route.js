const express = require("express");
const {
  getTriviaList,
  addNewTrivia,
  getTriviaById,
} = require("../controllers/trivia.controller");

const router = express.Router();

router.route("/").get(getTriviaList).post(addNewTrivia);
router.route("/:_id").get(getTriviaById);

module.exports = router;
