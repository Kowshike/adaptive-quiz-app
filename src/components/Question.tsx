import React from 'react';
import { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  userAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  showFeedback: boolean;
}

const Question: React.FC<QuestionProps> = ({ 
  question, 
  userAnswer, 
  onSelectAnswer,
  showFeedback
}) => {
  const isAnswered = userAnswer !== null;
  
  const getOptionClass = (option: string) => {
    if (!showFeedback || !isAnswered) {
      return userAnswer === option 
        ? 'border-blue-500 bg-blue-50' 
        : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50';
    }
    
    if (option === question.correctAnswer) {
      return 'border-green-500 bg-green-50';
    }
    
    if (userAnswer === option && option !== question.correctAnswer) {
      return 'border-red-500 bg-red-50';
    }
    
    return 'border-gray-300';
  };
  
  return (
    <div className="w-full transition-opacity duration-300">
      <h2 className="text-xl font-semibold mb-6">{question.text}</h2>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ${getOptionClass(option)}`}
            onClick={() => !isAnswered && onSelectAnswer(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
      
      {showFeedback && isAnswered && (
        <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200">
          <div className={`font-medium ${userAnswer === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
            {userAnswer === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
          </div>
          
          {question.explanation && (
            <div className="mt-2 text-gray-700">
              <p className="font-medium">Explanation:</p>
              <p>{question.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;