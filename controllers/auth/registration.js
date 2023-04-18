const User = require("../../models/users");
const { requestError } = require("../../utils");
const registration = async (req, res) => {
  const user = await User.findOne(req.body.email);
  // console.log(user);
  if (user) {
    requestError(409, "Email is already used");
  }
  const result = await User.create(req.body);
  res.status(201).json({
    name: result.name,
    email: result.email,
  });
};

module.exports = registration;
