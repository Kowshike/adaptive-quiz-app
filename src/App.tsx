import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-mesh bg-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/30 pointer-events-none"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;