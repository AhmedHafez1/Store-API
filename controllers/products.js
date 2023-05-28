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

  const products = await query;

  res.status(200).json({ data: products, count: query.length });
};

module.exports = { getAllProducts };
