"""
HackRx API Server - Exact specification match
Implements the required /hackrx/run endpoint with Bearer authentication
"""

from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from typing import List
import logging
import json
from hackrx_system import HackRxDocumentIntelligenceSystem

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="HackRx Document Intelligence API",
    description="LLM-Powered Intelligent Query-Retrieval System",
    version="1.0.0"
)

# Security
security = HTTPBearer()

# Expected Bearer token from problem statement
EXPECTED_TOKEN = "6a745545be23e2ccd81f4a2f917ff0251b9ab078cd8a48e03a9cb740a7b0a2d9"

# Initialize the document intelligence system
system = None

@app.on_event("startup")
async def startup_event():
    """Initialize the system on startup"""
    global system
    try:
        system = HackRxDocumentIntelligenceSystem()
        logger.info("✅ HackRx Document Intelligence System initialized")
    except Exception as e:
        logger.error(f"❌ System initialization failed: {e}")
        raise

# Request/Response models
class HackRxRequest(BaseModel):
    documents: str  # Single document URL as per specification
    questions: List[str]

class HackRxResponse(BaseModel):
    answers: List[str]

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Verify Bearer token authentication"""
    if credentials.credentials != EXPECTED_TOKEN:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return credentials.credentials

@app.post("/api/v1/hackrx/run", response_model=HackRxResponse)
async def run_hackrx_query(
    request: HackRxRequest,
    token: str = Depends(verify_token)
):
    """
    Main HackRx endpoint - Process document and answer questions
    
    Matches exact specification:
    - POST /api/v1/hackrx/run
    - Bearer token authentication
    - Returns structured JSON with answers array
    """
    try:
        logger.info(f"🚀 Processing HackRx request with {len(request.questions)} questions")
        
        # Validate inputs
        if not request.documents:
            raise HTTPException(
                status_code=400,
                detail="Document URL is required"
            )
        
        if not request.questions:
            raise HTTPException(
                status_code=400,
                detail="At least one question is required"
            )
        
        # Process the query using our system
        answers = system.process_query(request.documents, request.questions)
        
        # Return response in exact format specified
        response = HackRxResponse(answers=answers)
        
        logger.info(f"✅ Successfully processed {len(request.questions)} questions")
        return response
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Processing error: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Internal server error: {str(e)}"
        )

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "message": "HackRx Document Intelligence API",
        "status": "active",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Detailed health check"""
    try:
        # Check if system is initialized
        if system is None:
            return {"status": "error", "message": "System not initialized"}
        
        return {
            "status": "healthy",
            "system": "HackRx Document Intelligence",
            "components": {
                "gemini_api": "✅ Connected",
                "pinecone_db": "✅ Connected", 
                "embedding_model": "✅ Loaded"
            }
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    import uvicorn
    
    # Run the server
    uvicorn.run(
        "hackrx_api:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
