const User = require("../../models/users");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
require('dotenv').config();
const { nanoid } = require('nanoid');
const sendEmail = require('../../utils/sendEmail');
const { BASE_URL } = process.env;

const { requestError } = require("../../utils");

const registration = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const avatarUrl = gravatar.url(email);
  const verificationToken = nanoid();

  if (user) {
    requestError(409, "Email is already used");
  }


  const passwordHashed = await bcrypt.hash(password, 10);
  const result = await User.create({
    ...req.body,
    password: passwordHashed,
    avatarUrl,
    verificationToken,
  });

    const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify email</a>`,
    };
  
    await sendEmail(verifyEmail);
    console.log('send success');

  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = registration;
