const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../utils/generateToken");

const { User, Authentications } = require("../models");

const registerUser = async (user) => {
  const emailExist = await User.findOne({
    where:{
      email: user.email
    }
  });
 
  if(emailExist){
    const error = new Error("Email Already exists");
    error.statusCode = 401;
    throw error;
  }
  
  const usernameExist = await User.findOne({
    where:{
      username: user.username
    }
  });
  
  if(usernameExist){
    const error = new Error("Username Already exists");
    error.statusCode = 401;
    throw error;
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

  const accessToken = generateAccessToken({
    id: currentUser.id,
    email: currentUser.email,
  });

  const refreshToken = generateRefreshToken({
    id: currentUser.id,
    email: currentUser.email,
  });

  await Authentications.create({
    refreshToken: refreshToken,
    id_user: currentUser.id,
  });

  return {accessToken, refreshToken};
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

const refreshToken = async (refreshToken) => {
  const currentUser = await Authentications.findOne({
    where: {
      refreshToken: refreshToken
    },
  });

  if(!currentUser){
    const error = new Error("Refresh Token Does not Match");
    error.statusCode = 401;
    throw error;
  }

  const accessToken = generateAccessToken({
    id: currentUser.id_user,
  });

  return accessToken;
}

module.exports = {
  registerUser,
  loginUser,
  updateUserProfile,
  refreshToken,
}