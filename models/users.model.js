const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { isStrongPassword, isEmail } = require("validator");
const { TriviasAttemptedSchema } = require("./triviasAttempted.model");
const { Schema } = mongoose;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [isEmail, "Email is invalid"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: [
      isStrongPassword,
      "Password requirements: Minimum 8 characters long, One Uppercase Character, One Lowercase Character & One Special Character",
    ],
  },
  previouslyAttemptedTrivias: [TriviasAttemptedSchema],
});

//Middleware after user is created!
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Static method for login
UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
  }
  throw Error("invalid");
};

const User = mongoose.model("Users", UserSchema);

module.exports = { User, UserSchema };
