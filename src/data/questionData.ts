import { Question } from '../types';

const questions: Question[] = [
  // Easy questions
  {
    id: 1,
    text: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    difficulty: "easy",
    explanation: "Paris is the capital and most populous city of France.",
    topic: "Geography"
  },
  {
    id: 2,
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
    difficulty: "easy",
    explanation: "2 + 2 = 4 is a basic addition in mathematics.",
    topic: "Mathematics"
  },
  {
    id: 3,
    text: "Which of these is a fruit?",
    options: ["Carrot", "Broccoli", "Apple", "Potato"],
    correctAnswer: "Apple",
    difficulty: "easy",
    explanation: "An apple is a fruit, while the others are vegetables.",
    topic: "Biology"
  },
  {
    id: 4,
    text: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: "Mercury",
    difficulty: "easy",
    explanation: "Mercury is the smallest and innermost planet in the Solar System.",
    topic: "Astronomy"
  },

  // Medium questions
  {
    id: 5,
    text: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
    difficulty: "medium",
    explanation: "The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1519.",
    topic: "Art"
  },
  {
    id: 6,
    text: "What is the chemical symbol for gold?",
    options: ["Go", "Gl", "Au", "Ag"],
    correctAnswer: "Au",
    difficulty: "medium",
    explanation: "The chemical symbol Au comes from the Latin word for gold, 'aurum'.",
    topic: "Chemistry"
  },
  {
    id: 7,
    text: "Which of these countries is NOT in Europe?",
    options: ["Portugal", "Sweden", "Thailand", "Italy"],
    correctAnswer: "Thailand",
    difficulty: "medium",
    explanation: "Thailand is located in Southeast Asia.",
    topic: "Geography"
  },
  {
    id: 8,
    text: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare",
    difficulty: "medium",
    explanation: "Romeo and Juliet is a tragedy written by William Shakespeare.",
    topic: "Literature"
  },

  // Hard questions
  {
    id: 9,
    text: "What is the speed of light in vacuum?",
    options: ["299,792,458 m/s", "300,000,000 m/s", "330 m/s", "150,000,000 m/s"],
    correctAnswer: "299,792,458 m/s",
    difficulty: "hard",
    explanation: "The speed of light in vacuum is exactly 299,792,458 meters per second.",
    topic: "Physics"
  },
  {
    id: 10,
    text: "Which algorithm has the worst time complexity?",
    options: ["Merge Sort", "Quick Sort (average case)", "Bubble Sort", "Binary Search"],
    correctAnswer: "Bubble Sort",
    difficulty: "hard",
    explanation: "Bubble Sort has a time complexity of O(n²), which is worse than the others mentioned.",
    topic: "Computer Science"
  },
  {
    id: 11,
    text: "Which element has the atomic number 92?",
    options: ["Uranium", "Plutonium", "Lead", "Thorium"],
    correctAnswer: "Uranium",
    difficulty: "hard",
    explanation: "Uranium is a chemical element with symbol U and atomic number 92.",
    topic: "Chemistry"
  },
  {
    id: 12,
    text: "In which year was the theory of general relativity published?",
    options: ["1905", "1915", "1925", "1935"],
    correctAnswer: "1915",
    difficulty: "hard",
    explanation: "Albert Einstein published the theory of general relativity in 1915.",
    topic: "Physics"
  }
];

export default questions;