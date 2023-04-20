const handelMongooseError = (error, data, next) => {
  const { name, code } = error;
  const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  error.status = status;
  error.message = "Email in use";
  next();
};

module.exports = handelMongooseError;
