from pydantic import BaseModel, Field

class CareerInput(BaseModel):
    skills: str = Field(..., min_length=3)
    interests: str = Field(..., min_length=3)
    education: str = Field(..., min_length=3)

class CareerAdvice(BaseModel):
    career_paths: str
    learning_roadmap: str

class ResumeAdvice(BaseModel):
    resume_points: str
