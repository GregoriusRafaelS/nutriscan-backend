const { validateUpdateProfilePictureUserSchema } = require('../validator/user');
const multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');

const uploadImage = multer({
  storage: multerGoogleStorage.storageEngine({
      bucket: process.env.GCS_BUCKET_NAME, 
      keyFilename: process.env.GCS_KEYFILE,
      projectId: process.env.GCS_PROJECT, 
      filename: (req, file, cb) => {
          const ext = file.originalname.split('.').pop();
          cb(null, `${req.user.id}-avatar.${ext}`);
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

      if (req.user.id === undefined |! req.user.id === null) {
          req.fileValidationError = "Username field is empty"
          return cb(null, false, new Error("Username filed is empty"))
      }
      
      cb(null, true)
  }
})

module.exports = uploadImage;