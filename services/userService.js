const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");

const { User } = require("../models");
// const generateAccessToken = require("../../utils/tokenManager");

const registerUser = async (user) => {
  const emailExist = await User.findOne({
    where:{
      email: user.email
    }
  });
 
  if(emailExist){
    throw new Error("Email Already exists");
  }
  
  const fullNameExist = await User.findOne({
    where:{
      fullName: user.fullName
    }
  });
  
  if(fullNameExist){
    throw new Error("Full Name Already exists");
  }

  const hashPassword = await bcrypt.hash(user.password, 10);
  await User.create({
    email: user.email,
    password: hashPassword,
    username: user.username,
    fullName: user.fullName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    age: user.age,
    gender: user.gender,
  });
}

module.exports = {
  registerUser
}