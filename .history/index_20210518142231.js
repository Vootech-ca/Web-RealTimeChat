const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


// IMPORT ROUTES
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const notifyRoute = require('./routes/notification');



dotenv.config();
// CONNECT to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true},
() => console.log('Connected to DB'));



// MIDDLEWARES
app.use(express.json());



// Route MIDDLEWARES
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/notify', notifyRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log("SERVER up and Running on PORT "+ port));