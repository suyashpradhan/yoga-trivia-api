const mongoose = require("mongoose");
const { QuestionSchema } = require("./questions.model");
const { Schema } = mongoose;

const TriviaSchema = new Schema(
  {
    triviaName: {
      type: String,
      required: [true, "Trivia name is Required"],
    },
    triviaTotalQuestions: {
      type: Number,
      required: [true, "Total Questions are Required"],
    },
    triviaTotalTime: {
      type: Number,
      required: [true, "Trivia time is required"],
    },
    triviaTotalPoints: {
      type: Number,
      require: [true, "Trivia points is required"],
    },
    triviaQuestions: [QuestionSchema],
  },
  { timestamps: true }
);

const Trivia = mongoose.model("Trivia", TriviaSchema);

module.exports = { Trivia };
