const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'name is required'] },
  price: { type: Number, required: [true, 'price is required'] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  createdAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    enum: {
      value: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
  },
});

module.exports = mongoose.model('Product', productSchema);
