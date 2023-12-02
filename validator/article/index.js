const {
  articlePostingSchema,
} = require("./schema");

const validateArticleSchema = (payload) => {
  const validateResult = articlePostingSchema.validate(payload);
  if (validateResult.error) {
    throw new Error(validateResult.error.message);
  }
}

module.exports = {
  validateArticleSchema,
}