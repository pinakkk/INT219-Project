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
## 🚀 Installation & Setup

# Prerequisites
- Node.js (v14+)
- PHP (v7.4+)
- MySQL

# Frontend Setup

1. Navigate to the frontend directory:

``` 
cd ipquest/frontend
```

2. Install dependencies:

``` 
npm install
```

3. Start the development server:

```
npm run dev
```

# Backend Setup
1. Set up a local server environment (XAMPP, WAMP, or similar)
2. Configure your database using the SQL setup file in setup.sql
3. Update database connection settings in backend/includes/db-connect.php

## 💻 Usage
1. Register for a new account or login with existing credentials
2. Navigate to the Dashboard to access the interactive games and learning resources
3. Explore the IP Library to learn about patents, trademarks, and copyrights
4. Track your progress through the learning materials and games

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## 📄 License
Copyright 2023 IPQuest

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Made By Pinak