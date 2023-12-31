require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors')

const userRouter = require('./app/user/route');
const articleRouter = require('./app/article/route');
const foodRouter = require('./app/food/route');
const historyRouter = require('./app/history/route');
const customErrorHandler = require("./middleware/customExeption");
const notFoundHandler = require("./middleware/notFoundExeption");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/users', userRouter);
app.use('/articles', articleRouter);
app.use('/foods', foodRouter);
app.use('/history', historyRouter);

app.use(customErrorHandler);
app.use(notFoundHandler);

module.exports = app;