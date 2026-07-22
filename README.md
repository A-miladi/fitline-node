# 📋 Appointment Management System - Backend API

> A powerful and simple RESTful API for managing doctor appointments built with Node.js, Express, and SQLite.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-3.x-lightgrey.svg)](https://www.sqlite.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [API Documentation](#api-documentation)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [HTTP Status Codes](#http-status-codes)
- [Response Examples](#response-examples)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🚀 Overview

This is a robust backend API for managing doctor appointments. Built with a clean, modular architecture following best practices. Perfect for clinics, medical centers, or any business that needs appointment scheduling.

The API provides full CRUD operations for appointments, doctor management, search functionality, and statistics dashboard - all with auto-generated Swagger documentation.

---

## ✨ Features

| Feature              | Status | Description                                |
| -------------------- | ------ | ------------------------------------------ |
| Create Appointment   | ✅     | Add new appointments with doctor selection |
| Read Appointments    | ✅     | List all appointments with search/filter   |
| Update Appointment   | ✅     | Edit appointment details                   |
| Delete Appointment   | ✅     | Remove appointments from system            |
| Doctor Management    | ✅     | Manage doctor profiles and specialties     |
| Search & Filter      | ✅     | Search appointments by name or phone       |
| Statistics Dashboard | ✅     | Get appointment analytics and insights     |
| API Documentation    | ✅     | Auto-generated Swagger/OpenAPI docs        |
| Database Seeding     | ✅     | Initial data setup with sample doctors     |
| CORS Support         | ✅     | Ready for frontend integration             |
| Error Handling       | ✅     | Comprehensive error handling middleware    |
| Modular Architecture | ✅     | Clean separation of concerns (MVC)         |
| Authentication       | ⏳     | Coming soon                                |
| User Roles           | ⏳     | Coming soon                                |
| Email Notifications  | ⏳     | Coming soon                                |

---

## 🛠 Technologies

| Technology | Version | Description                              |
| ---------- | ------- | ---------------------------------------- |
| Node.js    | 18+     | JavaScript runtime environment           |
| Express    | 4.18+   | Web framework for Node.js                |
| SQLite3    | 5.1+    | Lightweight SQL database engine          |
| SQLite     | 5.1+    | SQLite database driver                   |
| Swagger    | 6.2+    | API documentation generator              |
| Nodemon    | 3.0+    | Development auto-reload tool             |
| CORS       | 2.8+    | Cross-origin resource sharing middleware |
| Dotenv     | 16.3+   | Environment variables loader             |

---

## 🔧 Prerequisites

| Requirement | Version   | Check Command    |
| ----------- | --------- | ---------------- |
| Node.js     | >= 18.0.0 | `node --version` |
| npm         | >= 6.0.0  | `npm --version`  |
| Git         | >= 2.0.0  | `git --version`  |

---

## 📥 Installation

| Step | Command                                                  | Description                        |
| ---- | -------------------------------------------------------- | ---------------------------------- |
| 1    | `git clone https://github.com/A-miladi/Fitline-node.git` | Clone repository                   |
| 2    | `cd Fitline-node`                                        | Navigate to project                |
| 3    | `npm install`                                            | Install dependencies               |
| 4    | `cp .env.example .env`                                   | Setup environment variables        |
| 5    | `npm run seed`                                           | Seed database with initial doctors |
| 6    | `npm run dev`                                            | Start development server           |

---

## ⚙️ Configuration

### Environment Variables

| Variable  | Description        | Default             | Required |
| --------- | ------------------ | ------------------- | -------- |
| `PORT`    | Server port number | `8000`              | No       |
| `DB_PATH` | Database file path | `./appointments.db` | No       |

### Example `.env` file:

```env
PORT=8000
DB_PATH=./appointments.db


📁 Project Structure
Fitline-node/
├── src/
│   ├── config/
│   │   └── database.js          # Database connection & configuration
│   ├── models/
│   │   ├── Appointment.js       # Appointment data model
│   │   └── Doctor.js           # Doctor data model
│   ├── controllers/
│   │   ├── appointmentController.js  # Appointment business logic
│   │   ├── doctorController.js       # Doctor business logic
│   │   └── adminController.js        # Admin business logic
│   ├── routes/
│   │   ├── appointmentRoutes.js      # Appointment API routes
│   │   ├── doctorRoutes.js           # Doctor API routes
│   │   └── adminRoutes.js            # Admin API routes
│   ├── middleware/
│   │   └── errorHandler.js           # Global error handling
│   └── app.js                        # Express application setup
├── seed/
│   └── seed.js                       # Database seeder
├── .env.example                       # Environment variables template
├── .gitignore                         # Git ignore rules
├── package.json                       # Dependencies & scripts
├── server.js                          # Application entry point
└── README.md                          # Project documentation
```
