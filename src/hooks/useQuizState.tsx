import { useState, useEffect } from 'react';
import { Question, QuizState, DifficultyLevel, QuizConfig } from '../types';
import questions from '../data/questionData';

// Default quiz configuration
const defaultConfig: QuizConfig = {
  initialDifficulty: 'medium',
  correctToIncreaseDifficulty: 2,
  maxQuestions: 10,
  showDifficulty: true,
};

export const useQuizState = (config: Partial<QuizConfig> = {}) => {
  // Merge default config with provided config
  const quizConfig = { ...defaultConfig, ...config };
  
  // Initialize quiz state
  const [state, setState] = useState<QuizState>(() => {
    // Filter questions by initial difficulty
    const initialQuestions = getQuestionsForDifficulty(
      quizConfig.initialDifficulty, 
      quizConfig.maxQuestions
    );
    
    return {
      currentQuestionIndex: 0,
      questions: initialQuestions,
      userAnswers: Array(quizConfig.maxQuestions).fill(null),
      consecutiveCorrect: 0,
      currentDifficulty: quizConfig.initialDifficulty,
      isCompleted: false,
      showResult: false,
    };
  });

  // Calculate score
  const score = state.userAnswers.filter((answer, index) => {
    const question = state.questions[index];
    return question && answer === question.correctAnswer;
  }).length;

  // Function to get questions for a specific difficulty
  function getQuestionsForDifficulty(difficulty: DifficultyLevel, count: number): Question[] {
    const filteredQuestions = questions.filter(q => q.difficulty === difficulty);
    
    // If not enough questions of this difficulty, add questions from adjacent difficulty
    if (filteredQuestions.length < count) {
      const adjacentDifficulty = difficulty === 'easy' ? 'medium' : 
                                difficulty === 'hard' ? 'medium' : 
                                Math.random() < 0.5 ? 'easy' : 'hard';
      
      const additionalQuestions = questions.filter(q => q.difficulty === adjacentDifficulty);
      const combined = [...filteredQuestions, ...additionalQuestions];
      return shuffleArray(combined).slice(0, count);
    }
    
    return shuffleArray(filteredQuestions).slice(0, count);
  }

  // Function to shuffle array
  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  // Function to adjust difficulty
  const adjustDifficulty = (isCorrect: boolean) => {
    let newDifficulty = state.currentDifficulty;
    let newConsecutiveCorrect = isCorrect ? state.consecutiveCorrect + 1 : 0;
    
    // Increase difficulty after consecutive correct answers
    if (isCorrect && newConsecutiveCorrect >= quizConfig.correctToIncreaseDifficulty) {
      if (state.currentDifficulty === 'easy') newDifficulty = 'medium';
      else if (state.currentDifficulty === 'medium') newDifficulty = 'hard';
      newConsecutiveCorrect = 0; // Reset consecutive counter
    } 
    // Decrease difficulty after incorrect answer
    else if (!isCorrect) {
      if (state.currentDifficulty === 'hard') newDifficulty = 'medium';
      else if (state.currentDifficulty === 'medium') newDifficulty = 'easy';
    }
    
    return { newDifficulty, newConsecutiveCorrect };
  };

  // Function to handle answer selection
  const handleAnswer = (answer: string) => {
    // If quiz is completed, don't process answers
    if (state.isCompleted) return;
    
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    // Create a copy of user answers
    const newUserAnswers = [...state.userAnswers];
    newUserAnswers[state.currentQuestionIndex] = answer;
    
    // Adjust difficulty based on answer
    const { newDifficulty, newConsecutiveCorrect } = adjustDifficulty(isCorrect);
    
    // Check if this was the last question
    const isLastQuestion = state.currentQuestionIndex === state.questions.length - 1;
    
    // Get next questions if needed
    let newQuestions = [...state.questions];
    
    if (!isLastQuestion) {
      // If difficulty changed, update upcoming questions
      if (newDifficulty !== state.currentDifficulty) {
        const remainingCount = state.questions.length - state.currentQuestionIndex - 1;
        const newUpcomingQuestions = getQuestionsForDifficulty(newDifficulty, remainingCount);
        
        newQuestions = [
          ...newQuestions.slice(0, state.currentQuestionIndex + 1),
          ...newUpcomingQuestions
        ];
      }
    }
    
    // Update state
    setState({
      ...state,
      userAnswers: newUserAnswers,
      currentDifficulty: newDifficulty,
      consecutiveCorrect: newConsecutiveCorrect,
      questions: newQuestions,
      isCompleted: isLastQuestion,
      showResult: isLastQuestion,
    });
  };

  // Function to go to the next question
  const goToNextQuestion = () => {
    if (state.currentQuestionIndex < state.questions.length - 1) {
      setState({
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      });
    } else {
      setState({
        ...state,
        isCompleted: true,
        showResult: true,
      });
    }
  };

  // Function to restart the quiz
  const restartQuiz = () => {
    const initialQuestions = getQuestionsForDifficulty(
      quizConfig.initialDifficulty, 
      quizConfig.maxQuestions
    );
    
    setState({
      currentQuestionIndex: 0,
      questions: initialQuestions,
      userAnswers: Array(quizConfig.maxQuestions).fill(null),
      consecutiveCorrect: 0,
      currentDifficulty: quizConfig.initialDifficulty,
      isCompleted: false,
      showResult: false,
    });
  };

  return {
    currentQuestion: state.questions[state.currentQuestionIndex],
    currentQuestionIndex: state.currentQuestionIndex,
    totalQuestions: state.questions.length,
    userAnswers: state.userAnswers,
    currentAnswer: state.userAnswers[state.currentQuestionIndex],
    difficulty: state.currentDifficulty,
    isCompleted: state.isCompleted,
    showResult: state.showResult,
    score,
    handleAnswer,
    goToNextQuestion,
    restartQuiz,
  };
};