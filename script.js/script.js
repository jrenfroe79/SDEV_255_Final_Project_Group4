const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3030;

// Serve static files from the 'SDEV_255_Final_Project_Group4' directory
app.use(express.static(path.join(__dirname, 'SDEV_255_Final_Project_Group4')));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
