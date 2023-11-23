// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  headline: { type: String, required: true },
  description: { type: String, required: true },
  // You can add more fields like 'image', 'author', etc., as needed
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;
