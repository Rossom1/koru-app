// Import mongoose to interact with the database
const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = mongoose.Schema(
    {
        // User's name field
        name: {
            type: String,
            required: [true, 'Please add a name'], // This field is mandatory
        },
        // User's email field
        email: {
            type: String,
            required: [true, 'Please add an email'], // This field is mandatory
            unique: true, // Each email must be unique in the database
        },
        // User's password field
        password: {
            type: String,
            required: [true, 'Please add a password'], // This field is mandatory
        },
    },
    {
        // Automatically add createdAt and updatedAt timestamps
        timestamps: true,
    }
);

// Export the model so it can be used in other files
module.exports = mongoose.model('User', userSchema);