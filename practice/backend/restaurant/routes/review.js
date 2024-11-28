const express = require("express");
const router = express.Router();
const passport = require("passport");
const Review = require("../controllers/ReviewController")


router.get("/all",Review.getAll)


router.get("/get/:id",Review.getReview)

router.post("/add",Review.addReview)


module.exports= router;