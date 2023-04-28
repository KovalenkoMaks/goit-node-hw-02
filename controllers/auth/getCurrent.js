const getCurrent = (req, res) => {
  const { email, subscription, name } = req.user;
  res.json({ email, name, subscription });
};
module.exports = getCurrent;
