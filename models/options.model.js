const mongoose = require("mongoose");
const { Schema } = mongoose;

const OptionSchema = new Schema({
  option: {
    type: String,
    required: [true, "Option name is Required"],
  },
  isCorrect: {
    type: Boolean,
    required: [true, "Correct option is Required"],
  },
});

const Option = mongoose.model("Option", OptionSchema);

module.exports = { OptionSchema, Option };
