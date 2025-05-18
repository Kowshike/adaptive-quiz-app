import React from 'react';
import { DifficultyLevel } from '../types';

interface DifficultyIndicatorProps {
  difficulty: DifficultyLevel;
}

const DifficultyIndicator: React.FC<DifficultyIndicatorProps> = ({ difficulty }) => {
  const getColorClass = () => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'hard':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getLabel = () => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">Difficulty:</span>
      <div className="flex items-center px-2 py-1 rounded-full text-white text-xs font-medium">
        <div className={`w-3 h-3 rounded-full ${getColorClass()} mr-1`}></div>
        <span>{getLabel()}</span>
      </div>
    </div>
  );
};

export default DifficultyIndicator;