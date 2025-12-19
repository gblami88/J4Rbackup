import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const StickyNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-black">
          Just 4 Results
        </div>
        <Link
          to="/get-analysis"
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 transform hover:scale-105 transition-all duration-200"
        >
          <span>Get Free Analysis</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
};
