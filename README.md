# MERN JWT Demo

A simple **MERN (MongoDB, Express, React, Node.js)** demo project with **JWT authentication**. Includes user signup, login, and protected routes using token-based authentication.

## Features
- User registration & login
- JWT-based authentication & protected routes
- Password hashing with bcrypt
- React frontend (Axios) + Express backend

## Quick Start
```bash
# clone
git clone https://github.com/yourusername/mern_jwt_demo.git
cd mern_jwt_demo

# backend
cd server
npm install
# create .env (see below)
npm run dev

# frontend
cd ../client
npm install
npm start
