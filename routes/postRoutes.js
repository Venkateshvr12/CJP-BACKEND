const express = require('express');
const router = express.Router();
const Post = require('../controller/newsSchema'); // Adjust the path based on your project structure
const mongoose=require('mongoose');
// Route to get all posts
router.get('/news', async (req, res) => {
  // try {
  //   const posts = await Post.find();
  //   console.log('Fetched Posts:', posts); 
  //   res.json(posts);
  // } catch (error) {
  //   console.error('Error fetching posts:', error);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }
  Post.find((err,data)=>{
    if(err){
        return err;
    }
    else{
        res.json(data)
    }
})
});
router.route("/updatePost/:id")
.get((req,res)=>{
    Post.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
}).put((req,res)=>{
    Post.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set: req.body},(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})
 
router.delete("/deletePost/:id",(req,res)=>{
    Post.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            return res.json(data);
        }
    })
})
module.exports = router;
