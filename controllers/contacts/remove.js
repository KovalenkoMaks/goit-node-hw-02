const { NotFound } = require("http-errors");
const Contact = require("../../models/contact");

const remove = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;

  const result = await Contact.findOneAndDelete({ owner, _id: contactId });
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = remove;
