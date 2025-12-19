import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const DecisionSection: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref1}
          className={`text-center transition-all duration-700 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight leading-tight">
            Here is where we go from <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">here</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 max-w-2xl mx-auto">
            You can close this page and keep guessing what works (we've all been there). Or take a minute to request a FREE marketing analysis.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            We'll show you <strong className="text-black">EXACTLY</strong> where potential customers are slipping away and how to close the gap fast. For $0.
          </p>

          <Link
            to="/get-analysis"
            className="group inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>Where Am I Losing Customers?</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DecisionSection;
