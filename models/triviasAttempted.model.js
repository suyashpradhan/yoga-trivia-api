const mongoose = require("mongoose");
const { TriviaAnswers } = require("./triviaAnswers.model");
const { Schema } = mongoose;

const TriviasAttemptedSchema = new Schema({
  triviaId: {
    type: mongoose.Types.ObjectId,
    ref: "Trivia",
  },
  triviaScore: {
    type: Number,
  },
  trivias: [TriviaAnswers],
});
exports.TriviasAttemptedSchema = TriviasAttemptedSchema;
