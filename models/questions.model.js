const mongoose = require("mongoose");
const Options = require("./options.model");
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question is required"],
  },
  correctPoints: {
    type: Number,
    required: [true, "Correct points is required"],
  },
  negativePoints: {
    type: Number,
    required: [true, "Negative points is required"],
  },
  timeInSeconds: {
    type: Number,
    required: [true, "Time is required"],
  },
  options: [Options],
});

const Questions = mongoose.mddel("Question", QuestionSchema);

module.exports = Questions;
