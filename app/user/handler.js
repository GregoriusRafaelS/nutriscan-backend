const {
  validateRegisterUserSchema,
  validateLoginUserSchema,
  validateUpdateUserSchema,
  validateUpdateProfilePictureUserSchema,
} = require("../../validator/user");

const usersServices = require("../../services/userService");

const handlerRegisterUser = async (req, res, next) => {
  try {
    const { 
      email, 
      password, 
      confirmPasword,
      username,
      fullName, 
      phoneNumber, 
      age, 
      gender 
    } = req.body;
    
    validateRegisterUserSchema({
      email, 
      password, 
      confirmPasword,
      username,
      fullName, 
      phoneNumber, 
      age, 
      gender 
    });

    await usersServices.registerUser({
      email, 
      password, 
      username,
      fullName, 
      phoneNumber, 
      age, 
      gender 
    })

    res.status(201).json({
      status: "success",
      message: "Successfully register user"
    });
  } catch (err){
    next(err)
  }
}

const handlerLoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    validateLoginUserSchema(req.body);

    const user = await usersServices.loginUser(email, password);

    res.status(200).json({
      status: "success",
      data:{
        user: {
          accessToken: user.accessToken,
          refreshToken: user.refreshToken, 
        },
      },
    });
  } catch (err) {
    next(err);
  }
}

const handlerUpdateUserProfile = async (req, res, next) => {
  try {
    const { username, fullName, phoneNumber } = req.body;
    validateUpdateUserSchema(req.body);
    if(req.file) validateUpdateProfilePictureUserSchema(req.file);
    await usersServices.updateUserProfile({
      username,
      fullName,
      phoneNumber,
      id: req.user.id,
      // profilePicture: req.file.path || null,
    });

    res.status(201).json({
      status: "success",
      message: "Successfully updated User",
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  handlerRegisterUser,
  handlerLoginUser,
  handlerUpdateUserProfile,
}