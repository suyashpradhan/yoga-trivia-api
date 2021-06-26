const mongoose = require("mongoose");
const { Schema } = mongoose;

const TriviaAnswers = new Schema({
  questionId: {
    type: mongoose.Types.ObjectId,
  },
  selectedOptionId: {
    type: mongoose.Types.ObjectId,
  },
  correctOption: {
    type: Boolean,
  },
});

exports.TriviaAnswers = TriviaAnswers;
