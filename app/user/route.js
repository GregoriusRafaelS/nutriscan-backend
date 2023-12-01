const express = require('express');
const { handlerRegisterUser, handlerLoginUser } = require("./handler");

const router = express.Router();

// API Register user: POST users/register
router.post("/register", handlerRegisterUser);

// API Login user: POST users/login
router.get("/login", handlerLoginUser);

module.exports = router;