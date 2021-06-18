const mongoose = require("mongoose");
const { Schema } = mongoose;

const OptionsSchema = new Schema({
  option: {
    type: String,
    required: [true, "Option name is Required"],
  },
  isCorrect: {
    type: Boolean,
    required: [true, "Correct option is Required"],
  },
});

const Options = mongoose.model("Options", OptionsSchema);

module.exports = Options;
