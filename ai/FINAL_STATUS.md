# 🏆 HackRx Document Intelligence - Clean & Ready!

## 📁 Your Clean Workspace

```
HackRx/
├── .env              # Your API keys (Gemini + Pinecone)
├── hackrx_system.py  # Main intelligence system
├── hackrx_api.py     # API server for Next.js
├── my_documents.py   # Process your own PDFs & questions
├── test_api.py       # Test the API server
├── requirements.txt  # Python dependencies
├── README.md         # Main guide
├── USAGE_GUIDE.md    # Next.js integration examples
└── downloads/        # Cache for downloaded documents
```

## 🚀 Quick Commands

### Test Your Own Documents
```bash
# Edit my_documents.py with your PDFs and questions
python my_documents.py
```

### Start API Server for Next.js
```bash
python hackrx_api.py
# Server: http://localhost:8000
```

### Test API Server
```bash
python test_api.py
```

## ✅ System Status: FULLY WORKING

- ✅ **Document Processing**: PDF, DOCX, Email
- ✅ **Semantic Search**: Pinecone vector database  
- ✅ **AI Answers**: Gemini AI integration
- ✅ **API Server**: FastAPI for Next.js
- ✅ **Authentication**: Bearer token security
- ✅ **Cross-Platform**: Works on Windows/Mac/Linux

## 🌐 Next.js Integration

```javascript
// API call from your Next.js frontend
const response = await fetch('http://localhost:8000/api/v1/hackrx/run', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    documents: "https://your-pdf-url.com/document.pdf",
    questions: ["What is covered?", "Any exclusions?"]
  })
});

const data = await response.json();
console.log(data.answers); // Your intelligent answers
```

## 🎯 You're Ready for HackRx!

Your system can handle **ANY PDF** with **ANY questions** in plain English! 🚀
