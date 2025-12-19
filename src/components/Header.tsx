import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white relative overflow-hidden min-h-[85vh] flex items-center">
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="text-center space-y-10">
          <div className="opacity-0 fade-in space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight max-w-4xl mx-auto">
              Local business owner?
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-800 max-w-4xl mx-auto leading-snug">
              We'll put your business in front of locals actively searching for your services to fill your calendar. <span className="text-black font-bold">Guaranteed.</span>
            </p>
          </div>

          <div className="opacity-0 fade-in delay-400 pt-4">
            <Link
              to="/get-analysis"
              className="group inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
              aria-label="Get your free business analysis"
            >
              <span>YES, I WANT THIS</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;