# 📋 Appointment Management System - Backend API

> A powerful and simple RESTful API for managing doctor appointments built with Node.js, Express, and SQLite.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-3.x-lightgrey.svg)](https://www.sqlite.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Overview

This is a robust backend API for managing doctor appointments. Built with a clean, modular architecture following best practices. Perfect for clinics, medical centers, or any business that needs appointment scheduling.

## ✨ Features

- **Full CRUD Operations**: Create, Read, Update, Delete appointments
- **Doctor Management**: Manage doctor profiles and specialties
- **Search & Filter**: Search appointments by name or phone
- **Statistics Dashboard**: Get appointment statistics
- **RESTful API**: Clean and consistent API design
- **Auto-generated Documentation**: Swagger/OpenAPI documentation
- **SQLite Database**: Lightweight, no setup required
- **CORS Enabled**: Ready for frontend integration
- **Error Handling**: Comprehensive error handling
- **Modular Architecture**: Clean separation of concerns

## 🛠 Technologies

| Technology | Version | Description                   |
| ---------- | ------- | ----------------------------- |
| Node.js    | 18+     | JavaScript runtime            |
| Express    | 4.18+   | Web framework                 |
| SQLite3    | 5.1+    | Database                      |
| SQLite     | 5.1+    | Database driver               |
| Swagger    | 6.2+    | API documentation             |
| Nodemon    | 3.0+    | Development auto-reload       |
| CORS       | 2.8+    | Cross-origin resource sharing |

## 📁 Project Structure

backend/
├── src/
│ ├── config/
│ │ └── database.js # Database configuration & connection
│ ├── models/
│ │ ├── Appointment.js # Appointment model
│ │ └── Doctor.js # Doctor model
│ ├── controllers/
│ │ ├── appointmentController.js # Appointment logic
│ │ ├── doctorController.js # Doctor logic
│ │ └── adminController.js # Admin logic
│ ├── routes/
│ │ ├── appointmentRoutes.js # Appointment endpoints
│ │ ├── doctorRoutes.js # Doctor endpoints
│ │ └── adminRoutes.js # Admin endpoints
│ ├── middleware/
│ │ └── errorHandler.js # Error handling middleware
│ └── app.js # Express app configuration
├── seed/
│ └── seed.js # Database seeding
├── .env.example # Environment variables template
├── .gitignore # Git ignore rules
├── package.json # Dependencies & scripts
├── server.js # Application entry point
└── README.md # Documentation

## 🔧 Installation

### Prerequisites

- Node.js 18 or higher
- npm 6 or higher

### Steps

1. **Clone the repository**

```
git clone https://github.com/your-username/appointment-backend.git
cd appointment-backend
```

npm install
cp .env.example .env
npm run seed
npm run dev

⚙️ Configuration
Environment Variables
Variable Description Default
PORT Server port 8000
DB_PATH Database file path ./appointments.db
Available Scripts
Script Description
npm run dev Start development server with auto-reload
npm start Start production server
npm run seed Seed database with initial doctors

🔗 API Endpoints
Doctors
Method Endpoint Description
GET /api/doctors Get all doctors
GET /api/doctors/:id Get doctor by ID
Appointments
Method Endpoint Description
POST /api/appointments Create a new appointment
GET /api/appointments Get all appointments
GET /api/appointments/:id Get appointment by ID
GET /api/appointments/stats Get appointment statistics
PUT /api/appointments/:id Update appointment
DELETE /api/appointments/:id Delete appointment
Admin
Method Endpoint Description
GET /api/admin/stats Admin dashboard statistics

📊 Database Schema
Doctors Table
Column Type Description
id INTEGER Primary key (auto-increment)
name TEXT Doctor's full name
title TEXT Professional title
experience TEXT Years of experience
education TEXT Educational background
specialization TEXT Area of expertise
description TEXT Detailed description
Appointments Table
Column Type Description
id INTEGER Primary key (auto-increment)
full_name TEXT Patient's full name
phone TEXT Patient's phone number
date TEXT Appointment date
description TEXT Appointment description
doctor_id INTEGER Foreign key to doctors table
created_at DATETIME Creation timestamp

🚀 Deployment
Deploy to Render
Push your code to GitHub

Go to Render

Click "New +" → "Web Service"

Connect your GitHub repository

Configure:

Build Command: npm install

Start Command: npm start

Environment Variables: Add from .env.example

Click "Create Web Service"

Deploy to Heroku

# Install Heroku CLI

brew install heroku/brew/heroku

# Login to Heroku

heroku login

# Create app

heroku create appointment-backend

# Deploy

git push heroku main
Deploy to Vercel (Serverless)

# Install Vercel CLI

npm i -g vercel

# Deploy

vercel
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

Coding Standards
Use ESLint for code quality

Follow the existing project structure

Write clean, readable code

Add comments for complex logic

Update documentation accordingly

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Your Name

GitHub: @your-username

Email: your.email@example.com

🙏 Acknowledgments
Express.js community

SQLite team

All contributors and supporters
