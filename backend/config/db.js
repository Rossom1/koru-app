// Import mongoose
const mongoose = require('mongoose');

// Create an asynchronous function to connect to the database
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the URI from our .env file
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Koru is successfully connected to the Data Bank: ${conn.connection.host}`);
    } catch (error) {
        // If connection fails, log the error and exit the process
        console.log(error);
        process.exit(1);
    }
};

// Export the function to be used in server.js
module.exports = connectDB;