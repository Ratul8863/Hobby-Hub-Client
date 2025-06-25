# 🎯 HobbyHub: A Local Hobby Group Organizer

**Live Site:** [https://hobyhub-by-ratul.web.app](https://hobyhub-by-ratul.web.app)

**HobbyHub** is a full-stack web application where users can discover, join, and create local hobby-based groups such as book clubs, hiking teams, and painting circles. It promotes social interaction through shared interests and helps people form real-world connections.

---
![Project Screenshot](https://i.ibb.co/BVDHtZZ7/Screenshot-2025-06-25-144117.png)

---

## 🚀 Features

- 🔐 Authentication (Email/Password + Google Login)
- 📆 Create and Manage Hobby Groups
- 👥 Join and View Group Details
- 🗂️ Filter My Groups (Only Your Created Ones)
- 🌓 Dark/Light Theme Toggle
- 🧩 Smooth Animations with Lottie and Awesome Reveal
- 🛡️ Protected Routes for Private Pages
- ⚠️ 404 Not Found Page + Loading Spinner
- 📱 Responsive Design for Mobile, Tablet & Desktop
- 🔒 JWT-based secure route access (HttpOnly Cookie)

---

## 🛠️ Tech Stack

### 🔹 Client:
- React.js (Vite)
- Firebase Authentication
- Tailwind CSS + DaisyUI
- React Router DOM
- Axios
- Lottie React
- React Awesome Reveal
- React Tooltip
- SweetAlert2 / React Toastify

### 🔹 Server:
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv
- JSON Web Token (JWT)
- Cookie-parser

---

- Step 1: Clone the client repository
  --git clone https://github.com/yourusername/hobbyhub-client.git

- Step 2: Navigate into the project folder
--cd hobbyhub-client
  
- Step 3: Install dependencies
npm install

- Step 4: Create a `.env` file with the following variables
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_appId


- Step 5: Run the development server
npm run dev


## 📦 Dependencies (Client)

```bash
axios
firebase
react-router-dom
react-icons
sweetalert2
react-toastify
lottie-react
react-awesome-reveal
react-tooltip
