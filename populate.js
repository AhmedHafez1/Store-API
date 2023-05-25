require('dotenv').config();

const Product = require('./models/product');
const connectDB = require('./db/connect');
const jsonProducts = require('./products.json');

const start = async (url) => {
  try {
    await connectDB(url);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('Successfully Connected');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start(process.env.MONGO_URI);
