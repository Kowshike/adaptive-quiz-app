import React from 'react';
import QuizContainer from '../components/QuizContainer';

const Quiz = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2">Adaptive Quiz Challenge</h1>
        <p className="text-gray-600">
          Test your knowledge with a quiz that adapts to your performance!
        </p>
      </header>
      
      <main className="w-full flex justify-center">
        <QuizContainer />
      </main>
      
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>The quiz adapts its difficulty based on your performance.</p>
        <p>Answer correctly to get harder questions, incorrectly to get easier ones.</p>
      </footer>
    </div>
  );
};

export default Quiz;