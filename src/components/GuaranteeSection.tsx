import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Shield } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref1}
          className={`text-center transition-all duration-700 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Icon outside the card */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Main card */}
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-300 rounded-3xl p-6 md:p-10 pt-14 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-display-italic">Guarantee</span>
              </h2>

              <p className="text-lg sm:text-xl text-black font-bold mb-4 leading-tight">
                If we don't get you more customers within 90 days, we'll work for free until we do.
              </p>

              <p className="text-lg text-gray-700 font-medium">
                We succeed when you succeed. Simple as that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
