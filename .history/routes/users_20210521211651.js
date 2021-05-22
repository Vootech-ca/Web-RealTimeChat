const router = require("express").Router();
const models = require("../model/Models");
const verify = require("../verifyToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { updateValidaiton, emailValidaiton } = require("../validation");

// GET posts
router.use("/all", async (req, res) => {
  const users = await models.User.find(req.body);
  res.send(
    {
    users: users._id,
    users: users.name
  });
});

// Delete user
router.delete("/remove/:id", async (req, res) => {
  await models.User.findByIdAndRemove(req.params.id);
  res.status(200).send("deleted successfully");
});

// Edit Users
router.post("/update/:id", async (req, res) => {
  const { error } = updateValidaiton(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  try {
    await models.User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      password: hashPassword,
      userImage: req.body.userImage,
    });
    res.status(200).send(req.body.name + " updated successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// edit email
router.post("/update-email/:id", async (req, res) => {
  const { error } = emailValidaiton(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the user is already in the database
  const emailExist = await models.User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  try {
    await models.User.findByIdAndUpdate(req.params.id, {
      email: req.body.email,
    });
    res.status(200).send(req.body.email + " updated successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
