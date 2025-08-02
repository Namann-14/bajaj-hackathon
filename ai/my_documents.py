"""
🏆 HackRx Document Intelligence - Your Custom Documents & Questions
Easy interface to process your own PDFs with your own questions
"""

from hackrx_system import HackRxDocumentIntelligenceSystem
import json

def main():
    """Process your own documents and questions"""
    
    # 📄 ADD YOUR DOCUMENT URLs HERE
    # You can add any PDF URLs (local files, Google Drive, Dropbox, etc.)
    MY_DOCUMENTS = [
        # Example: "https://your-pdf-url.com/document.pdf"
        # Example: "file:///C:/Users/jatin/Documents/my-policy.pdf"  # Local file
        "https://hackrx.blob.core.windows.net/assets/hackrx_6/policies/CHOTGDP23004V012223.pdf?sv=2023-01-03&st=2025-07-30T06%3A46%3A49Z&se=2025-09-01T06%3A46%3A00Z&sr=c&sp=rl&sig=9szykRKdGYj0BVm1skP%2BX8N9%2FRENEn2k7MQPUp33jyQ%3D"
    ]
    
    # ❓ ADD YOUR QUESTIONS HERE
    # Write any questions about your documents in plain English
    MY_QUESTIONS = [
        # Insurance/Policy Questions
        "What is the premium amount for this policy?",
        "What are the exclusions in this policy?",
        "Is knee surgery covered?",
        
        # Contract Questions
        # "What are the payment terms?",
        # "What is the termination clause?",
        
        # Legal Questions  
        # "What are the liability limits?",
        # "What is the governing law?",
        
        # Add your own questions here:
        "46M, knee surgery, Pune, 3-month policy",
        "What is the waiting period for pre-existing diseases?",
    ]
    
    print("🚀 Starting HackRx Document Intelligence System")
    print(f"📄 Processing {len(MY_DOCUMENTS)} document(s)")
    print(f"❓ Answering {len(MY_QUESTIONS)} question(s)")
    print("-" * 60)
    
    # Initialize system
    system = HackRxDocumentIntelligenceSystem()
    
    # Process each document with all questions
    for i, document_url in enumerate(MY_DOCUMENTS, 1):
        print(f"\n📄 Processing Document {i}/{len(MY_DOCUMENTS)}")
        print(f"🔗 URL: {document_url[:100]}...")
        
        try:
            # Get answers for all questions
            answers = system.process_query(document_url, MY_QUESTIONS)
            
            # Display results
            print(f"\n✅ Document {i} Results:")
            print("=" * 60)
            
            for j, (question, answer) in enumerate(zip(MY_QUESTIONS, answers), 1):
                print(f"\n❓ Question {j}: {question}")
                print(f"💡 Answer: {answer}")
                print("-" * 40)
                
            # Save results to JSON file
            result_file = f"results_document_{i}.json"
            results = {
                "document_url": document_url,
                "questions": MY_QUESTIONS,
                "answers": answers,
                "total_questions": len(MY_QUESTIONS)
            }
            
            with open(result_file, 'w', encoding='utf-8') as f:
                json.dump(results, f, indent=2, ensure_ascii=False)
            
            print(f"\n💾 Results saved to: {result_file}")
            
        except Exception as e:
            print(f"❌ Error processing document {i}: {e}")
    
    print(f"\n🎉 Completed processing all {len(MY_DOCUMENTS)} documents!")
    print("📁 Check the results_document_*.json files for detailed answers")

if __name__ == "__main__":
    main()
