const {
  userRegisterSchema,
  userLoginSchema
} = require("./schema");

const validateRegisterUserSchema = (payload) => {
  const validateResult = userRegisterSchema.validate(payload);
  if (validateResult.error) {
    throw new Error(validateResult.error.message);
  }
}

const validateLoginUserSchema = (payload) => {
  const validateResult = userLoginSchema.validate(payload);
  if(validateResult.error){
    throw new Error(validateResult.error.message);
  }
}

module.exports = {
  validateRegisterUserSchema,
  validateLoginUserSchema,
};
