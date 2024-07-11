const express = require('express');
const path = require('path');
const dotenv = require('dotenv'); // Require the 'dotenv' package

const app = express(); // Create the express app

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const PORT = process.env.PORT || 3040; // Set default port to 3040 if PORT is not set

// Serve static files from the 'SDEV_255_Final_Project_Group4' directory
app.use(express.static(path.join(__dirname, '/sdev-255-final-project-group4')));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
