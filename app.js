const env = require('dotenv');
const connectDB = require('./db/connect');
const notFoundHandler = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const productsRouter = require('./routes/products');

const express = require('express');
const app = express();

env.config();

// Home
app.get('/', (req, res) =>
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products</a>')
);

// Routes
app.use('/api/v1/products', productsRouter);

// Errors
app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
