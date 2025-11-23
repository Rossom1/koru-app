// A utility to handle exceptions inside of async express routes and pass them to your express error handlers.
// This helps us avoid writing try-catch blocks in every controller function.
const asyncHandler = require('express-async-handler');

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Register User Logic will be here' });
});

// Export the function to be used in the routes file
module.exports = {
    registerUser,
};