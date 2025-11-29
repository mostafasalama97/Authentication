# 🔒 Secure JWT Authentication with Refresh Token Rotation

A production-ready **Node.js + Express** backend demonstrating a **secure authentication system** using:
- **JWT (Access Tokens)** for stateless authentication
- **Refresh Tokens** stored in **HTTP-only cookies**
- **Token Rotation** to prevent replay attacks
- **Password hashing**, **token revocation**, and **secure cookie practices**

Perfect for APIs, SPAs, or mobile backends where security and user experience must coexist.

---

## 🔑 Core Security Features

✅ **Short-lived Access Tokens** (15 minutes)  
✅ **Long-lived Refresh Tokens** (7 days) stored in **HTTP-only, Secure, SameSite=Strict cookies**  
✅ **Token Rotation**: Every refresh invalidates the old refresh token  
✅ **Refresh Token Hashing**: Raw tokens never stored in DB (only SHA-256 hash)  
✅ **Full Logout**: Revokes refresh token + clears cookie  
✅ **CSRF & XSS Protection** via cookie flags  
✅ **Separate secrets** for access & refresh tokens  
✅ **IP & User-Agent tracking** for suspicious activity detection  

---

## 🛠️ Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Auth**: `jsonwebtoken`, `bcryptjs`
- **Security**: `cookie-parser`, `crypto` (built-in)
- **Dev Tools**: `nodemon`, `dotenv`

---

## 📁 Project Structure

```bash
.
├── server.js                 # Entry point
├── .env.example              # Environment variables template
├── config/
│   └── db.js                 # MongoDB connection
├── middleware/
│   └── auth.js               # JWT verification middleware
├── models/
│   ├── user.js               # User schema
│   └── refreshToken.js       # Refresh token schema (with rotation fields)
├── routes/
│   ├── auth.js               # /register, /login, /refresh, /logout
│   └── profile.js            # Protected route example
└── utils/
    └── tokens.js             # Token helpers (signing, hashing, rotation)
```

# 🚀 Getting Started
## 1. Clone the repo
```
git clone https://github.com/your-username/jwt-refresh-token-rotation.git
```
## 2. Install dependencies
```
npm install
```
## 3. Set up environment variables
### Create a .env file (use .env.example as a template):
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth
JWT_SECRET=your_strong_jwt_secret_here
REFRESH_TOKEN_SECRET=your_strong_refresh_secret_here
```
## 4. Run the server
```
npm run dev  # Uses nodemon for auto-restart
```
