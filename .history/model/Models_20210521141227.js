const { string } = require("@hapi/joi");
const mongoose = require("mongoose");


// USER Schema
var user = new mongoose.Schema({
  name: {
    type: String,
    min: 6,
    max: 100,
  },
  email: {
    type: String,
    min: 6,
    max: 100,
    lowercase: true,
  },
  password: {
    type: String,
    min: 6,
    max: 1024,
  },
  description: {
    type: String,
    max: 255
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  userImage: {
    type: String
  },
  gender: {
    type: String,
    min: 3,
    max: 25,
  },
  birthday: {
    type: Date,
  },
  regDate: {
    type: Date,
    default: Date.now,
  },
});

// Message Schema
var message = new mongoose.Schema({
  user: user,
  message: {
    type: String,
    max: 100,
  },
  images: {
    type: String
  },
  messageStatus: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

var User = mongoose.model("User", user);
var Message = mongoose.model("Message", message);

module.exports = {
  User: User,
  Message: Message,
};
