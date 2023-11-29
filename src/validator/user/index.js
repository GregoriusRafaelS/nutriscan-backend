const {
  userRegisterSchema,
} = require("./schema");

const validateRegisterUserSchema = (payload) => {
  const validateResult = userRegisterSchema.validate(payload);
  if (validateResult.error) {
    throw new Error(validateResult.error.message);
  }
}

module.exports = {
  validateRegisterUserSchema,
};
