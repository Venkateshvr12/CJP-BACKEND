//userRoute.js

const express = require("express");
const router = express.Router();
const User = require("./userModel");

router.post("/login",(req,res)=>{
  const {email}=req.body;
  User.findOne({email:email},(err,data)=>{
    if(err){
      return err;
    }else{
      return res.json(data)
    }
  })
})

module.exports = router;