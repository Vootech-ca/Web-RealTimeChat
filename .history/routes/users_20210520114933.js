const router = require('express').Router();
const models = require('../model/Models');
const jwt = require('jsonwebtoken');

// GET posts
router.get('/', async(req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Edit Users
