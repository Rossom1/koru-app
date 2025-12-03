const express = require('express');
const router = express.Router();
const {
  getTransactions,
  setTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

const { protect } = require('../middleware/authMiddleware'); // Import security guard

// Route for getting and adding transactions
// All these routes are protected
router.route('/').get(protect, getTransactions).post(protect, setTransaction);

// Route for updating and deleting transactions by ID
router.route('/:id').delete(protect, deleteTransaction).put(protect, updateTransaction);

module.exports = router;