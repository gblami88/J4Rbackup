import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check } from 'lucide-react';

const DataShowcase: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.1 });

  const records = [
    {
      type: "Website + SEO",
      status: "Active",
      leads: "2,889",
      color: "bg-blue-500"
    },
    {
      type: "Google Ads",
      status: "Active",
      leads: "3,111",
      color: "bg-green-500"
    },
    {
      type: "Social Media",
      status: "Active",
      leads: "1,567",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={ref1}
            className={`transition-all duration-700 ${
              isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight leading-tight">
              Connect any type of <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">data</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Sync product data, billing data, and everything in between, for a real-time single source of truth for your business.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg text-gray-700">Real-time tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg text-gray-700">Automated reporting</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg text-gray-700">Performance insights</span>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-black">Marketing Channels</h3>
                  <span className="text-sm text-gray-500">Live Data</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {records.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${record.color}`}></div>
                      <div>
                        <p className="font-semibold text-black">{record.type}</p>
                        <p className="text-sm text-gray-500">{record.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-black">{record.leads}</p>
                      <p className="text-sm text-gray-500">Leads</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataShowcase;
