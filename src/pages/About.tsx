import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="max-w-3xl mx-auto p-8 glass card-shadow rounded-2xl">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]">
          About Our Adaptive Quiz
        </h1>
        
        <div className="prose prose-lg">
          <p className="text-blue-800/80 mb-6">
            Our adaptive quiz system is designed to provide a personalized learning experience
            by adjusting question difficulty based on your performance. Starting with medium-difficulty
            questions, the system analyzes your answers and adapts accordingly.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
            How It Works
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-800/80">
            <li>Questions adapt to your knowledge level</li>
            <li>Immediate feedback after each answer</li>
            <li>Detailed explanations for better understanding</li>
            <li>Progress tracking throughout the quiz</li>
            <li>Final score with performance analysis</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
            Technologies Used
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-800/80">
            <li>React for the user interface</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>Custom hooks for state management</li>
          </ul>

         <div className="mt-12 text-center">
  <Link
    to="/quiz"
    className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl
              hover:bg-blue-700 transform hover:scale-105 transition-all duration-200
              shadow-[0_8px_16px_rgba(59,130,246,0.5)] hover:shadow-[0_12px_20px_rgba(59,130,246,0.6)]"
  >
    Try the Quiz
  </Link>
  <div className="mt-4 flex flex-col items-center">
    <b className="text-xl font-semibold text-red-400 animate-pulse transition-all duration-500 hover:scale-110">
       By : Emmadisetty Kowshik
    </b>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default About;