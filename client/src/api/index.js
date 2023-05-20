//inside api we have request.

import axios from "axios";
//  Axios is used to communicate with the backend and it also supports the Promise API that is native to JS ES6. It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application.
const API = axios.create({ baseURL: "http://localhost:5000" });

export const logIn = (authData) => API.post("user/logIn", authData);
export const signUp = (authData) => API.post("user/signUp", authData);

export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);
  // that questions is question schema

export const getAllQuestions = () => API.get("/questions/get");
// this single url will retrieve all the data from the database
// 6:33 completed
