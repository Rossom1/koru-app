// Import necessary packages
const express = require('express');
const dotenv = require('dotenv').config(); // To read our 'Secret Vault' (.env)
const connectDB = require('./config/db'); // Import our custom DB connection function

// Define the port number
const PORT = process.env.PORT || 5000; // Use port 5000 for consistency

// Connect to the database
connectDB();

// Initialize our express app
const app = express();

// Middleware to parse JSON data from the request body
app.use(express.json());

// Middleware to handle URL-encoded data
app.use(express.urlencoded({ extended: false }));

// === MAIN ROUTES ===
// This tells our app to use the userRoutes file for any URL that starts with /api/users
app.use('/api/users', require('./routes/userRoutes'));

// Start the engine (server)
app.listen(PORT, () => console.log(`Koru engine is running smoothly at garage number ${PORT}`));