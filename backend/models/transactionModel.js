const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Connects each transaction to a specific user
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    amount: {
      type: Number,
      required: [true, 'Please add a positive or negative number'],
    },
  },
  {
    timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields
  }
);

module.exports = mongoose.model('Transaction', transactionSchema);