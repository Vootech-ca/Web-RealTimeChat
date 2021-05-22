const router = require("express").Router();
const models = require("../model/Models");


// GET conversation data
router.get("/", (req, res) => {
  models.Message.find({}, (err, messages) => {
    res.send(messages);
  });
  res.status(400).send(err);
});


// Post Messages
router.post("/send", async (req, res) => {
  const message = new models.Message({
    message: req.body.message,
  });

  try {
    await message.save();
    res.send(message);
  } catch (err) {
    res.status(500).send(err.message);
  }

});

module.exports = router;
