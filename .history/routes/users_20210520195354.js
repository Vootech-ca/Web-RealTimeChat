const router = require('express').Router();
const models = require('../model/Models');
const verify = require ('../verifyToken');
const jwt = require('jsonwebtoken');

// GET posts
router.get('/all', async(req, res) => {
    const users = await models.User.find({});
    res.send(users);
});

// Delete user
router.delete('/remove/:id', async (req, res) => {
    // const users = await models.User.find({});
    
    await models.User.findByIdAndRemove(req.params.id);
    res.status(200).send('deleted successfully');
});

// Edit Users

router.patch('/update/:id', async(req, res) => {
    try {
        const name = req.body;
        
        await models.User.findByIdAndUpdate(req.params.id, {
            // name: user.name,
            name: name
            // gender: "male",
        })
        res.status(200).send(req.body.name + ' updated successfully');
  
        // res.redirect('/profile')
    } catch (err) {
        res.status(500).send(err.message)
    } 
});
// router.put('users/:id', async (req, res) => {
//     const { error } = validateProduct(req.body); 
//     if (error) return res.status(400).send(error.details[0].message);
  
//     const product = await Product.findById(req.params.id).exec();
//     if (!product) return res.status(404).send('The product with the given ID was not found.');
  
//     let query = {$set: {}};
//     for (let key in req.body) {
//       if (product[key] && product[key] !== req.body[key]) // if the field we have in req.body exists, we're gonna update it
//          query.$set[key] = req.body[key];
  
//     const updatedProduct = await Product.updateOne({_id: req.params.id}, query}).exec();
  
//     res.send(product);
//   });

module.exports = router;