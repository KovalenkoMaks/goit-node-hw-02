const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/users");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");
const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const avatarRenamed = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, avatarRenamed);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", avatarRenamed);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
