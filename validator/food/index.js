const {
  foodFindSchema,
} = require("./schema");

const validateGetFoodSchema = (payload) => {
  const validateResult = foodFindSchema.validate(payload);
  if (validateResult.error) {
    throw new Error(validateResult.error.message);
  }
}

module.exports = {
  validateGetFoodSchema
}