const express = require('express');
const { handlerRegisterUser, handlerLoginUser, handlerUpdateUserProfile, handlerTokenRefresh, h, handleUploadAvatar } = require("./handler");
const auth = require("../../middleware/auth");
const multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');
const { validateUpdateProfilePictureUserSchema } = require('../../validator/user');

const router = express.Router();

// API Register user: POST users/register
router.post("/register", handlerRegisterUser);

// API Login user: GET users/login
router.get("/login", handlerLoginUser);

const uploadHanlder = multer({
    storage: multerGoogleStorage.storageEngine({
        bucket: process.env.GCS_BUCKET_NAME, 
        keyFilename: process.env.GCS_KEYFILE,
        projectId: process.env.GCS_PROJECT, 
        filename: (req, file, cb) => {
            const ext = file.originalname.split('.').pop();
            cb(null, `${req.body.username}-avatar.${ext}`);
        },
    }),
    
    fileFilter: (req, file, cb) => {
        try {
            validateUpdateProfilePictureUserSchema({
                fieldname: file.fieldname,
                mimetype: file.mimetype,
                filename:file.originalname
            })
        } catch (err) {
            req.fileValidationError = err.message
            return cb(null, false, new Error(err.message))
        }

        if (req.body.username === undefined |! req.body.username === null) {
            req.fileValidationError = "Username field is empty"
            return cb(null, false, new Error("Username filed is empty"))
        }
        
        cb(null, true)
    }
})

// API UPDATE user: PUT users/update/:id
router.put("/update", auth, handlerUpdateUserProfile);

router.post('/avatar/upload', auth, uploadHanlder.single('avatar'), handleUploadAvatar)

// API REFRESH TOKEN: POST users/refreshToken
router.post("/refreshToken", handlerTokenRefresh);

module.exports = router;