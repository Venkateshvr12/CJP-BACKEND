//newsRoute.js

const express = require("express");
const mongoose = require("mongoose");
const News = require("../controller/newsSchema"); // Adjust the path if needed

const newsRoute = express.Router();

// Create a new news post
newsRoute.post("/create-news", async (req, res) => {
  try {
    const { headline, author, post, image } = req.body;
    const newNews = new News({
      headline,
      author,
      post,
      image,
    });
    const savedNews = await newNews.save();
    res.json(savedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all news posts
newsRoute.get("/news", async (req, res) => {
  try {
    const allNews = await News.find();
    res.json(allNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific news post by ID
newsRoute.get("/get-news/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a news post by ID
newsRoute.put("/update-news/:id", async (req, res) => {
  try {
    const { headline, author, post, image } = req.body;
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      { $set: { headline, author, post, image } },
      { new: true }
    );
    res.json(updatedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a news post by ID
newsRoute.delete("/delete-news/:id", async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndRemove(req.params.id);
    res.json(deletedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = newsRoute;
