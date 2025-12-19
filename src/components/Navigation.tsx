import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 transition-all duration-300" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu} aria-label="Just 4 Results Home">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-black">Just 4 Results</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-lg font-medium transition-all duration-300 relative ${
                location.pathname === '/'
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
              {location.pathname === '/' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
              )}
            </Link>
            <Link
              to="/blog"
              className={`text-lg font-medium transition-all duration-300 relative ${
                location.pathname === '/blog'
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
              aria-current={location.pathname === '/blog' ? 'page' : undefined}
            >
              Blog
              {location.pathname === '/blog' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
              )}
            </Link>
            <Link
              to="/get-analysis"
              className="bg-black text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-current={location.pathname === '/get-analysis' ? 'page' : undefined}
            >
              Get Free Analysis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-gray-200 py-4 bg-white"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-lg font-medium transition-all duration-300 px-2 py-2 rounded-lg ${
                  location.pathname === '/'
                    ? 'text-black bg-gray-50'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
                onClick={closeMobileMenu}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={`text-lg font-medium transition-all duration-300 px-2 py-2 rounded-lg ${
                  location.pathname === '/blog'
                    ? 'text-black bg-gray-50'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
                onClick={closeMobileMenu}
                aria-current={location.pathname === '/blog' ? 'page' : undefined}
              >
                Blog
              </Link>
              <Link
                to="/get-analysis"
                className="bg-black text-white px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 text-center"
                onClick={closeMobileMenu}
                aria-current={location.pathname === '/get-analysis' ? 'page' : undefined}
              >
                Get Free Analysis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;