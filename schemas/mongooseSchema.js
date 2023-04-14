const { Schema } = require("mongoose");
const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const contactSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      unique: true,
      mattch: emailRegex,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      mattch: phoneRegex,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

module.exports = contactSchema;
