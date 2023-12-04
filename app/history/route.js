const express = require('express');

const { handlerAddFoodHistory, handlerGetAllFoodHistory } = require("./handler");
const auth = require("../../middleware/auth");

const router = express.Router();

// API ADD History: POST history/
router.post("/", auth, handlerAddFoodHistory);

// API GET All History: GET history/
router.get("/", auth, handlerGetAllFoodHistory);

module.exports = router;