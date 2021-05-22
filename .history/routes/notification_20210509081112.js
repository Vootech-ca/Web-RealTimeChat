const express = require('express');

const router = express.Router();

router.post('/sendToAll', (req, res) => {

    var notification = {
        'title': 'Notification Title',
        'text': 'Some Text Here..'
    }

    var fcm_tokens = [];

    var notification_body = {
        'notification': notification,
        'registration_ids': fcm_tokens
    }

    fetch('', {
        'method': 'POST',
        'headers': {},
        'body': ''
    })
});