const { requestError } = require("../utils/");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(requestError(400, "missing field favorite"));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
