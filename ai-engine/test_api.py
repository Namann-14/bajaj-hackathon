"""
Test your HackRx API Server
Simple script to test the running API with your own questions
"""

import requests
import json

# API Configuration
API_URL = "http://localhost:8000/api/v1/hackrx/run"
BEARER_TOKEN = "6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9"

def test_api(document_url, questions):
    """Test the HackRx API with your documents and questions"""
    
    headers = {
        "Authorization": f"Bearer {BEARER_TOKEN}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "documents": document_url,
        "questions": questions
    }
    
    print("🚀 Testing HackRx API Server")
    print(f"📄 Document: {document_url[:100]}...")
    print(f"❓ Questions: {len(questions)}")
    print("-" * 60)
    
    try:
        response = requests.post(API_URL, json=payload, headers=headers)
        
        if response.status_code == 200:
            data = response.json()
            
            print("✅ API Response Successful!")
            print("=" * 60)
            
            for i, (question, answer) in enumerate(zip(questions, data["answers"]), 1):
                print(f"\n❓ Question {i}: {question}")
                print(f"💡 Answer: {answer}")
                print("-" * 40)
            
            # Save to file
            with open("api_test_results.json", "w") as f:
                json.dump({
                    "document": document_url,
                    "questions": questions,
                    "answers": data["answers"],
                    "status": "success"
                }, f, indent=2)
            
            print(f"\n💾 Results saved to: api_test_results.json")
            
        else:
            print(f"❌ API Error: {response.status_code}")
            print(f"Response: {response.text}")
            
    except requests.exceptions.ConnectionError:
        print("❌ Connection Error: Make sure the API server is running!")
        print("Start server with: python hackrx_api.py")
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    # 📄 Test with your document
    TEST_DOCUMENT = "https://hackrx.blob.core.windows.net/assets/hackrx_6/policies/CHOTGDP23004V012223.pdf?sv=2023-01-03&st=2025-07-30T06%3A46%3A49Z&se=2025-09-01T06%3A46%3A00Z&sr=c&sp=rl&sig=9szykRKdGYj0BVm1skP%2BX8N9%2FRENEn2k7MQPUp33jyQ%3D"
    
    # ❓ Test with your questions  
    TEST_QUESTIONS = [
        "What is the premium amount?",
        "Is knee surgery covered?",
        "46M, heart surgery, Mumbai, 6-month policy"
    ]
    
    test_api(TEST_DOCUMENT, TEST_QUESTIONS)
