const express = require('express');
const path = require('path');
const app = express();

// Use the port provided by NodeOps or 3000 as default
const PORT = process.env.PORT || 3000;

// Serve index.html and static files from root
app.use(express.static(path.join(__dirname, '/')));

// Fallback to index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});