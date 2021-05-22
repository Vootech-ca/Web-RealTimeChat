const mongoose = require("mongoose");

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
  is_active: {
    type: Boolean,
    default: false,
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

var room = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
  },
  topic: String,
  users: "",
  messages: "",
  created_at: Date,
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

var message = new mongoose.Schema({
  room: room,
  user: user,
  message_body: String,
  message_status: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

var User = mongoose.model("User", user);
var Room = mongoose.model("Room", room);
var Message = mongoose.model("Message", message);

module.exports = {
  User: User,
  Room: Room,
  Message: Message,
};
