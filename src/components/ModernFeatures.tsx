import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const ModernFeatures: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach locals actively searching for your services with laser-focused campaigns.",
      metrics: "3x higher conversion rate"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Grow your customer base predictably with data-driven strategies.",
      metrics: "Average 40% revenue increase"
    },
    {
      icon: Users,
      title: "Customer Pipeline",
      description: "Build a consistent flow of qualified leads ready to become customers.",
      metrics: "2x more appointments"
    },
    {
      icon: Zap,
      title: "Automated Marketing",
      description: "Set it and forget it. Our systems work 24/7 to bring you customers.",
      metrics: "Save 20+ hours per week"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref1}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Everything you need to <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">grow</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Professional marketing that delivers real results for local businesses
          </p>
        </div>

        <div
          ref={ref2}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 delay-200 ${
            isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">{feature.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-gray-100 px-4 py-2 rounded-lg">
                    <TrendingUp className="w-4 h-4" />
                    {feature.metrics}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
