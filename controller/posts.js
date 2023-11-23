// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Adjust the path based on your project structure

// Route to get all posts
router.get('/create-news', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
