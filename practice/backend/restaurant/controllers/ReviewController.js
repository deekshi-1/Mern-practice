const Review = require("../models/Review");

const findAll = async (res) => {
  let review = await Review.find({});
  return res.json(review);
};

exports.getAll = (req, res) => {
  findAll(res);
};

exports.getReview = (req, res) => {
  let restReview = Review.find(req.params.id);
  return res.json(restReview);
};

exports.addReview = (req, res) => {
  const { resId,userId, rating, detail } = req.body
  let newReview = new Review({
    resId,
    userId,
    rating,
    detail,
    date: new Date(),
  });
  newReview.save().then((rest) => {
    console.log("added review", rest);
  });
  console.log("reee");
  
};
