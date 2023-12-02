const express = require('express');
const { handlerRegisterUser, handlerLoginUser, handlerUpdateUserProfile, handlerTokenRefresh } = require("./handler");
const auth = require("../../middleware/auth");

const router = express.Router();

// API Register user: POST users/register
router.post("/register", handlerRegisterUser);

// API Login user: GET users/login
router.get("/login", handlerLoginUser);

// API UPDATE user: PUT users/update/:id
router.put("/update", auth ,handlerUpdateUserProfile);

// API REFRESH TOKEN: POST users/refreshToken
router.post("/refreshToken", handlerTokenRefresh);

module.exports = router;