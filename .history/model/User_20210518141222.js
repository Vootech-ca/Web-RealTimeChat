const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min:6,
        max: 100
    },
    email: {
        type: String,
        min:6,
        max: 100
    },
    password: {
        type: String,
        min: 6,
        max: 1024
    },
    texts: {
        type: String,
    },
    gender: {
        type: String,
        min: 3,
        max: 25
    },
    birthday: {
        type: Date,
    },
    regDate: {
        type: Date,
        default: Date.now
    }
});



module.exports = mongoose.model('User', userSchema);