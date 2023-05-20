import Question from "../models/Question.js";
// above imported Question is question schema

import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const postQuestion = new Question({
    ...postQuestionData,
    userId: req.userId,
  });
  //   userId: the id of the particular user who has posted this question. and this is coming from the mongodb

  try {
    await postQuestion.save();
    res.status(200).json("Posted a question successfully...");
  } catch (error) {
    console.log(error);
    res.status(404).json("Couldn't post a new question...");
  }
};

export const getAllQuestions = async (req, res) => {
  console.log(req, "it's get all data's request....");
  
  try {
    const questionList = await Question.find().sort({ askedOn: -1 });
    // we are putting all data from the question schema to the questionlist.
    res.status(200).json(questionList);
    // we will send this data to the client
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// we are gonna retrive data from the database which is questionDetails object so we are making async function here

// export getAllQuestions;
