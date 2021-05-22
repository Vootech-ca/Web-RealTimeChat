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

    fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
            'Authorization': 'key='+'server key',
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(notification_body)
    }).then(() => {
        res.status(200).send('Notified Successfully');
    }).catch(err => {
        res.status(400).send('Something went wrong!');
    })
});