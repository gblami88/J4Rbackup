import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FinalCTA: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref1}
          className={`text-center transition-all duration-700 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
            Ready to grow your local <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">business?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Get a free marketing analysis and discover how we can fill your calendar with more customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-lg">No credit card required</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-lg">Free analysis in 48 hours</span>
            </div>
          </div>

          <Link
            to="/get-analysis"
            className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95"
            aria-label="Get your free business analysis"
          >
            <span>Get Your Free Analysis</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <p className="text-sm text-gray-400 mt-8">
            Join 500+ local businesses growing with professional marketing
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
