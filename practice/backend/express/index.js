const express = require("express");
const app = express();
const PORT= 3000;

app.get('/about',(req,res)=>{
    res.send({message:"Hello"})
});
app.post('/login',(req,res)=>{
    res.send({message:"user"})
});
app,listen(PORT,()=>{
    console.log("Server is Up");
    
})