const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: String,
  items: [String],
  total: Number,
  address: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);