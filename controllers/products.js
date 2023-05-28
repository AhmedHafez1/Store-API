const Product = require('../models/product');
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true';
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = new RegExp(name, 'i');
  }

  let query = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(',').join(' ');
    query = query.sort(sortList);
  }

  if (fields) {
    const selectList = fields.split(',').join(' ');
    query = query.select(selectList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  const products = await query;

  res.status(200).json({ data: products, count: products.length });
};

module.exports = { getAllProducts };
