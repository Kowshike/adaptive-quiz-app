import { Question } from '../types';

const questions: Question[] = [
  // HTML Questions (Easy)
  {
    id: 1,
    text: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Machine Language",
      "Hyperlink and Text Management Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
    difficulty: "easy",
    explanation:
      "HTML is the standard markup language for creating web pages.",
    topic: "HTML",
  },
  {
    id: 2,
    text: "Which HTML tag is used to define the structure of an HTML document?",
    options: ["<body>", "<head>", "<html>", "<title>"],
    correctAnswer: "<html>",
    difficulty: "easy",
    explanation:
      "The <html> tag is the root element and defines the entire HTML document.",
    topic: "HTML",
  },
  {
    id: 3,
    text: "Which HTML tag is used to insert an image?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    correctAnswer: "<img>",
    difficulty: "easy",
    explanation: "The <img> tag is used to embed an image in an HTML page.",
    topic: "HTML",
  },
  {
    id: 4,
    text: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<url>", "<href>"],
    correctAnswer: "<a>",
    difficulty: "easy",
    explanation: "The <a> tag defines a hyperlink.",
    topic: "HTML",
  },

  // CSS Questions (Medium)
  {
    id: 5,
    text: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Syntax",
      "Colorful Style Script",
    ],
    correctAnswer: "Cascading Style Sheets",
    difficulty: "medium",
    explanation:
      "CSS is used to style HTML elements.",
    topic: "CSS",
  },
  {
    id: 6,
    text: "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "foreground-color", "color", "font-color"],
    correctAnswer: "color",
    difficulty: "medium",
    explanation:
      "The 'color' property specifies the color of the text.",
    topic: "CSS",
  },
  {
    id: 7,
    text: "Which CSS property is used to control the spacing between lines of text?",
    options: [
      "line-spacing",
      "text-spacing",
      "line-height",
      "vertical-spacing",
    ],
    correctAnswer: "line-height",
    difficulty: "medium",
    explanation:
      "The 'line-height' property sets the distance between lines of text.",
    topic: "CSS",
  },
  {
    id: 8,
    text: "Which CSS property is used to make the text bold?",
    options: [
      "font-weight: bold",
      "text-style: bold",
      "font-style: bold",
      "text-weight: bold",
    ],
    correctAnswer: "font-weight: bold",
    difficulty: "medium",
    explanation:
      "The 'font-weight' property with a value of 'bold' makes the text bold.",
    topic: "CSS",
  },

  // JavaScript Questions (Hard)
  {
    id: 9,
    text: "What is the output of `typeof null` in JavaScript?",
    options: ["null", "object", "undefined", "number"],
    correctAnswer: "object",
    difficulty: "hard",
    explanation:
      "In JavaScript, `typeof null` returns 'object', which is a known anomaly.",
    topic: "JavaScript",
  },
  {
    id: 10,
    text: "Which method is used to add an element to the end of an array?",
    options: ["add()", "push()", "append()", "insertEnd()"],
    correctAnswer: "push()",
    difficulty: "hard",
    explanation:
      "The 'push()' method adds one or more elements to the end of an array and returns the new length of the array.",
    topic: "JavaScript",
  },
  {
    id: 11,
    text: "What is the output of `[1, 2, 3] + [4, 5, 6]` in JavaScript?",
    options: ["[1, 2, 3, 4, 5, 6]", "[5, 7, 9]", "15", "1,2,34,5,6"],
    correctAnswer: "1,2,34,5,6",
    difficulty: "hard",
    explanation:
      "The + operator concatenates arrays into strings, resulting in comma-separated values.",
    topic: "JavaScript",
  },
  {
    id: 12,
    text:
      "What is the result of the expression: `(false || true) && (true && false)`?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "false",
    difficulty: "hard",
    explanation:
      "The expression evaluates as follows: (false || true) is true, (true && false) is false, and true && false is false.",
    topic: "JavaScript",
  },
];

export default questions;
