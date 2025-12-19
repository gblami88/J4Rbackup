import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetAnalysisPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back to Home Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 sm:mb-8"
          aria-label="Go back to home page"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        
        <div className="bg-white rounded-2xl overflow-hidden max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center">
              👉 GET MY FREE BUSINESS ANALYSIS
            </h2>
          </div>

          <div className="flex justify-center w-full">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe59GvEiO3bt5RxF8shAP80iq_FIN4PEWynVBYoGmuGUOOQiA/viewform?embedded=true"
              width="100%"
              height="973"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="block w-full max-w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            What You'll Get in Your <span className="font-display-italic">Free Analysis:</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl flex flex-col h-full border-2 border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-gray-400"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50 rounded-tr-2xl rounded-bl-full pointer-events-none"></div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-black relative z-10">Biggest Customer Leaks</h4>
              <p className="text-gray-700 text-base leading-relaxed relative z-10">
                See exactly where you're losing customers when they are actively searching for what you do.
              </p>
            </div>
            <div className="group relative bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl flex flex-col h-full border-2 border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-gray-400"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 opacity-50 rounded-tr-2xl rounded-bl-full pointer-events-none"></div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-black relative z-10">90-Day Plan</h4>
              <p className="text-gray-700 text-base leading-relaxed relative z-10">
                A step-by-step roadmap showing which platforms your customers use and how to reach them effectively.
              </p>
            </div>
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-2xl flex flex-col h-full border-2 border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-gray-400"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-50 to-orange-100 opacity-50 rounded-tr-2xl rounded-bl-full pointer-events-none"></div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-black relative z-10">Results Projection</h4>
              <p className="text-gray-700 text-base leading-relaxed relative z-10">
                See how many more bookings you could get if you close the gap now, and the dollar impact on your bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAnalysisPage;