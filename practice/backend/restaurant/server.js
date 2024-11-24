require("dotenv").config();
const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const PORT = 3000;
const user = require("./routes/user")
const restaurant = require("./routes/restaurant")
const review = require("./routes/review")

const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(passport.initialize())
app.use("/api/users",user);
app.use("/api/restaurants",restaurant);
app.use("/api/reviews",review);
mongo.connect(process.env.MONGODB_URL, { useNewUrlParser: true }).then(
  () => {
    console.log("connected to db");
  },
  (err) => {
    console.log(`error in connection ${err}`);
  }
);

app.get("/", (req, res) => {
  res.json({ message: "Base route" });
});
app.listen(PORT, () => {
  console.log(`Server up at ${PORT}`);
});
