require('dotenv').config(); // To read our 'Secret Vault' (.env)
const express = require('express');
const mongoose = require('mongoose'); // Calling our 'Translator' (Mongoose)

const app = express();
const PORT = 3000;

// Attempt to build the bridge to the Data Bank
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Koru is successfully connected to the Data Bank!'); // Show this message on success
    
    // Start the engine only AFTER the bridge is built
    app.listen(PORT, () => {
      console.log(`Koru engine is running smoothly at garage number ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Failed to connect to the Data Bank.', error); // Show this message on failure
  });