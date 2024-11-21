const express = require("express");
const app = express();
const PORT= 3000;
app.get('/',(req,res)=>{
    res.send({message:"Hello to home "})
});
app.get('/about',(req,res)=>{
    res.send({message:"Hello to about page"})
});
app.post('/login',(req,res)=>{
   console.log(req.body);
   
});
app.listen(PORT,()=>{
    console.log("Server is Up");
    
})