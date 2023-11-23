// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRegisterRoute = require('./controller/userRegister');
const userLoginRoute = require('./controller/userLogin');
const newsRoute = require('./controller/newsRoute');
const postsRoutes = require('./routes/postRoutes'); // Import the posts route
const userRoutes = require('./routes/userRoutes'); // Import the userRoutes

const app = express();
const port = 4000;
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://testing:2222@cluster0.4c5km6y.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(cors());
app.use(express.json());
app.use("/userRegister", userRegisterRoute);
app.use("/userLogin", userLoginRoute);
app.use("/newsRoute", newsRoute);
app.use("/api", postsRoutes);
app.use("/user", userRoutes); // Use the userRoutes

// Add a route for posting new articles
app.post('/create-news', async (req, res) => {
  try {
    const { headline, author, post, image } = req.body;
    const newPost = new Post({
      headline,
      author,
      post,
      image,
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
