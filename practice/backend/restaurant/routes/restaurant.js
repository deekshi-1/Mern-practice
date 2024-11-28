const express = require("express");
const router = express.Router();
const passport = require("passport");
const Restaurant = require("../controllers/RestaurantController")


router.get("/all",Restaurant.getAll)


router.get("/get/:id",Restaurant.getRestaurant)

router.post("/add",Restaurant.addRestaurant)


module.exports= router;