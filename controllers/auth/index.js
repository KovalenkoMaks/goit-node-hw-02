const registration = require("./registration");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const subscription = require("./subscription");
const updateAvatar = require("./updateAvatar");
const resendEmail = require('./resendEmail')
const verifyEmail = require('./verifyEmail')
module.exports = {
  registration,
  login,
  getCurrent,
  logout,
  subscription,
  updateAvatar,
  resendEmail,
  verifyEmail,
};
