import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Search, Wrench, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Free Business Analysis",
      description: "We show where you're losing potential customers",
      color: "bg-blue-100",
      iconColor: "text-blue-700",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      number: "02",
      icon: Wrench,
      title: "We Build Your System",
      description: "We identify your ideal customers and create campaigns that bring them to you",
      color: "bg-green-100",
      iconColor: "text-green-700",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Track & Optimize",
      description: "We monitor what's working and double down on it",
      color: "bg-orange-100",
      iconColor: "text-orange-700",
      bgGradient: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref1}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Getting Started Is <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Simple</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${step.bgGradient} border-2 border-gray-300 rounded-2xl p-8 hover:shadow-2xl hover:border-gray-400 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Accent corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.bgGradient} opacity-50 rounded-tr-2xl rounded-bl-full`}></div>

              <div className={`relative w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <step.icon className={`w-8 h-8 ${step.iconColor}`} strokeWidth={2.5} />
              </div>
              <h3 className="relative text-xl font-bold text-black mb-3">{step.title}</h3>
              <p className="relative text-gray-700 leading-relaxed font-medium">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-32 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-32 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
