import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass text-white shadow-lg backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Brain className="h-8 w-8 transform group-hover:scale-110 transition-transform duration-200" />
            <span className="font-bold text-xl text-blue-900">Adaptive Quiz</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-blue-900 hover:text-blue-600 transform hover:scale-105 transition-all duration-200">Home</Link>
            <Link to="/about" className="text-blue-900 hover:text-blue-600 transform hover:scale-105 transition-all duration-200">About</Link>
            <Link to="/quiz" className="text-blue-900 hover:text-blue-600 transform hover:scale-105 transition-all duration-200">Quiz</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;