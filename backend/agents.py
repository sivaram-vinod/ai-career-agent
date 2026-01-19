from pydantic_ai import Agent
from schemas import CareerAdvice, ResumeAdvice

MODEL = "openrouter:meta-llama/llama-3.1-8b-instruct"

career_agent = Agent(
    model=MODEL,
    output_type=CareerAdvice,
    system_prompt="""
    You are a professional career guidance AI.
    Suggest realistic career paths and a clear learning roadmap.
    """
)

resume_agent = Agent(
    model=MODEL,
    output_type=ResumeAdvice,
    system_prompt="""
    You are an expert resume writer.
    Generate strong resume bullet points based on skills and education.
    """
)
