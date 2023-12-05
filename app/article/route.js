const express = require('express');
const { handlerPostArticle, handlerGetAllArticlePreview, handlerGetArticleContent } = require("./handler");
const auth = require("../../middleware/auth");
const checkAdminRole = require("../../middleware/checkAdminRole");

const router = express.Router();

// API POST Article: POST articles/
router.post("/", auth, checkAdminRole, handlerPostArticle);

// API GET All Article: GET articles/
router.get("/", auth, handlerGetAllArticlePreview);

// API GET Article: GET articles/:id
router.get("/:id_article", auth, handlerGetArticleContent);

module.exports = router;