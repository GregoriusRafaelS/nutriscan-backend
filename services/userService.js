const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const generateToken = require("../utils/generateToken");

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
  
  const usernameExist = await User.findOne({
    where:{
      username: user.username
    }
  });
  
  if(usernameExist){
    throw new Error("Full Name Already exists");
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  await User.create({
    email: user.email,
    password: hashedPassword,
    username: user.username,
    fullName: user.fullName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    age: user.age,
    gender: user.gender,
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

module.exports = {
  registerUser,
  loginUser,
}