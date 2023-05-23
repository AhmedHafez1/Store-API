const env = require('dotenv');

const notFoundHandler = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

const express = require('express');
const app = express();

env.config();

// Home
app.get('/', (req, res) =>
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products</a>')
);

// Routes

// Errors
app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // Connect to Db
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
