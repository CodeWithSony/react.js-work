// import React from 'react'
import * as api from "../api";

// we have imported it inside pages askQuestion.jsx

// we will use the askQuestion data
export const askQuestion = (questionData, navigate) => async (dispatch) => {
  // because we are using thunk we have to use dispatch aslo

  try {
    // and willl send to the backend and retrieve it as response and push it to the redux
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    // after dispatching a question means after posting a question we are calling fetch all the question function which will show all the fetchedquestion after clicking on the that askquestion button and after givng title, body and tags.
    dispatch(fetchAllQuestions());
    // so it will be called again.
    // here pushing
    // here is the data which we are passing to the backend
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

// export default askQuestion

// we are sending this action to the reducer in question.js as their cases matches

export const fetchAllQuestions = () => async (dispatch) => {
  // here we are writing fetchAllquestion to get data from the database by using axios
  // action will come inside diapath(data)
  try {
    const { data } = await api.getAllQuestions();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
    // dispatching data to the store...
  } catch (error) {
    console.log(error);
  }
};
// for fetching all the question we need to show question each and every time so we gonna use useEffect
