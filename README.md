# IPQuest: Interactive Intellectual Property Education Platform

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## 📚 Overview

IPQuest is an interactive education platform designed to teach intellectual property concepts through engaging gameplay and comprehensive learning resources. The platform makes complex IP concepts accessible through gamification, interactive quests, and a comprehensive resource library.

## ✨ Features

- **Interactive Games**:
  - **IP Quest**: Navigate quests to learn about patents, trademarks, and copyright
  - **IP Defender**: Tower defense-style game teaching IP protection strategies
  - **Innovation Tycoon**: Business simulation focusing on strategic IP management
  
- **Comprehensive Library**:
  - Detailed resources on patents, trademarks, and copyright
  - Categorized learning materials for different experience levels
  - Searchable database of IP information
  
- **User Progress Tracking**:
  - Save game progress across sessions
  - Track learning achievements and milestones
  - Personalized dashboard experience

## 🛠️ Technology Stack

### Frontend
- React.js
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

### Backend
- PHP
- MySQL database

### Development Tools
- Vite.js for frontend build tooling
- ESLint for code linting

## 📁 Project Structure
```
ipquest/
├── .gitignore
├── LICENSE
├── README.md
├── backend/
│   ├── contact.php
│   ├── index.php
│   ├── load-progress.php
│   ├── login.php
│   ├── register.php
│   ├── save-progress.php
│   ├── users.json
│   ├── database/
│   │   └── setup.sql
│   └── includes/
│       └── db-connect.php
└── frontend/
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── vite-env.d.ts
        ├── assets/
        │   ├── icons/
        │   └── imgs/
        ├── components/
        └── screens/
            ├── Contact/
            ├── Dashboard/
            ├── GameModules/
            ├── Homepage/
            ├── Legal/
            └── Library/
```