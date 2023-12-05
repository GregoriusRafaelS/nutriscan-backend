const Joi = require("joi");

const addFoodHistorySchema = Joi.object({
  comments: Joi.string().min(8).max(255).required(),
}).unknown();


module.exports = {
  addFoodHistorySchema,
}