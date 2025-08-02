# 🚀 Next.js Frontend Integration Guide

## 📋 Your Clean Workspace

```
HackRx/
├── .env                    # Your API keys
├── hackrx_system.py       # Main system (renamed)
├── hackrx_api.py          # API server (renamed)
├── my_documents.py        # 👈 Use this for your own PDFs & questions
├── requirements.txt       # Dependencies
└── README.md             # This guide
```

---

## 📄 How to Use Your Own PDFs & Questions

### Option 1: Easy Interface (Recommended)

1. **Edit `my_documents.py`**:
   ```python
   MY_DOCUMENTS = [
       "https://your-pdf-url.com/document.pdf",
       "file:///C:/Users/jatin/Documents/my-policy.pdf"  # Local file
   ]
   
   MY_QUESTIONS = [
       "What is the premium amount?",
       "Is surgery covered?",
       "Your custom question here..."
   ]
   ```

2. **Run it**:
   ```bash
   python my_documents.py
   ```

3. **Get Results**: Check `results_document_1.json`, `results_document_2.json`, etc.

### Option 2: API Server (For Next.js)

1. **Start the server**:
   ```bash
   python hackrx_api.py
   ```

2. **Server runs on**: `http://localhost:8000`

---

## 🌐 Next.js Frontend Integration

### Step 1: API Endpoint
```javascript
// In your Next.js app
const API_BASE = 'http://localhost:8000/api/v1';
const BEARER_TOKEN = '6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9';
```

### Step 2: Create API Function
```javascript
// lib/hackrx-api.js
export async function processDocument(documentUrl, questions) {
  const response = await fetch(`${API_BASE}/hackrx/run`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${BEARER_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      documents: documentUrl,
      questions: questions
    })
  });
  
  return await response.json();
}
```

### Step 3: React Component Example
```jsx
// components/DocumentProcessor.jsx
import { useState } from 'react';
import { processDocument } from '../lib/hackrx-api';

export default function DocumentProcessor() {
  const [documentUrl, setDocumentUrl] = useState('');
  const [questions, setQuestions] = useState(['']);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const data = await processDocument(documentUrl, questions);
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">HackRx Document Intelligence</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Document URL Input */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Document URL (PDF)
          </label>
          <input
            type="url"
            value={documentUrl}
            onChange={(e) => setDocumentUrl(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="https://example.com/document.pdf"
            required
          />
        </div>

        {/* Questions Input */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Questions
          </label>
          {questions.map((question, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={question}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index] = e.target.value;
                  setQuestions(newQuestions);
                }}
                className="flex-1 p-3 border rounded-lg"
                placeholder="Enter your question..."
              />
              <button
                type="button"
                onClick={() => {
                  const newQuestions = questions.filter((_, i) => i !== index);
                  setQuestions(newQuestions);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setQuestions([...questions, ''])}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Add Question
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-green-600 text-white rounded-lg disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Process Document'}
        </button>
      </form>

      {/* Results */}
      {results && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          {results.answers?.map((answer, index) => (
            <div key={index} className="mb-6 p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Q{index + 1}: {questions[index]}
              </h3>
              <p className="text-gray-700">{answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Step 4: Environment Variables (Next.js)
```env
# .env.local
NEXT_PUBLIC_HACKRX_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_HACKRX_TOKEN=6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9
```

---

## 🔧 Quick Setup Commands

```bash
# 1. Start HackRx API Server
python hackrx_api.py

# 2. In your Next.js project
npm install
npm run dev

# 3. Test with your own documents
python my_documents.py
```

---

## 📱 Mobile-Friendly API Calls

```javascript
// For mobile apps or simple web pages
async function askDocument(pdfUrl, question) {
  const response = await fetch('http://localhost:8000/api/v1/hackrx/run', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      documents: pdfUrl,
      questions: [question]
    })
  });
  
  const data = await response.json();
  return data.answers[0]; // Return first answer
}

// Usage
const answer = await askDocument(
  "https://example.com/policy.pdf", 
  "What is the coverage amount?"
);
console.log(answer);
```

---

## 🎯 Ready to Use!

1. **For Testing**: Use `python my_documents.py` with your PDFs
2. **For Frontend**: Start `python hackrx_api.py` and connect your Next.js app
3. **API is ready** at `http://localhost:8000/api/v1/hackrx/run`

Your system can now process **any PDF** with **any questions**! 🚀
