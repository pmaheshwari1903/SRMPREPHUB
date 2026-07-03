# SRMPREPHUB

SRMPREPHUB is a professional AI-powered interview preparation platform designed to help candidates practice, evaluate, and improve their interviewing skills through realistic AI simulations and structured feedback.

## Repository Structure

This project is organized as a monorepo containing a frontend `client` and a Node.js `server`.

```text
SRMPREPHUB/
├── client/       # React (Vite) frontend application
└── server/       # Node.js + Express backend application
```

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)

---

## ⚙️ Environment Configuration

You must configure the environment variables for both the client and server before running the application.

### 1. Server Configuration
Navigate to the `server` directory and create a `.env` file (you can use `.env.example` as a reference):
```bash
cd server
copy .env.example .env
```
Ensure you fill out the critical variables such as your Database Connection String (MongoDB), Groq API Key (for AI), and Razorpay credentials.

### 2. Client Configuration
Navigate to the `client` directory and create its `.env` file:
```bash
cd ../client
copy .env.example .env
```
Ensure you provide the `VITE_API_URL` (usually `http://localhost:5000` for local development) and any Firebase configuration variables required for authentication.

---

## 🚀 How to Run the Project Locally

Follow these precise steps to get the application running on your local machine. You will need to open **two separate terminal windows**.

### Step 1: Install Dependencies

First, install the required packages for both the backend and frontend.

**In Terminal 1 (Backend):**
```bash
cd server
npm install
```

**In Terminal 2 (Frontend):**
```bash
cd client
npm install
```

### Step 2: Start the Development Servers

Once dependencies are installed and `.env` files are configured, start the servers.

**In Terminal 1 (Start the Backend):**
```bash
# Ensure you are still in the /server directory
npm run dev
# Note: if `dev` doesn't exist in your package.json, try `npm start`
```
*The backend API should now be running (commonly on port 5000, e.g., `http://localhost:5000`).*

**In Terminal 2 (Start the Frontend):**
```bash
# Ensure you are still in the /client directory
npm run dev
```
*Vite will start the frontend. It usually runs on `http://localhost:5173`. Open this URL in your web browser to access the SRMPREPHUB application.*

---

## 💻 Technology Stack

**Frontend (`client`)**
- React.js (Bootstrapped with Vite)
- Redux (State Management)
- CSS / TailwindCSS (Styling)
- Firebase (Authentication)

**Backend (`server`)**
- Node.js & Express.js
- MongoDB / Mongoose (Database)
- Groq API (AI Interview Logic)
- Razorpay API (Payment Processing)

---

## 🤝 Contribution Guidelines
1. Create a new branch for each new feature (`git checkout -b feature/your-feature`).
2. Make your changes and test them locally.
3. Commit your changes with clear, descriptive messages (`git commit -m "Add new feature"`).
4. Push to your branch and create a Pull Request on GitHub.
