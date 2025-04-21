#  SparkDive

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-In%20Development-yellow)]()

**SparkDive** is a modern personality-based recommendation tool that helps users discover potential careers and hobbies based on their preferences and natural traits.

Whether you're a student, a curious explorer, or someone in a career transition — SparkDive helps you dive into your spark.

---

##  Features

-  **Personality Quiz** – 5 thoughtful questions to understand you
-  **Career Suggestions** – Based on dominant personality types
-  **Hobby Ideas** – Creative and adventurous hobbies tailored to you
-  **Resources** – Curated learning platforms to get started
-  **Local Storage** – Save quiz data with no account needed
-  **Fully Responsive** – Clean, modern UI powered by Tailwind CSS
-  **Simple & Private** – No login or data tracking

---


##  Technologies Used

| Technology     | Purpose                               |
|----------------|----------------------------------------|
| React (Vite)   | Component-based frontend               |
| Tailwind CSS   | Utility-first styling framework        |
| React Router   | Page routing                           |
| Local Storage  | Save and retrieve quiz responses       |
| Vanilla JSON   | Dynamic data for result suggestions    |

---

##  Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (or yarn)

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/sparkdive.git
cd sparkdive

# Install dependencies
npm install

# Start the dev server
npm run dev
```

 ## Usage Instructions

- Go to the Home page and click Start Quiz
- Answer 5 questions by selecting the option that best describes you
- Click Submit to view your personality-based results

**Explore:**
-  Career suggestions
-  Hobby ideas
-  Learning resources

---

 **How It Works**

- Answers are scored under 4 traits: analytical, creative, helper, adventurous
- The dominant trait determines the result
- Matching data is pulled from `/public/data.json`
- Results include:
  - Careers
  - Hobbies
  - Resources


---

 **Folder Structure**
sparkdive/
├── public/
│   └── data.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   │   ├── Result.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── README.md

---
**Acknowledgments**
- React
- Tailwind CSS
- Vite
- Heroicons
- Inspired by the idea of helping people align with their passions through technology.

---

 **License**

This project is open-source under the MIT License.

---
**Author**

**Lekhana Dinesh**  
📍 **Bangalore, India**  
[GitHub](https://github.com/Lekhana-Dinesh)
