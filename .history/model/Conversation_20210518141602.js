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
});

var room = new mongoose.Schema({
  name: { type: String, lowercase: true, unique: true },
  topic: String,
  users: "",
  messages: "",
  created_at: Date,
  updated_at: { type: Date, default: Date.now },
});

var message = new mongoose.Schema({
  room: room,
  user: user,
  message_body: String,
  message_status: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});

// module.exports.user = user;
// module.exports.room = room;
// module.exports.message = message;

// module.exports = {
//    User: user,
//    Room: room,
//    Message: message
// };

var User = mongoose.model('User', user);
var Room = mongoose.model('Room', room);
var Message = mongoose.model('Message', message);

// const convSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         min:6,
//         max: 100
//     }
// });

// module.exports = mongoose.model('Conversation', convSchema);
