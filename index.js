const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');



// IMPORT ROUTES
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const notifyRoute = require('./routes/notification');
const messages = require('./routes/messages');
const users = require('./routes/users');



dotenv.config();
// CONNECT to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false},
() => console.log('Connected to DB'));



// MIDDLEWARES
app.use(express.json());





// Route MIDDLEWARES
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/notify', notifyRoute);
app.use('/messages', messages);
app.use('/users', users);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log("SERVER up and Running on PORT "+ port));