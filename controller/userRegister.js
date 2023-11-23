// userRegister.js
const express = require("express");
const router = express.Router();
const User = require("./userModel");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists. Please choose another email.' });
    }

    // Create a new user in the database
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    // If registration is successful
    res.json({ message: 'Registration successful', user: savedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
