import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Check } from 'lucide-react';

const AutomationFlow: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-green-600 uppercase">Trigger</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Active</span>
                      </div>
                      <p className="font-semibold text-black">New client submits form</p>
                      <p className="text-sm text-gray-600 mt-1">Website contact form</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-blue-600 uppercase">Action</span>
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Completed</span>
                      </div>
                      <p className="font-semibold text-black">Send welcome email</p>
                      <p className="text-sm text-gray-600 mt-1">Automated sequence</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-purple-600 uppercase">Action</span>
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">Completed</span>
                      </div>
                      <p className="font-semibold text-black">Book appointment</p>
                      <p className="text-sm text-gray-600 mt-1">Calendar integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={ref1}
            className={`transition-all duration-700 delay-200 ${
              isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight leading-tight">
              Automate <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">everything</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              You're in control. Automate even the most complex business processes with our powerful, intelligent automation engine.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-black">Instant client capture</p>
                  <p className="text-gray-600">Never miss an opportunity with 24/7 automated responses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-black">Smart follow-ups</p>
                  <p className="text-gray-600">Automated email sequences that convert clients to customers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-black">Calendar sync</p>
                  <p className="text-gray-600">Appointments booked automatically without back-and-forth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFlow;
