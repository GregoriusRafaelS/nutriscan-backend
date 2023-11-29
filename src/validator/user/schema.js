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
  gender: Joi.string().valid("Laki - Laki", "Perempuan").required()
}).unknown();


module.exports = {
  userRegisterSchema,
};
