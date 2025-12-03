const asyncHandler = require('express-async-handler');
const Transaction = require('../models/transactionModel');
const User = require('../models/userModel');

// @desc    Get transactions
// @route   GET /api/transactions
// @access  Private
const getTransactions = asyncHandler(async (req, res) => {
  // Find transactions only for the logged-in user
  const transactions = await Transaction.find({ user: req.user.id });

  res.status(200).json(transactions);
});

// @desc    Set transaction
// @route   POST /api/transactions
// @access  Private
const setTransaction = asyncHandler(async (req, res) => {
  if (!req.body.text || !req.body.amount) {
    res.status(400);
    throw new Error('Please add text and amount fields');
  }

  const transaction = await Transaction.create({
    text: req.body.text,
    amount: req.body.amount,
    user: req.user.id, // Associate transaction with logged-in user
  });

  res.status(200).json(transaction);
});

// @desc    Update transaction
// @route   PUT /api/transactions/:id
// @access  Private
const updateTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    res.status(400);
    throw new Error('Transaction not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged-in user matches the transaction user
  if (transaction.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedTransaction = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedTransaction);
});

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
// @access  Private
const deleteTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    res.status(400);
    throw new Error('Transaction not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged-in user matches the transaction user
  if (transaction.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await transaction.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTransactions,
  setTransaction,
  updateTransaction,
  deleteTransaction,
};