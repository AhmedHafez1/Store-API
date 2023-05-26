const Product = require('../models/product');
const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({ data: products, count: products.length });
};

module.exports = { getAllProducts };
