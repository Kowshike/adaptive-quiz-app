import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizState } from '../hooks/useQuizState';
import Question from './Question';
import ProgressBar from './ProgressBar';
import DifficultyIndicator from './DifficultyIndicator';
import ResultsScreen from './ResultsScreen';
import { Brain, Lightbulb } from 'lucide-react';

const QuizContainer: React.FC = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    userAnswers,
    currentAnswer,
    difficulty,
    isCompleted,
    showResult,
    score,
    handleAnswer,
    goToNextQuestion,
    restartQuiz,
  } = useQuizState();

  const onSelectAnswer = (answer: string) => {
    handleAnswer(answer);
    setShowFeedback(true);
    setShowHint(false);
  };

  const onNextQuestion = () => {
    setShowFeedback(false);
    setShowHint(false);
    goToNextQuestion();
  };

  if (showResult) {
    return (
      <ResultsScreen
        score={score}
        totalQuestions={totalQuestions}
        userAnswers={userAnswers}
        questions={[...Array(totalQuestions)].map((_, i) => {
          const q = userAnswers[i] !== null ? 
            { ...currentQuestion, index: i } : 
            null;
          return q;
        }).filter(Boolean) as any}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl glass card-shadow rounded-xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.01]"
    >
      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Brain className="w-8 h-8 text-blue-600" />
            </motion.div>
            <h1 className="text-2xl font-bold text-blue-900">Adaptive Quiz</h1>
          </div>
          <DifficultyIndicator difficulty={difficulty} />
        </div>
        
        <ProgressBar current={currentQuestionIndex} total={totalQuestions} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="my-8"
          >
            {currentQuestion && (
              <>
                <Question
                  question={currentQuestion}
                  userAnswer={currentAnswer}
                  onSelectAnswer={onSelectAnswer}
                  showFeedback={showFeedback}
                />
                {!showFeedback && !currentAnswer && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4"
                  >
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Lightbulb className="w-5 h-5" />
                      <span>Need a hint?</span>
                    </button>
                    <AnimatePresence>
                      {showHint && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 p-3 bg-blue-50 rounded-lg text-blue-700"
                        >
                          Think about the topic: {currentQuestion.topic}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
        
        {showFeedback && !isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end"
          >
            <button
              onClick={onNextQuestion}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-xl
                       hover:bg-blue-700 transform hover:scale-105 transition-all duration-200
                       shadow-[0_4px_8px_rgba(59,130,246,0.5)] hover:shadow-[0_6px_12px_rgba(59,130,246,0.6)]"
            >
              {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default QuizContainer;