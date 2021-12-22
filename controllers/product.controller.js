var Product = require("../models/product.model");

module.exports.index = async function (req, res) {
  var page = parseInt(req.query.page) || 1;
  var perPage = 8;
  var start = (page - 1) * perPage;

  var products = await Product.find().limit(perPage).skip(start);
  res.render("products/index", {
    products: products,
  });
};
