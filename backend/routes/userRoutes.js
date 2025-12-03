const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware'); // Importing middleware

// Route for registration (Sign Up)
// @access  Public
router.post('/', registerUser);

// Route for authentication (Login)
// @access  Public
router.post('/login', loginUser);

// Route to get user data
// @access  Private (Protected by 'protect' middleware)
router.get('/me', protect, getMe); 

module.exports = router;