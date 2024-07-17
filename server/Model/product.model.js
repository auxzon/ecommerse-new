const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Ecart');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDetails: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: false,
  },
  productCategory: {
    type: String,
    required: false,
  },
  wishlistCount: {
    type: Number,
    default: 0,
  },
  ratings: [{
    userId: String,
    rating: Number,
    review: String,
  }],
  starCounts: {
    1: { type: Number, default: 0 },
    2: { type: Number, default: 0 },
    3: { type: Number, default: 0 },
    4: { type: Number, default: 0 },
    5: { type: Number, default: 0 },
  },
  averageRating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Product', productSchema);
