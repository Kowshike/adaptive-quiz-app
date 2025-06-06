# adaptive-quiz-app
# Adaptive Quiz Web Application

## Overview

This project is a web application for an adaptive quiz that dynamically adjusts the difficulty of questions based on the user's performance. The quiz is designed to provide a personalized and engaging learning experience by tailoring the questions to the user's knowledge level.

## Features

* **Dynamic Difficulty Adjustment:** 
The quiz adapts to the user's performance, increasing difficulty after consecutive correct answers and decreasing it after incorrect answers.
* **Question Bank:** 
The application includes a structured dataset of questions with varying difficulty levels (easy, medium, hard) and topics.
* **User-Friendly Interface:**
    * Clear presentation of questions.
    * Progress tracking.
    * Immediate feedback on answers.
    * Visual indication of the current difficulty level.
* **Results Screen:** Displays the final score and offers an option to retry the quiz.
* **Responsive Design:** The application is designed to work on various devices, providing a consistent experience across desktops, tablets, and smartphones.
* **Modern UI:** Attractive design with smooth animations, subtle effects, and a clean color scheme.

## Tech Stack

* **Frontend:**
    * React
    * React Router
    * Framer Motion
    * Tailwind CSS
    * Lucide React Icons
* **JavaScript**
* **Vite**

## Project Structure

Directory structure:
└── kowshike-adaptive-quiz-app/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── json/
    │   └── config.json
    └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── components/
        │   ├── DifficultyIndicator.tsx
        │   ├── Navbar.tsx
        │   ├── ProgressBar.tsx
        │   ├── Question.tsx
        │   ├── QuizContainer.tsx
        │   └── ResultsScreen.tsx
        ├── data/
        │   └── questionData.ts
        ├── hooks/
        │   └── useQuizState.tsx
        ├── pages/
        │   ├── About.tsx
        │   ├── Home.tsx
        │   └── Quiz.tsx
        └── types/
            └── index.ts

## Setup Instructions

1.  **Clone the Repository:**

    ```bash
    git clone <repository_url>
    cd adaptive-quiz-app
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Run the Application:**

    ```bash
    npm run dev
    ```

    The application will be accessible at `http://localhost:<port>` (the port number will be displayed in the console).

## How to Use the Application

1.  **Home Page:** The home page provides an introduction to the adaptive quiz and a button to start the quiz.
2.  **Quiz Page:**
    * The quiz presents questions one at a time, adjusting the difficulty dynamically.
    * Users select an answer, receive immediate feedback, and proceed to the next question.
    * The progress bar indicates the user's advancement through the quiz.
    * The current difficulty level is displayed.
3.  **Results Page:** Upon completing the quiz, the results page displays the user's score, a summary of their performance, and an option to try again.
4.  **About Page:** The about page provides information about the project and the technologies used.

## Adaptive Logic Explanation

The core of the application is the adaptive logic implemented in the `useQuizState.tsx` hook. Here's a simplified explanation:

1.  **Initial State:** The quiz starts with a set of medium-difficulty questions.
2.  **Question Selection:** Questions are selected based on the current difficulty level.
3.  **Answer Evaluation:** The application tracks whether the user answers correctly or incorrectly.
4.  **Difficulty Adjustment:**
    * If the user answers a certain number of consecutive questions correctly, the difficulty level is increased (e.g., from medium to hard).
    * If the user answers a question incorrectly, the difficulty level is decreased (e.g., from medium to easy).
5.  **Boundary Conditions:** The difficulty level stays within the defined boundaries (easy, medium, hard).

This adaptive mechanism ensures that the quiz is challenging but not overwhelming, providing a personalized learning experience.

## Additional Notes

* The application uses React Router for navigation between pages.
* Tailwind CSS is used for styling, providing a consistent and modern look.
* Framer Motion is used to add smooth animations and transitions.
* The `questions` array in `questionData.ts` serves as the question bank, which can be extended.

Feel free to contribute to this project by adding more features, improving the UI, or optimizing the adaptive logic.
