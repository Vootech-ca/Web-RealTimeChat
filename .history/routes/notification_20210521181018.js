const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const admin = require('firebase-admin');


router.post('/sendToAll', (req, res) => {

    
    // var notification = {
    //     'title': 'Notification Title',
    //     'text': 'Some Text Here..'
    // }

    // var fcm_tokens = [];

    // var notification_body = {
    //     'notification': notification,
    //     'registration_ids': fcm_tokens
    // }

    // fetch('https://fcm.googleapis.com/fcm/send', {
    //     'method': 'POST',
    //     'headers': {
    //         'Authorization': 'key='+
    //         'AAAAgZXoB4I:APA91bGN4Pk9W_4SvMCNBAPYjCpdOEacAPTHhZSCIwBMAs-OmZvOTHvcqsj4geF9WDP-OddY_Y8pj7rQE90VKVbZ0C9Zf4hokdpIQFR_hWToi_S2QEpaeS_cWAoBRJVAoP36vCdW8QNO',
    //         'Content-Type': 'application/json'
    //     },
    //     'body': JSON.stringify(notification_body)
    // }).then(() => {
    //     res.status(200).send('Notified Successfully');
    // }).catch(err => {
    //     res.status(400).send('Something went wrong!');
    //     console.log(err);
    // })
});

module.exports = router;