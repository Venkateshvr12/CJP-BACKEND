//newsSchema.js

const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  image: {
    type: String, // You might want to use a different type based on your storage solution (e.g., Buffer for storing binary data)
  },
},{
  collection:"news"
});

const News = mongoose.model("news", newsSchema);

module.exports = News;
