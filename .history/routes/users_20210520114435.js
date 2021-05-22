


// Edit Users
router.put('users/:id', async (req, res) => {
    const { error } = validateProduct(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const product = await Product.findById(req.params.id).exec();
    if (!product) return res.status(404).send('The product with the given ID was not found.');
  
    let query = {$set: {}};
    for (let key in req.body) {
      if (product[key] && product[key] !== req.body[key]) // if the field we have in req.body exists, we're gonna update it
         query.$set[key] = req.body[key];
  
    const updatedProduct = await Product.updateOne({_id: req.params.id}, query}).exec();
  
    res.send(product);
  });