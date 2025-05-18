import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 text-center">
      <div className="glass card-shadow rounded-2xl p-8 max-w-2xl transform hover:scale-[1.02] transition-all duration-300">
        <Brain className="w-20 h-20 mx-auto text-blue-600 mb-6 animate-pulse" />
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]">
          Welcome to Adaptive Quiz
        </h1>
        <p className="text-xl text-blue-800/80 mb-8">
          Challenge yourself with our intelligent quiz that adapts to your knowledge level.
          The more you know, the harder it gets!
        </p>
        <button
          onClick={() => navigate('/quiz')}
          className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl
                   hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 
                   shadow-[0_8px_16px_rgba(59,130,246,0.5)] hover:shadow-[0_12px_20px_rgba(59,130,246,0.6)]"
        >
          Start Quiz
        </button>
        <p className="mt-6 text-blue-800/60">
          Test your knowledge across various topics and watch as the questions adapt to your expertise level.
        </p>
         <div className="mt-4 flex flex-col items-center">
    <b className="text-xl font-semibold text-red-400 animate-pulse transition-all duration-500 hover:scale-110">
      Emmadisetty Kowshik
    </b>
  </div>
      </div>
    </div>
  );
};

export default Home;