const express = require("express");
const errorHandler = require("../utils/errorHandling.js");
const createToken = require("../utils/createToken.js");
const { User } = require("../models/users.model");

const registerNewUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const user = await User.create({
      fullName,
      email,
      password,
    });
    const token = createToken(user._id);
    res.status(200).json({
      success: true,
      message: "Succesfully signed up.",
      _id: user._id,
      token,
      previouslyAttemptedTrivias: [],
    });
  } catch (error) {
    const errors = errorHandler(error);
    res.status(401).json({ errors });
  }
};

module.exports = registerNewUser;
