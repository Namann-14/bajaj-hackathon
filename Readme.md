# 🏆 HackRx Document Intelligence Platform

**Complete Full-Stack AI-Powered Document Intelligence System**

A comprehensive platform that combines advanced AI document processing with a modern Next.js frontend to provide intelligent question-answering capabilities for any PDF, DOCX, or email documents.


![Python](https://img.shields.io/badge/Python-3.8+-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![React](https://img.shields.io/badge/React-19-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-green)
![Gemini AI](https://img.shields.io/badge/Gemini%20AI-1.5%20Flash-orange)
![Pinecone](https://img.shields.io/badge/Pinecone-Vector%20DB-purple)


## 🪧 Demo


https://github.com/user-attachments/assets/7aa5c43d-a54e-4363-bc72-edf5f00d2d0b




## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [🎯 Usage](#-usage-1)
- [📚 API Documentation](#-api-documentation)
- [🎨 Frontend Development](#-frontend-development)
- [🔧 Backend Development](#-backend-development)
- [⚙️ Configuration](#️-configuration)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Overview

HackRx Document Intelligence Platform is a complete solution that enables users to upload documents and ask questions in natural language, receiving intelligent, context-aware answers. The system combines:

- **AI-Powered Document Processing**: Extracts and understands content from PDFs, DOCX files, and emails
- **Semantic Search**: Uses Pinecone vector database for intelligent content retrieval
- **Natural Language Understanding**: Powered by Google's Gemini AI for accurate question answering
- **Modern Web Interface**: Beautiful, responsive Next.js frontend with real-time chat
- **RESTful API**: FastAPI backend with secure authentication and comprehensive error handling

## ✨ Features

### 🔍 Document Intelligence
- **Multi-format Support**: PDF, DOCX, Email processing
- **Smart Text Extraction**: Preserves document structure and formatting
- **Intelligent Chunking**: Context-aware text segmentation with overlap
- **Semantic Understanding**: Advanced NLP for content comprehension

### 🤖 AI-Powered Q&A
- **Natural Language Questions**: Ask questions in plain English
- **Context-Aware Answers**: Responses based on document content
- **Real-time Processing**: Instant answers with loading indicators
- **Multiple Questions**: Process multiple questions simultaneously

### 🌐 Modern Web Interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Chat**: Interactive chat interface for document queries
- **Beautiful UI**: Modern design with smooth animations
- **Error Handling**: Comprehensive error messages and validation

### 🔧 Technical Excellence
- **Scalable Architecture**: Microservices-based design
- **Secure Authentication**: Bearer token-based API security
- **Cross-platform**: Works on Windows, Mac, and Linux
- **Production Ready**: Comprehensive logging and error handling

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                           │
├─────────────────────────────────────────────────────────────────┤
│  • React 19 with TypeScript                                     │
│  • Tailwind CSS for styling                                     │
│  • Radix UI components                                          │
│  • Real-time chat interface                                     │
│  • Responsive design                                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    API Gateway (Next.js)                        │
├─────────────────────────────────────────────────────────────────┤
│  • /api/hackrx route                                            │
│  • CORS handling                                                │
│  • Request/response proxying                                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Backend (FastAPI)                              │
├─────────────────────────────────────────────────────────────────┤
│  • /api/v1/hackrx/run endpoint                                  │
│  • Bearer token authentication                                  │
│  • Request validation                                           │
│  • Error handling                                               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                AI Processing Pipeline                           │
├─────────────────────────────────────────────────────────────────┤
│  1. Document Download & Processing                              │
│  2. Text Extraction & Chunking                                  │
│  3. Embedding Generation (Sentence Transformers)                │
│  4. Vector Storage (Pinecone)                                   │
│  5. Semantic Search & Retrieval                                 │
│  6. Answer Generation (Gemini AI)                               │
└─────────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 18+
- npm or pnpm
- API keys for Gemini AI and Pinecone

### 1. Clone the Repository
```bash
git clone https://github.com/Namann-14/bajaj-hackathon.git
cd bajaj-hackathon
```

### 2. Backend Setup
```bash
cd ai
pip install -r requirements.txt
```

Create `.env` file:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PINECONE_API_KEY=your_pinecone_api_key_here
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```

### 4. Start the Services
```bash
# Terminal 1: Start backend
cd ai
python hackrx_api.py

# Terminal 2: Start frontend
cd client
npm run dev
```

### 5. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 📦 Installation

### Backend Dependencies

The backend requires the following Python packages:

```bash
# Core dependencies
requests>=2.31.0
PyPDF2>=3.0.0
python-docx>=0.8.11
beautifulsoup4>=4.12.0

# AI and ML
pinecone-client>=2.2.0
google-generativeai>=0.3.0
sentence-transformers>=2.2.0

# Web framework
fastapi>=0.104.0
uvicorn>=0.24.0
pydantic>=2.0.0

# Utilities
python-dotenv>=1.0.0
numpy>=1.24.0
```

### Frontend Dependencies

The frontend uses Next.js 15 with React 19 and includes:

```json
{
  "dependencies": {
    "next": "15.2.4",
    "react": "^19",
    "react-dom": "^19",
    "@radix-ui/react-*": "latest",
    "tailwindcss": "^3.4.17",
    "framer-motion": "^12.23.9",
    "lucide-react": "^0.454.0"
  }
}
```

## 🎯 Usage

### Web Interface

1. **Navigate to the Chat Interface**
   - Go to http://localhost:3000/chat
   - You'll see the Bajaj Allianz branded chat interface

2. **Upload a Document**
   - Enter the URL of your PDF, DOCX, or email document
   - Supported formats: PDF, DOCX, Email files

3. **Ask Questions**
   - Type your question in natural language
   - Examples:
     - "What is the premium amount?"
     - "Is knee surgery covered?"
     - "What are the exclusions?"

4. **Get Intelligent Answers**
   - The AI will analyze the document and provide context-aware answers
   - Answers are based on the actual document content

### API Usage

#### Direct API Calls

```javascript
// Example API call
const response = await fetch('http://localhost:8000/api/v1/hackrx/run', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    documents: "https://example.com/document.pdf",
    questions: ["What is covered?", "Any exclusions?"]
  })
});

const data = await response.json();
console.log(data.answers); // Array of answers
```

#### Python Script Usage

```python
# Edit my_documents.py with your documents and questions
MY_DOCUMENTS = [
    "https://your-pdf-url.com/document.pdf",
    "file:///C:/path/to/local/file.pdf"
]

MY_QUESTIONS = [
    "What is the premium amount?",
    "Is knee surgery covered?",
    "What are the exclusions?"
]

# Run the script
python my_documents.py
```

## 📚 API Documentation

### Endpoint: `/api/v1/hackrx/run`

**Method**: `POST`

**Authentication**: Bearer Token
```
Authorization: Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9
```

**Request Body**:
```json
{
  "documents": "https://example.com/document.pdf",
  "questions": [
    "What is the premium amount?",
    "Is knee surgery covered?",
    "What are the exclusions?"
  ]
}
```

**Response**:
```json
{
  "answers": [
    "The premium amount is $500 per month...",
    "Knee surgery is covered under the policy...",
    "The exclusions include pre-existing conditions..."
  ]
}
```

### Error Responses

```json
{
  "detail": "Invalid authentication token"
}
```

```json
{
  "detail": "Document URL is required"
}
```

## 🎨 Frontend Development

### Project Structure

```
client/
├── app/                    # Next.js 13+ app directory
│   ├── api/               # API routes
│   │   └── hackrx/       # HackRx API proxy
│   ├── chat/              # Chat interface page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # UI components (Radix UI)
│   ├── ai.tsx            # AI chat component
│   ├── Header.tsx        # Navigation header
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

### Key Components

#### AI Chat Component (`components/ai.tsx`)
- Real-time chat interface
- Document URL input
- Question input with validation
- Loading states and error handling
- Responsive design

#### Landing Page (`app/page.tsx`)
- Hero section with call-to-action
- Feature highlights
- Testimonials
- Contact information

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔧 Backend Development

### Project Structure

```
ai/
├── hackrx_system.py      # Main AI processing system
├── hackrx_api.py         # FastAPI server
├── my_documents.py       # Script for processing documents
├── test_api.py           # API testing script
├── requirements.txt      # Python dependencies
├── downloads/           # Document cache
└── *.md                 # Documentation files
```

### Core Classes

#### HackRxDocumentIntelligenceSystem
- Document processing pipeline
- Text extraction and chunking
- Embedding generation
- Semantic search
- Answer generation

#### FastAPI Server
- RESTful API endpoints
- Authentication middleware
- Request/response validation
- Error handling and logging

### Development Commands

```bash
# Install dependencies
pip install -r requirements.txt

# Start API server
python hackrx_api.py

# Test with sample documents
python my_documents.py

# Test API endpoints
python test_api.py
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `ai/` directory:

```env
# Required API Keys
GEMINI_API_KEY=your_gemini_api_key_here
PINECONE_API_KEY=your_pinecone_api_key_here

# Optional Configuration
PINECONE_INDEX_NAME=hackrx-document-intelligence
PINECONE_DIMENSION=384
EMBEDDING_MODEL=all-MiniLM-L6-v2
```

### API Configuration

The API server uses the following configuration:

- **Host**: localhost
- **Port**: 8000
- **Authentication**: Bearer token
- **CORS**: Enabled for frontend integration
- **Logging**: Comprehensive request/response logging

### Frontend Configuration

The frontend connects to the backend via:

- **API Base URL**: http://localhost:8000
- **API Endpoint**: /api/v1/hackrx/run
- **Authentication**: Bearer token in headers

## 🧪 Testing

### Backend Testing

```bash
# Test the complete system
python test_api.py

# Test with Postman
# Use the provided POSTMAN_GUIDE.md for detailed instructions
```

### Frontend Testing

```bash
# Run linting
npm run lint

# Test build
npm run build
```

### API Testing with Postman

1. **Start the backend server**
   ```bash
   python hackrx_api.py
   ```

2. **Import the following request into Postman**:
   ```
   Method: POST
   URL: http://localhost:8000/api/v1/hackrx/run
   Headers:
     Authorization: Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9
     Content-Type: application/json
   Body (raw JSON):
   {
     "documents": "https://example.com/document.pdf",
     "questions": ["What is covered?", "Any exclusions?"]
   }
   ```

## 🚀 Deployment

### Frontend Deployment

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Other Platforms

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables for Production

```env
# Backend (.env)
GEMINI_API_KEY=your_production_gemini_key
PINECONE_API_KEY=your_production_pinecone_key

# Frontend (Vercel/Netlify)
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests if applicable**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comprehensive documentation
- Include tests for new features
- Update README.md if needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see below for details.

```
MIT License

Copyright (c) 2024 HackRx Document Intelligence Platform

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent question answering
- **Next.js** for the modern React framework
- **FastAPI** for the high-performance API framework
- **Tailwind CSS** for the utility-first CSS framework
- **Radix UI** for accessible React components

## 📞 Support

For support, please:

1. Check the [documentation](#-table-of-contents) first
2. Search existing [issues](https://github.com/Namann-14/bajaj-hackathon/issues)
3. Create a new issue with detailed information

## 🔗 Links

- **Live Demo**: [Deploy and add link here]
- **API Documentation**: http://localhost:8000/docs (when running locally)
- **Frontend**: http://localhost:3000 (when running locally)
- **Backend API**: http://localhost:8000 (when running locally)
- **GitHub Repository**: https://github.com/Namann-14/bajaj-hackathon

---

**Built with ❤️ for the HackRx Hackathon**

*This project demonstrates advanced AI document processing capabilities combined with modern web development practices to create a production-ready document intelligence platform.*
