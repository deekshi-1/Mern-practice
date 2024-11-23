const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;
const key = "secret";
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

const users = [
  { id: 1, username: "john", password: "john123" },
  { id: 2, username: "jenny", password: "jenny123" },
];

//Routes

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const id = users.length + 1;
  users.push({ id, username, password });
  res.status(201).json({
    message: "user added successfully",
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user.id, username: user.username }, key, {
    expiresIn: "1h",
  });
  res.json({ token });
});

app.get("/protected",verifyToken,(req,res)=>{
    res.json({message:"Protected  route accessed"});
})


function verifyToken (req,res,next){
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        res.status(401).json({ message: "Invalid credentials" });
    }
    jwt.verify(token,key,(err,decode)=>{
        if(err){
            res.status(401).json({ message: "Invalid token" });
        }
        res.user = decode;
        next();
    })
} 

app.listen(PORT, () => {
  console.log(`Server up at ${PORT}`);
});
