const express = require('express');
const { handlerPostArticle } = require("./handler");
const auth = require("../../middleware/auth");

const router = express.Router();

// API POST article: POST articles/
router.post("/", auth, handlerPostArticle);

module.exports = router;