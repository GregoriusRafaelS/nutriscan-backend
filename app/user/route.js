const express = require('express');
const { handlerRegisterUser, handlerLoginUser, handlerUpdateUserProfile, handlerTokenRefresh, h, handleUploadAvatar } = require("./handler");
const auth = require("../../middleware/auth");
const uploadImage = require("../../middleware/uploadImage");

const router = express.Router();

// API Register user: POST users/register
router.post("/register", handlerRegisterUser);

// API Login user: GET users/login
router.get("/login", handlerLoginUser);

// API UPDATE user: PUT users/update/:id
router.put("/update", auth, handlerUpdateUserProfile);

// API UPDATE user avatar: PUT users/avatar/upload
router.post('/avatar/upload', auth, uploadImage.single('avatar'), handleUploadAvatar);

// API REFRESH TOKEN: POST users/refreshToken
router.post("/refreshToken", handlerTokenRefresh);

module.exports = router;