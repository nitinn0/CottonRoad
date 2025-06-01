const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
});

module.exports = mongoose.model('Product', productSchema);
