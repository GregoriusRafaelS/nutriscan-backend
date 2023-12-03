const express = require('express');
const { handlerPostArticle } = require("./handler");
const auth = require("../../middleware/auth");
const checkAdminRole = require("../../middleware/checkAdminRole");

const router = express.Router();

// API POST article: POST articles/
router.post("/", auth, checkAdminRole, handlerPostArticle);

module.exports = router;