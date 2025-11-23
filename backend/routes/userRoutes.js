// Import the express library
const express = require('express');

// Initialize the express router
const router = express.Router();

// Import the controller function that contains the logic
const { registerUser } = require('../controllers/userController');

// Define the main route for user registration
// When a POST request is made to '/', it will now call the actual registerUser function
router.post('/', registerUser);

// Export the router so it can be used in our main server.js file
module.exports = router;