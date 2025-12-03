// Import necessary packages
const express = require('express');
const dotenv = require('dotenv').config(); // To read our 'Secret Vault' (.env)
const connectDB = require('./config/db'); // Import our custom DB connection function

// Define the port number
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Initialize our express app
const app = express();

// Middleware to parse JSON data from the request body
app.use(express.json());

// Middleware to handle URL-encoded data
app.use(express.urlencoded({ extended: false }));

// === MAIN ROUTES ===
// User Routes
app.use('/api/users', require('./routes/userRoutes'));

// Transaction Routes (New Addition)
app.use('/api/transactions', require('./routes/transactionRoutes'));

// Start the engine (server)
app.listen(PORT, () => console.log(`Koru engine is running smoothly at garage number ${PORT}`));