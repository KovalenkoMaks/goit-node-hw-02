const Joi = require("joi");
const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;
const registrationSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"Name" is a required field`,
    "string.empty": `"Name" cannot be an empty field`,
  }),
  email: Joi.string().pattern(emailRegex).required().messages({
    "any.required": `"Email" is a required field`,
    "string.empty": `"Email" cannot be an empty field`,
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": `"Password" is a required field`,
    "string.empty": `"Password" cannot be an empty field`,
    "string.min": `"Password" should have a minimum length of 6 digits`,
  }),
  subscription: Joi.string(),
});

module.exports = registrationSchema;
