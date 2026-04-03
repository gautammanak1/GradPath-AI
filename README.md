# GradPath AI

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Python-Flask-3776AB?logo=python&logoColor=white)](https://flask.palletsprojects.com/)
[![Fetch.ai](https://img.shields.io/badge/Fetch.ai-uAgents-4B32C3)](https://fetch.ai/)

AI-powered career guidance platform that helps students and graduates transition from academia to industry with personalized job search, resume analysis, mentorship, and an AI chatbot — built on Fetch.ai's uAgents framework.

## Features

- **Job Finder** — Discover opportunities matching your skills, preferences, and location with AI-powered recommendations
- **Resume Analyzer** — Get actionable suggestions to optimize your resume for industry standards
- **AI Chatbot (DishaBot)** — 24/7 career assistant for job application guidance and real-time advice
- **Mentor Matching** — Connect with experienced professionals aligned to your career goals
- **Job Posting** — Employers can post jobs directly on the platform for job seekers to discover
- **Notification Agent** — Stay updated on new opportunities, deadlines, and career events

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, Vite, Tailwind CSS, Headless UI, Heroicons, Font Awesome |
| **Backend** | Python, Flask, Quart, Gunicorn |
| **AI / Agents** | Fetch.ai uAgents framework |
| **Auth & Database** | Firebase Authentication, Firestore |
| **Communication** | EmailJS, Nodemailer |

## Project Structure

```
GradPath-AI/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chatbot/        # DishaBot AI assistant
│   │   │   ├── Mentor/         # Mentor matching UI
│   │   │   ├── Pages/          # Main page views
│   │   │   ├── hero/           # Landing page sections
│   │   │   └── job/            # Job search components
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── agents/                 # Fetch.ai uAgents
│   │   ├── chatbot.py
│   │   ├── job_agent.py
│   │   ├── mentor.py
│   │   └── resume.py
│   ├── app.py                  # Flask API server
│   └── requirements.txt
└── readme.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.9+
- Firebase project with Firestore and Authentication enabled

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
FIREBASE_CREDENTIALS=path/to/serviceAccountKey.json
```

Configure Firebase in `frontend/src/components/firebaseConfig.js` with your project credentials.

## License

This project is open source and available under the [MIT License](LICENSE).
