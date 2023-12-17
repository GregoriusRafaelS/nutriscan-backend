const express = require('express');
const { handlerGetDetailFoodProp, handlerGetDetailFood, handlerGetAllFood } = require("./handler");
const auth = require("../../middleware/auth");

const router = express.Router();

// API GET All food: GET foods/
router.get("/", auth, handlerGetAllFood);

// API GET food: GET foods/
router.get("/search", auth, handlerGetDetailFoodProp);

// API GET food: GET foods/
router.get("/detail", auth, handlerGetDetailFood);

module.exports = router;