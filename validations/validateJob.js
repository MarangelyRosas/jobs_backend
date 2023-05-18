const Joi = require("joi");
const createValidator = require("./createValidator");

const jobSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  company: Joi.string(),
  location: Joi.string().required(),
  salary: Joi.string(),
  url: Joi.string(),
  is_favorite: Joi.boolean(),
});

module.exports = createValidator(jobSchema);