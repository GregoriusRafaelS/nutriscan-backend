const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const generateToken = require("../utils/generateToken");

const { User } = require("../models");

const registerUser = async (user) => {
  const emailExist = await User.findOne({
    where:{
      email: user.email
    }
  });
 
  if(emailExist){
    throw new Error("Email Already exists");
  }
  
  const usernameExist = await User.findOne({
    where:{
      username: user.username
    }
  });
  
  if(usernameExist){
    throw new Error("Full Name Already exists");
  }
  const hashedPassword = await bcrypt.hash(user.password, 10);
  console.log(user.role)
  await User.create({
    email: user.email,
    password: hashedPassword,
    username: user.username,
    fullName: user.fullName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    age: user.age,
    gender: user.gender,
    role: user.role
  });
}

const loginUser = async (email, password) => {
  const currentUser = await User.findOne({
    where: {
      email
    },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });

  if (!currentUser) {
    const error = new Error("Wrong Email or Password");
    error.statusCode = 401;
    throw error;
  }

  const checkPassword = bcrypt.compareSync(password, currentUser.password);

  if (!checkPassword){
    const error = new Error("Wrong Email or Password");
    error.statusCode = 401;
    throw error;
  }

  const accessToken = generateToken({
    id: currentUser.id,
    email: currentUser.email,
  });

  return {accessToken};
}

const updateUserProfile = async (data) => {
  // image upload && update ke storage bucket, blm dikasih multer juga 

  const currentUser = await User.findByPk(data.id);
  
  if (!currentUser) {
    const error = new Error("User Not Found");
    error.statusCode = 401;
    throw error;
  }
  await currentUser.update({
    username: data.username || currentUser.username,
    fullName: data.fullName || currentUser.phoneNumber,
    phoneNumber: data.phoneNumber || currentUser.phoneNumber
  });
}

module.exports = {
  registerUser,
  loginUser,
  updateUserProfile,
}