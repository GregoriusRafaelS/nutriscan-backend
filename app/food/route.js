const express = require('express');
const { handlerGetFood, } = require("./handler");
const auth = require("../../middleware/auth");

const router = express.Router();

// API GET food: GET foods/
router.get("/", auth, handlerGetFood);

module.exports = router;