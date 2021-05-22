const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const  {registerValidation, loginValidation} = require('../validation');



router.post('/register', async (req, res) => {
    let rb = req.body;

    // Let's validate the data before we make a user
    const {error} = registerValidation(rb);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the user is already in the database
    const emailExist = await User.findOne({email: rb.email});
    if (emailExist) return res.status(400).send('Email already exists');


    // Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(rb.password, salt);
    
    const user = new User({
        name: rb.name,
        email: rb.email,
        password: hashPassword,
    });
    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch (err) {
        res.status(400).send(err);
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    let rb = req.body;

    const {error} = loginValidation(rb);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the email exists
    const user = await User.findOne({email: rb.email});
    if (!user) return res.status(400).send('Email or password is wrong!');

    // check if the password is CORRECT
    const validPass = await bcrypt.compare(rb.password, user.password);
    if(!validPass) return res.status(400).send('Email or password is wrong!!');


    // Create and asign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

});



module.exports = router;