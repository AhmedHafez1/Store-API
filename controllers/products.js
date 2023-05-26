const Product = require('../models/product');
const getAllProducts = async (req, res) => {
  const { featured, company } = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true';
  }
  if (company) {
    queryObject.company = company;
  }

  const products = await Product.find(queryObject);
  res.status(200).json({ data: products, count: products.length });
};

module.exports = { getAllProducts };
