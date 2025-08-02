# 🏆 HackRx Document Intelligence System

**Complete LLM-Powered Document Intelligence System for HackRx Hackathon**

Process any PDF documents and get intelligent answers using:
- **Gemini AI** for intelligent question answering
- **Pinecone** for semantic vector search  
- **FastAPI** for Next.js integration

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Add Your API Keys
Create `.env` file:
```env
GEMINI_API_KEY=your_gemini_key_here
PINECONE_API_KEY=your_pinecone_key_here
```

### 3. Use Your Own Documents & Questions
```bash
# Edit my_documents.py with your PDFs and questions
python my_documents.py
```

### 4. For Next.js Integration
```bash
# Start API server
python hackrx_api.py
# API available at: http://localhost:8000
```

---

## 📄 How to Add Your Own PDFs & Questions

### Easy Method (Recommended)
1. **Open `my_documents.py`**
2. **Add your PDF URLs**:
   ```python
   MY_DOCUMENTS = [
       "https://your-pdf-url.com/document.pdf",
       "file:///C:/path/to/local/file.pdf"  # Local files
   ]
   ```
3. **Add your questions**:
   ```python
   MY_QUESTIONS = [
       "What is the premium amount?",
       "Is knee surgery covered?", 
       "Your custom question here..."
   ]
   ```
4. **Run**: `python my_documents.py`
5. **Get results** in `results_document_*.json` files

---

## 🌐 Next.js Integration

### API Endpoint
```
POST http://localhost:8000/api/v1/hackrx/run
Authorization: Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9
```

### Request Format  
```json
{
  "documents": "https://example.com/document.pdf",
  "questions": ["What is covered?", "What are exclusions?"]
}
```

### Response Format
```json
{
  "answers": [
    "Coverage includes medical expenses up to...",
    "Exclusions include pre-existing conditions..."
  ]
}
```

### Example Next.js Code
```javascript
// API call from your Next.js app
const response = await fetch('http://localhost:8000/api/v1/hackrx/run', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    documents: "https://your-pdf-url.com/document.pdf",
    questions: ["What is the coverage amount?"]
  })
});

const data = await response.json();
console.log(data.answers[0]); // Your answer
```

---

## 📁 Clean Project Structure

```
HackRx/
├── .env                 # Your API keys
├── hackrx_system.py    # Main intelligence system  
├── hackrx_api.py       # API server for Next.js
├── my_documents.py     # 👈 Use this for your PDFs & questions
├── requirements.txt    # Python dependencies
├── README.md          # This guide
└── USAGE_GUIDE.md     # Detailed Next.js integration guide
```

---

## 🎯 What It Can Handle

✅ **Document Types**: PDF, DOCX, Email  
✅ **Any Questions**: Plain English, shorthand, technical  
✅ **Any Domain**: Insurance, Legal, HR, Contracts  
✅ **Fast Processing**: Semantic search + AI answers  
✅ **Next.js Ready**: REST API for frontend integration

---

## 🚀 Ready to Use!

1. **Test with your PDFs**: Edit and run `my_documents.py`
2. **Connect to Next.js**: Start `hackrx_api.py` and use the API
3. **Build your frontend**: Use the provided Next.js examples

**See `USAGE_GUIDE.md` for detailed Next.js integration examples!**

---

## 📋 System Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Document      │    │   Text           │    │   Embedding     │
│   Processing    │───▶│   Extraction     │───▶│   Generation    │
│   (PDF/DOCX)    │    │   & Chunking     │    │   (Transformers)│
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Answer        │    │   Semantic       │    │   Vector        │
│   Generation    │◀───│   Search        │◀───│   Storage       │
│   (Gemini AI)   │    │   (Retrieval)    │    │   (Pinecone)    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🛠️ Core Components

### 1. Document Processing Pipeline (`hackrx_intelligence_system.py`)
- **Downloads** documents from URLs
- **Extracts** text from PDF, DOCX, and email files
- **Splits** text into intelligent chunks with overlap
- **Creates** embeddings using Sentence Transformers
- **Stores** vectors in Pinecone with metadata

### 2. Semantic Search & Retrieval
- **Pinecone Vector Database** for fast similarity search
- **Namespace isolation** for each document
- **Metadata filtering** for precise retrieval
- **Top-K similarity** search with confidence scores

### 3. Answer Generation
- **Gemini AI** for intelligent question answering
- **Context-aware prompts** with retrieved chunks
- **Explainable answers** with policy citations
- **Error handling** for edge cases

### 4. HackRx-Compliant API (`hackrx_api_server.py`)
- **FastAPI** server matching hackathon specifications
- **Bearer token authentication** 
- **JSON request/response** format
- **Error handling** and logging

---

## 🧪 Testing & Validation

### Run Complete Test Suite
```powershell
python test_system.py
```

This will:
1. ✅ Test direct system functionality
2. ✅ Test API server endpoints
3. ✅ Validate HackRx request/response format
4. ✅ Generate sample requests

### Manual API Testing
```powershell
# Test with curl
curl -X POST "http://localhost:8000/api/v1/hackrx/run" \
  -H "Authorization: Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9" \
  -H "Content-Type: application/json" \
  -d @sample_hackrx_request.json
```

---

## 🎯 HackRx Integration

### API Endpoint
```
POST http://localhost:8000/api/v1/hackrx/run
Authorization: Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9
Content-Type: application/json
```

### Request Format
```json
{
  "documents": "https://hackrx.blob.core.windows.net/assets/policy.pdf?sv=...",
  "questions": [
    "What is the grace period for premium payment?",
    "What is the waiting period for pre-existing diseases?"
  ]
}
```

### Response Format
```json
{
  "answers": [
    "A grace period of thirty days is provided for premium payment...",
    "There is a waiting period of thirty-six (36) months..."
  ]
}
```

---

## 📊 Performance Optimization

### Speed Optimizations
- **PyPDF2** for fast PDF text extraction
- **Sentence Transformers** for local embeddings (no API calls)
- **Batch processing** for Pinecone operations
- **Smart text chunking** with sentence awareness

### Accuracy Optimizations
- **Overlap between chunks** for context preservation
- **Rich metadata** for precise retrieval
- **Namespace isolation** per document
- **Top-K retrieval** with confidence scoring

### Token Efficiency
- **Local embeddings** (no OpenAI API costs)
- **Gemini AI** for cost-effective generation
- **Context optimization** to minimize prompt length
- **Batch processing** where possible

---

## 🔧 Troubleshooting

### Common Issues

**1. Missing Dependencies**
```powershell
pip install --upgrade pip
pip install -r requirements.txt
```

**2. API Key Issues**
- Check `.env` file exists and has correct keys
- Verify Gemini API key is active
- Confirm Pinecone API key has correct permissions

**3. Pinecone Connection Issues**
```python
# Check Pinecone status
from pinecone import Pinecone
pc = Pinecone(api_key="your-key")
print(pc.list_indexes())
```

**4. Memory Issues**
- Reduce `max_chunk_size` in text splitter
- Process fewer questions at once
- Clear Pinecone namespace after each document

### Debug Mode
```powershell
# Run with detailed logging
python hackrx_intelligence_system.py
```

---

## 🏆 Hackathon Success Tips

### 1. Accuracy
- ✅ System handles all document types (PDF, DOCX, Email)
- ✅ Intelligent chunking preserves context
- ✅ Semantic search finds relevant information
- ✅ Gemini AI provides accurate, contextual answers

### 2. Token Efficiency
- ✅ Local embeddings (no API costs for vectors)
- ✅ Gemini AI is cost-effective vs GPT-4
- ✅ Smart prompting minimizes token usage
- ✅ Batch processing reduces API calls

### 3. Latency
- ✅ Fast PDF extraction with PyPDF2
- ✅ Local embedding generation
- ✅ Pinecone provides sub-second search
- ✅ Parallel processing where possible

### 4. Reusability
- ✅ Modular code architecture
- ✅ Easy to extend for new document types
- ✅ Configurable parameters
- ✅ Clear API interfaces

### 5. Explainability
- ✅ Confidence scores from semantic search
- ✅ Source metadata for each chunk
- ✅ Clear reasoning in generated answers
- ✅ Comprehensive logging

---

## 📁 Project Structure

```
HackRx/
├── .env                           # API keys and configuration
├── requirements.txt               # Python dependencies
├── hackrx_intelligence_system.py # Main system implementation
├── hackrx_api_server.py          # FastAPI server
├── test_system.py                # Complete test suite
├── README.md                     # This documentation
├── sample_hackrx_request.json    # Generated sample request
└── downloads/                    # Downloaded documents cache
```

---

## 🎉 Ready to Win!

Your system is now ready for the HackRx hackathon! 

**Key Features:**
- ✅ Handles all required document types
- ✅ Fast and accurate semantic search
- ✅ Intelligent AI-powered answers
- ✅ HackRx API compliant
- ✅ Comprehensive error handling
- ✅ Production-ready logging

**Run this command to start competing:**
```powershell
python hackrx_api_server.py
```

Good luck! 🚀
