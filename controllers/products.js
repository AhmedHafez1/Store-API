const Product = require('../models/product');
const getAllProducts = async (req, res) => {
  const { featured } = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true';
  }

  console.log(req.query);
  console.log(queryObject);

  const products = await Product.find(queryObject);
  res.status(200).json({ data: products, count: products.length });
};

module.exports = { getAllProducts };
