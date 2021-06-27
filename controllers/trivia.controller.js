const express = require("express");
const { Trivia } = require("../models/trivia.model");

const getTriviaList = async (req, res) => {
  try {
    const trivia = await Trivia.find()
      .select(
        "_id, triviaName triviaTotalQuestions triviaTotalTime triviaTotalPoints triviaImage"
      )
      .exec();
    res
      .status(200)
      .json({ success: true, message: "Yoga Trivia API Data", trivia: trivia });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: e.message,
    });
  }
};

const addNewTrivia = async (req, res) => {
  const { trivia } = req.body;
  try {
    console.log("Inside try");
    let newTrivia = new Trivia(trivia);
    newTrivia = await newTrivia.save();

    res
      .status(200)
      .json({ success: true, message: "#1 Quiz Data", trivia: newTrivia });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: e.message,
    });
  }
};

const getTriviaById = async (req, res) => {
  const { _id } = req.params;

  try {
    let triviaById = await Trivia.findById(_id);
    res
      .status(200)
      .json({ success: true, message: "#1 Quiz Data", trivia: triviaById });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: e.message,
    });
  }
};

module.exports = { getTriviaList, addNewTrivia, getTriviaById };
