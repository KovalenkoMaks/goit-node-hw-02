const { getAllContacts } = require("../../models/contacts");

const getAll = async (req, res) => {
  const result = await getAllContacts();
  res.json(result);
};

module.exports = getAll;
