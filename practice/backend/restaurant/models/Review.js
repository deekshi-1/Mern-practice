const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  resId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required:true,
    minimum: 0,
    maximum:5,
  },
  detail:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true
  }
});

const Review = mongoose.model("reviews", ReviewSchema);

module.exports = Review;
