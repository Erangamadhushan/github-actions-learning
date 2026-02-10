const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to GitHub Actions Learning App!',
    status: 'OK',
    version: '1.0.0'
  });
});

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.json({
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item One', price: 9.99 },
    { id: 2, name: 'Item Two', price: 19.99 },
    { id: 3, name: 'Item Three', price: 29.99 }
  ];
  res.json({
    message: 'Here are your items',
    items,
    count: items.length
  });
});

app.post('/api/data', (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Text field is required' });
  }

  res.json({
    received: text,
    length: text.length,
    uppercase: text.toUpperCase()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server only when run directly (avoid starting during tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

module.exports = app;
