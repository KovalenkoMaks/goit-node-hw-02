const { Schema } = require("mongoose");
const { handelMongooseError } = require("../../utils");
const subscription = ["starter", "pro", "business"];
const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set Name for user"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscription,
      default: "starter",
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
      verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
  },
  { versionKey: false }
);

userSchema.post("save", handelMongooseError);

module.exports = userSchema;
