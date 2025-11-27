# RAG API Server

A Node.js API server with a RAG (Retrieval-Augmented Generation) endpoint.

## Installation

```bash
npm install
```

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Health Check
```
GET /health
```

### RAG Query
```
POST /rag
Content-Type: application/json

{
  "job_id": "692034d007b5443a8cfa7075",
  "candidate_id": "691d6af947ec62f2c17c0cee",
  "query": "Does this candidate have relevant experience for this job?"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "job_id": "692034d007b5443a8cfa7075",
    "candidate_id": "691d6af947ec62f2c17c0cee",
    "query": "Does this candidate have relevant experience for this job?",
    "answer": "...",
    "metadata": {
      "processed_at": "2025-11-27T00:00:00.000Z",
      "model": "placeholder"
    }
  }
}
```

## Project Structure

```
rag-api/
├── src/
│   ├── index.js          # Entry point
│   ├── routes/
│   │   └── rag.js        # RAG routes
│   └── controllers/
│       └── ragController.js  # RAG logic
├── package.json
└── README.md
```
