# 🚀 PrepWise – AI Mock Interview Platform

PrepWise is a full-stack web application designed to simulate real interview experiences using AI.
It helps developers practice technical interviews, improve their answers, and gain confidence.

---

## ✨ Features

* 🎯 Simulated technical & mixed interviews
* 🎤 Voice-based interview experience (AI-ready)
* 🧠 AI-powered feedback system *(architecture ready)*
* 📊 Interview tracking & history
* ⚡ Clean and modern UI/UX
* 🔐 Authentication & backend powered by Firebase

---

## 🧪 Demo

> ⚠️ The AI interviewer is not fully active yet (see note below)

👉 Live Demo: *[(https://voice-interview-hazel.vercel.app/)]*
👉 ![Home](./screenshots/Screenshot (192).png)
![Interviews](./screenshots/Screenshot (193).png)
![Interviews](./screenshots/Screenshot (194).png)
![Interviews](./screenshots/Screenshot (195).png)


---

## 🛠️ Tech Stack

**Frontend**

* Next.js 16
* React 19
* TypeScript
* TailwindCSS + shadcn/ui

**Backend & Services**

* Firebase (Auth + Database)
* Firebase Admin

**AI & Voice (Prepared)**

* AI SDK
* Google AI SDK
* Vapi (voice AI)

---

## ⚠️ Important Note About AI

The AI interviewer and feedback system are **fully implemented at the architectural level**, but not currently active.

This is because most AI APIs (LLMs & voice services) require paid access, and I currently don’t have the budget to enable them.

However, the project is built to allow **seamless integration** once API access is available.

---

## 📂 Project Structure

```
app/
 ├── (auth)/
 ├── (root)/
 │    ├── interview/
 │    ├── page.tsx
 │
components/
lib/
firebase/
types/
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/prepwise.git
cd prepwise
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

---

### 4. Run the project

```bash
npm run dev
```

---

## 🚀 Deployment

This project is fully deployable on **Vercel**.

Make sure to add the environment variables in Vercel dashboard before deploying.

---

## 🎯 Future Improvements

* 🤖 Enable AI interviewer (LLM integration)
* 🎙️ Real-time voice conversation
* 📈 Advanced feedback & scoring system
* 🧑‍💼 Role-specific interview paths
* 🌍 Multi-language support

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome!

---

## 📬 Contact

If you’d like to collaborate or give feedback, feel free to reach out.

---

## ⭐ If you like this project

Give it a star ⭐ — it really helps!
