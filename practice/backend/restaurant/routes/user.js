const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/register",(req,res)=>{
    res.json({message:"registration"})
})


router.post("/login",(req,res)=>{
    res.json({message:"logging in"})
})

module.exports= router;