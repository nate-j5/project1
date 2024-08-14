// Import required modules
const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a route for a sample API endpoint
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
