const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/all",(req,res)=>{
    res.json({message:"All restaurent"})
})


router.get("/get/:id",(req,res)=>{
    let id = req.params.id;
    res.json({message:`get detail of restaurant ${id}  `})
})

router.post("/add",(req,res)=>{
    res.json({message:`restaurant add `})
})


module.exports= router;