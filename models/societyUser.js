const mongoose = require("mongoose");

const societyUserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    default: Date.now() + Math.random(),
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: String,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("societyUser", societyUserSchema);
