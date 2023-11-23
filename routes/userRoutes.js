// userRoute.js
const express = require("express");
const router = express.Router();
const User = require("../controller/userModel");

// Route to get information about all registered users
router.get("/allUsers", async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude passwords from the response

    if (users.length > 0) {
      res.json(users);
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ... other routes

module.exports = router;
