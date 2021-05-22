const mongoose = require('mongoose');

const convSchema = new mongoose.Schema({
    name: {
        type: String,
        min:6,
        max: 100
    }
});



module.exports = mongoose.model('Conversation', convSchema);