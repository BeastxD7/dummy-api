const express = require('express');
const cors = require('cors');
const ragRouter = require('./routes/rag');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Dummy RAG API Server is running!',
    status: 'active',
    endpoints: {
      health: '/health',
      rag: '/rag (POST)'
    },
    description: 'A simple RAG (Retrieval-Augmented Generation) API for job-candidate matching',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/rag', ragRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`RAG API Server running on port ${PORT}`);
  console.log(`Root endpoint: http://localhost:${PORT}/`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`RAG endpoint: http://localhost:${PORT}/rag`);
});