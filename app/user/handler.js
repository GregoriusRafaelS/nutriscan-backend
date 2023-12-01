const {
  validateRegisterUserSchema,
  // validateLoginUserSchema,
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

const handlerLoginUser = async () => {

}


module.exports = {
  handlerRegisterUser,
  handlerLoginUser
}