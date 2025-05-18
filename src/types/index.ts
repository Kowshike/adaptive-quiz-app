export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  difficulty: DifficultyLevel;
  explanation?: string;
  topic?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  questions: Question[];
  userAnswers: (string | null)[];
  consecutiveCorrect: number;
  currentDifficulty: DifficultyLevel;
  isCompleted: boolean;
  showResult: boolean;
}

export interface QuizConfig {
  initialDifficulty: DifficultyLevel;
  correctToIncreaseDifficulty: number;
  maxQuestions: number;
  showDifficulty: boolean;
}