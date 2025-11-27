const express = require('express');
const router = express.Router();
const ragController = require('../controllers/ragController');

// POST /rag - RAG query endpoint
router.post('/', ragController.handleRagQuery);

module.exports = router;
