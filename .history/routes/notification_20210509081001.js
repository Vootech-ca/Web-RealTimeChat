const express = require('express');

const router = express.Router();

router.post('/sendToAll', (req, res) => {

    var notification = {
        'title': 'Notification Title',
        'text': 'Some Text Here..'
    }

    fetch('', {
        'method': 'POST',
        'headers': {},
        'body': ''
    })
});