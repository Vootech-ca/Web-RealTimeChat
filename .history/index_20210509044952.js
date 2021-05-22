const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');




dotenv.config();
// CONNECT to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,
        useUnifiedTopology: true},
() => console.log('Connected to DB'));



// MIDDLEWARES
app.use(express.json());



// Route MIDDLEWARES
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log("SERVER up and Running on PORT "+ port));