const Joi = require("joi");
const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;
const registrationSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string(),
});

module.exports = registrationSchema;
