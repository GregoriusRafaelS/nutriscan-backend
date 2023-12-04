const express = require('express');

const { handlerAddFoodHistory } = require("./handler");
const auth = require("../../middleware/auth");

const router = express.Router();

// API ADD History: POST history/
router.post("/", auth, handlerAddFoodHistory);

module.exports = router;