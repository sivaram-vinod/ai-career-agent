from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from schemas import CareerInput
from agents import career_agent, resume_agent

app = FastAPI(title="AI Career Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status": "server running"}

@app.post("/analyze")
async def analyze_career(data: CareerInput):
    try:
        career_result = await career_agent.run(
            f"""
            Skills: {data.skills}
            Interests: {data.interests}
            Education: {data.education}
            """
        )

        resume_result = await resume_agent.run(
            f"""
            Skills: {data.skills}
            Education: {data.education}
            """
        )

        # ✅ CORRECT WAY (NEW PYDANTIC-AI)
        return {
            "career_paths": career_result.output.career_paths,
            "learning_roadmap": career_result.output.learning_roadmap,
            "resume_points": resume_result.output.resume_points
        }

    except Exception as e:
        print("AI ERROR >>>", str(e))
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
