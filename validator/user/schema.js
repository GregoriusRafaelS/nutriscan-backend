const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

const userRegisterSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
  confirmedPassword: Joi.ref("password"),
  username: Joi.string().alphanum().min(4).max(12),
  // password: passwordComplexity().validate(password),
  fullName: Joi.string().min(6).max(32).required(),
  age: Joi.number().integer().min(1).max(90).required(),
  phoneNumber: Joi.number().min(10).required(),
  gender: Joi.string().valid("male", "female").required()
}).unknown();

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).unknown();

const userUpdateSchema = Joi.object({
  username: Joi.string().alphanum().min(4).max(12),
  fullName: Joi.string().min(6),
  phoneNumber: Joi.string().min(10),
}).unknown();

const userUpdateProfilePictureSchema = Joi.object({
  fieldname: Joi.string().required(),
  mimetype: Joi.string().valid("image/jpeg", "image/png", "image/jpg"),
  filename: Joi.string().required(),
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  userUpdateSchema,
  userUpdateProfilePictureSchema,
};
