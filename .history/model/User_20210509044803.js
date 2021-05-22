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
    gender: {
        type: String,
        min: 3,
        max: 25
    },
    weight: {
        type: Number,
    },
    type: {
        type: String,
        min: 1,
        max: 10
    },
    height: {
        type: Number,
        min: 1,
        max: 500
    },
    age: {
        type: Number,
        min: 1,
        max: 500
    },
    date: {
        type: Date,
        default: Date.now
    }
});



module.exports = mongoose.model('User', userSchema);