# 📮 Postman API Test Guide

## **Simple Instructions for Your Developer**

### **Step 1: Start the Backend**
```bash
python hackrx_api.py
```
Server will run on: `http://localhost:8000`

---

## **Step 2: Postman Setup**

### **Method**: POST
### **URL**: `http://localhost:8000/api/v1/hackrx/run`

### **Headers**:
```
Authorization: Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9
Content-Type: application/json
```

### **Body** (raw JSON):
```json
{
  "documents": "https://hackrx.blob.core.windows.net/assets/hackrx_6/policies/CHOTGDP23004V012223.pdf?sv=2023-01-03&st=2025-07-30T06%3A46%3A49Z&se=2025-09-01T06%3A46%3A00Z&sr=c&sp=rl&sig=9szykRKdGYj0BVm1skP%2BX8N9%2FRENEn2k7MQPUp33jyQ%3D",
  "questions": [
    "What is the premium amount?",
    "Is knee surgery covered?",
    "What are the exclusions?"
  ]
}
```

### **Expected Response**:
```json
{
  "answers": [
    "The premium amount is...",
    "Knee surgery coverage...",
    "The exclusions include..."
  ]
}
```

---

## **Step 3: Copy-Paste for Developer**

**Tell your developer**: "Just copy this into Postman and click Send"

```
Method: POST
URL: http://localhost:8000/api/v1/hackrx/run

Headers:
- Authorization: Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9
- Content-Type: application/json

Body (raw JSON):
{
  "documents": "https://example.com/document.pdf",
  "questions": ["What is covered?", "Any exclusions?"]
}
```

---

## **Step 4: For Next.js Code**

Once Postman works, your developer can use this JavaScript:

```javascript
const response = await fetch('http://localhost:8000/api/v1/hackrx/run', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer 6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    documents: "https://example.com/document.pdf",
    questions: ["What is covered?"]
  })
});

const data = await response.json();
console.log(data.answers[0]); // The answer
```

---

## **That's It!** 
- Start Python server: `python hackrx_api.py`
- Test in Postman first
- Then copy the same logic to Next.js
- Super simple! 🚀
