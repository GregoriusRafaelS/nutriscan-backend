const{
  addFoodHistorySchema,
} = require("./schema");

const validateAddFoodHistorySchema = (payload) => {
  const validateResult = addFoodHistorySchema.validate(payload);
  if (validateResult.error) {
    throw new Error(validateResult.error.message);
  }
}

module.exports = {
  validateAddFoodHistorySchema,
}