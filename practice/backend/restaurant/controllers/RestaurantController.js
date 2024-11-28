const Restaurant = require("../models/Restaurant");

const findAll = async(res) => {
  let searchResult =await Restaurant.find({});
    return res.json(searchResult);
  };

exports.getAll = (req, res) => {
  findAll(res);
};

exports.getRestaurant = (req, res) => {
    let searchResult =Restaurant.find(req.params.id)
    return res.json(searchResult);
  };

exports.addRestaurant = (req, res) => {
  let newRest = new Restaurant({ name: req.body.name });
  newRest.save().then((rest) => {
    console.log("added Restaurant", rest);
  });
};
