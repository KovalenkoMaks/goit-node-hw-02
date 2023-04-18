const addSchema = require("./contacts/addJoi");
const updateSchema = require("./contacts/updateJoi");
const contactSchema = require("./contacts/ContactMongooseSchema");
const favoriteSchema = require("./contacts/favoriteJoi");
const userSchema = require("./auth/registrationMongooseSchema");
const registrationSchema = require("./auth/registrationJoi");
const loginSchema = require("./auth/loginJoi");
module.exports = {
  addSchema,
  updateSchema,
  contactSchema,
  favoriteSchema,
  userSchema,
  registrationSchema,
  loginSchema,
};
