const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"Name" is a required field`,
    "string.empty": `"Name" cannot be an empty field`,
  }),
  // email: Joi.string().required().messages({
  //   "any.required": `"Email" is a required field`,
  //   "string.empty": `"Email" cannot be an empty field`,
  // }),
  email: Joi.string().messages({
    "any.required": `"Email" is a required field`,
    "string.empty": `"Email" cannot be an empty field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `"Phone" is a required field`,
    "string.empty": `"Phone" cannot be an empty field`,
  }),
  favorite: Joi.boolean(),
});

module.exports = addSchema;
