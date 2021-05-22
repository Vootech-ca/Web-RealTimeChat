const router = require("express").Router();
const models = require("../model/Models");
// const bodyParser = require('body-parser');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}))



router.get("/messages", (req, res) => {
  models.Message.find({}, (err, messages) => {
    res.send(messages);
  });
});

router.post("/messages", async (req, res) => {
  const message = new models.Message({
    message: req.body.message,
    test: req.body.test
  });

  try {
    await message.save();
    res.send(message);
  } catch (err) {
    res.status(500).send(err.message);
  }


  // var message = await new models.Message(req.body);
  // await message.save((err) =>{
  //   if(err)
  //     res.status(500).send(err);
  //   res.status(200).send(message);
  // });

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
