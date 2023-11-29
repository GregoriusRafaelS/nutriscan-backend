const express = require('express');
const userRouter = require('./app/user/route');
const customErrorHandler = require("./middleware/customExeption");
const notFoundHandler = require("./middleware/notFoundExeption");

const app = express();

const cors = require('cors')

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use('/users', userRouter);
app.use(customErrorHandler);
app.use(notFoundHandler);

module.exports = app;