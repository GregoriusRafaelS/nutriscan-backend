const express = require('express');
const { handlerRegisterUser, handlerLoginUser, handlerUpdateUserProfile } = require("./handler");
const auth = require("../../middleware/auth");
const multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');

const router = express.Router();

// API Register user: POST users/register
router.post("/register", handlerRegisterUser);

// API Login user: GET users/login
router.get("/login", handlerLoginUser);

// API UPDATE user: PUT users/update/:id
const uploadHanlder = multer({
    storage: multerGoogleStorage.storageEngine({
        bucket: process.env.GCS_BUCKET_NAME, 
        keyFilename: process.env.GCS_KEYFILE,
        projectId: process.env.GCS_PROJECT,  
    }),

    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        cb(null, `${req.user.id}-avatar.${ext}`);
    }
})

router.put("/update", auth, handlerUpdateUserProfile, uploadHanlder);

module.exports = router;