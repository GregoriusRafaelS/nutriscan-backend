const express = require('express');
const { handlerRegisterUser, handlerLoginUser, handlerUpdateUserProfile } = require("./handler");
const auth = require("../../middleware/auth");

const router = express.Router();

// API Register user: POST users/register
router.post("/register", handlerRegisterUser);

// API Login user: GET users/login
router.get("/login", handlerLoginUser);

// API UPDATE user: PUUT users/update/:id
router.put("/update", auth ,handlerUpdateUserProfile);


module.exports = router;