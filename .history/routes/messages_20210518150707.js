const router = require('express').Router();
const models = require('../model/Models');


router.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })

router.post('/messages', async (req, res) => {
    let rb = req.body;

    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })

    
    // // Checking if the user is already in the database
    // const emailExist = await models.User.findOne({email: rb.email});
    // if (emailExist) return res.status(400).send('Email already exists');


    // // Hash passwords
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(rb.password, salt);
    
    // const message = new models.Message({
    //     name: rb.name,
    //     email: rb.email,
    //     password: hashPassword,
    // });
    // try {
    //     const savedUser = await user.save();
    //     res.send({user: user._id});
    // } catch (err) {
    //     res.status(400).send(err);
    // }
});

module.exports = router;