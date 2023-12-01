const {
  validateRegisterUserSchema,
  validateLoginUserSchema,
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
        },
      },
    });
  } catch (err) {
    next(err);
  }
}


module.exports = {
  handlerRegisterUser,
  handlerLoginUser
}