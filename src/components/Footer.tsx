import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-base font-semibold text-black">Just 4 Results</span>
            </div>
            <p className="text-base text-gray-600">
              Helping local businesses get found online and fill their calendars with customers.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/get-analysis" className="text-gray-600 hover:text-black transition-colors text-base">
                  Get Analysis
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-black transition-colors text-base">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-600 text-base">Website + SEO</span>
              </li>
              <li>
                <span className="text-gray-600 text-base">Paid Advertising</span>
              </li>
              <li>
                <span className="text-gray-600 text-base">Email Marketing</span>
              </li>
              <li>
                <span className="text-gray-600 text-base">Chat Agent</span>
              </li>
              <li>
                <span className="text-gray-600 text-base">Call Agent</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            © 2025 Just 4 Results. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;