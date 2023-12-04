const Joi = require("joi");

const foodFindSchema = Joi.object({
  probability: Joi.number().min(0.5).max(1).required(),
}).unknown();

module.exports = {
  foodFindSchema,
}