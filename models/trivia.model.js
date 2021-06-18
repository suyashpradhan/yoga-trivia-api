const mongoose = require("mongoose");
const Questions = require("./questions.model");
const { Schema } = mongoose;

const TriviaSchema = new Schema(
  {
    triviaName: {
      type: String,
      required: [true, "Trivia name is Required"],
    },
    triviaImage: {
      type: String,
      required: [true, "Trivia image is required"],
    },
    triviaTotalTime: {
      type: Number,
      required: [true, "Trivia time is required"],
    },
    triviaTotalPoints: {
      type: Number,
      require: [true, "Trivia points is required"],
    },
    triviaQuestions: [Questions],
  },
  { timestamps: true }
);

const Trivia = mongoose.model("Trivia", TriviaSchema);

module.exports = Trivia;
