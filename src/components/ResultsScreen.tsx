import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Question } from '../types';
import { Trophy, Target, Brain } from 'lucide-react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  userAnswers: (string | null)[];
  questions: Question[];
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  totalQuestions,
  userAnswers,
  questions,
  onRestart
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);
  
  useEffect(() => {
    if (percentage >= 70) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [percentage]);
  
  const getFeedback = () => {
    if (percentage >= 90) return "Excellent! You're a quiz master!";
    if (percentage >= 70) return "Great job! You know your stuff!";
    if (percentage >= 50) return "Good effort! Keep learning!";
    return "Keep practicing! You'll improve!";
  };
  
  const getScoreColorClass = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-blue-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto glass card-shadow rounded-xl overflow-hidden"
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
      <div className="p-8">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="flex items-center justify-center space-x-3 mb-6"
        >
          <Trophy className="w-8 h-8 text-yellow-500" />
          <h1 className="text-2xl font-bold text-center">Quiz Results</h1>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center mb-8"
        >
          <div className={`text-5xl font-bold ${getScoreColorClass()}`}>
            {score} / {totalQuestions}
          </div>
          <div className="text-xl mt-2">{percentage}%</div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-700"
          >
            {getFeedback()}
          </motion.div>
        </motion.div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Target className="w-6 h-6 mr-2" />
            Question Summary
          </h2>
          <div className="space-y-4">
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 glass rounded-lg"
              >
                <div className="font-medium">{index + 1}. {question.text}</div>
                <div className="mt-2 flex items-center">
                  <span className="font-medium mr-2">Your answer:</span>
                  <span className={`${userAnswers[index] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                    {userAnswers[index] || 'No answer'}
                  </span>
                </div>
                {userAnswers[index] !== question.correctAnswer && (
                  <div className="mt-1 text-green-600">
                    <span className="font-medium mr-2">Correct answer:</span>
                    {question.correctAnswer}
                  </div>
                )}
                <div className="mt-2 text-xs text-gray-500 flex items-center">
                  <Brain className="w-4 h-4 mr-1" />
                  Difficulty: {question.difficulty}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl
                     hover:bg-blue-700 transform hover:scale-105 transition-all duration-200
                     shadow-[0_4px_8px_rgba(59,130,246,0.5)] hover:shadow-[0_6px_12px_rgba(59,130,246,0.6)]"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsScreen;