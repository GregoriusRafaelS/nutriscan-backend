const Joi = require("joi");

const articlePostingSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  tag: Joi.string().required(),
}).unknown();

module.exports = {
  articlePostingSchema,
};