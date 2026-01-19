🤖 AI Career Assistant

A full-stack Generative AI application that provides personalized career guidance, a learning roadmap, and resume bullet points based on a user’s skills, interests, and education.

This project is built as part of the SRM Career Centre – Generative AI Assessment and is live deployed end-to-end.


🌐 Live Project Links

Frontend (Vercel):
👉 https://ai-career-agent-amber.vercel.app

Backend API (Render):
👉 https://ai-career-agent-backend.onrender.com

👉 Swagger Docs: https://ai-career-agent-backend.onrender.com/docs

GitHub Repository:
👉 https://github.com/sivaram-vinod/ai-career-agent


🎯 Problem Statement

Students often struggle with:

Choosing the right career path

Knowing what skills to learn next

Writing strong resume bullet points

This application solves that problem by using a Generative AI Agent that analyzes user input and provides actionable, structured career guidance.


🧠 What the AI Agent Does

Given:

Skills

Interests

Education background

The AI agent generates:

Recommended career paths

A step-by-step learning roadmap

Resume-ready bullet points

All outputs are validated and structured using Pydantic AI.


🏗️ Tech Stack
Frontend

HTML

CSS (custom modern UI)

JavaScript (Fetch API)

Deployed on Vercel

Backend

Python

FastAPI

Pydantic AI (Agent orchestration & validation)

OpenRouter (LLM provider)

Deployed on Render


🧩 Architecture Overview
Frontend (Vercel)
   |
   |  POST /analyze
   v
Backend (FastAPI + Pydantic AI)
   |
   |  OpenRouter LLM
   v
Structured AI Response


⚙️ Key Features

End-to-end live deployment

Structured AI outputs using Pydantic models

Robust backend error handling

Frontend retry handling for cold starts

Clean UI with good typography and spacing

Real-world user flow (form → AI → results)


🚀 How to Run Locally (Optional)
Backend
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload

Create a .env file:

OPENROUTER_API_KEY=your_api_key_here

Frontend
Open frontend/index.html in a browser


📝 Notes on Deployment

Backend is deployed on Render free tier, which may sleep after inactivity.

The frontend includes retry logic to handle backend cold starts gracefully.

This behavior is expected and handled professionally in the application.

👨‍💻 Author
Sivaram Vinod


⭐ Final Note
This project demonstrates:

Practical use of Generative AI agents

Clean full-stack architecture

Real-world deployment considerations

Thoughtful UX and error handling

