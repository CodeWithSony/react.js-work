// import express from 'express' we will do it if we done like type module in package.json
// const express = require('express'); while using common.js from package.json

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/users.js";
import questionRouter from "./routes/Question.js";
import answerRoutes from "./routes/Answers.js"; 
// in node js we give full path as .js but in react we only give path till users not users.js

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API");
});

// "/" it's for users and callback is for Auth controller's auth...

app.use("/user", userRouter);
app.use("/answer", answerRoutes);

// The line of code app.use("/questions", questionRouter); is typically used in a Node.js application that utilizes a framework like Express.

// In this context, it means that any HTTP request made to a route starting with "/questions" will be handled by the questionRouter middleware.

// The app object represents the Express application, and use() is a method provided by Express that registers middleware functions. Middleware functions in Express are essentially functions that have access to the request (req) and response (res) objects and can perform operations on them or modify them.

// The questionRouter is another instance of an Express Router, which is a mini Express application that can be used for defining modular route handlers. It allows you to group related routes and their corresponding handlers together.

// So, when a request is made to a route starting with "/questions" (e.g., "/questions/123" or "/questions/ask"), the questionRouter will handle that request and execute the appropriate middleware or route handler defined within it.

// For example, if you have defined a route handler for "/questions/123" within questionRouter, it will be executed when a request is made to that specific route.

app.use("/questions", questionRouter);

// app.post('Auth/signup', ()=>{

// })

const CONNECTION_URL =
  "mongodb+srv://mongodbUser:mongodb2122@our-stack-overflow-clon.hztppmh.mongodb.net/?retryWrites=true&w=majority";

// What is the use of useUnifiedTopology?
// The useUnifiedTopology option removes support for several connection options that are no longer relevant with the new topology engine: autoReconnect. reconnectTries.
// How to use it
// The unified topology is available now behind the useUnifiedTopology feature flag. You can opt in to using it by passing the option to your MongoClient constructor:

// const client = MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

// What is the use of useNewUrlParser true?
// The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser. You should set useNewUrlParser: true unless that prevents you from connecting.

// Definition and Usage of .listen
// The server.listen() method creates a listener on the specified port or path.

// Syntax
// server.listen(port, hostname, backlog, callback);
// Parameter Values
// Parameter	Description
// port	Optional. Specifies the port we want to listen to
// hostname	Optional. Specifies the IP address we want to listen to
// backlog	Optional. Specifies the max length of the queue of pending connections. Default 511
// callback	Optional. Specifies a function to be executed when the listener has been added

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUniFiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));
