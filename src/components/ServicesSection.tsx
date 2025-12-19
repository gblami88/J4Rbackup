import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Globe, Target, Mail, MessageSquare, Phone } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      icon: Globe,
      title: "Website + SEO",
      description: "Gets you on Google's first page when people search for what you do",
      color: "bg-blue-100",
      iconColor: "text-blue-700",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Target,
      title: "Paid Advertising (Google + Social Media)",
      description: "Brings qualified clients ready to buy, not time-wasters",
      color: "bg-green-100",
      iconColor: "text-green-700",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Cold email campaigns or newsletters that keep interested buyers informed and ready to buy",
      color: "bg-orange-100",
      iconColor: "text-orange-700",
      bgGradient: "from-orange-50 to-orange-100"
    }
  ];

  const bonusFeatures = [
    {
      icon: MessageSquare,
      title: "AI Chat Assistant",
      description: "Captures website visitors 24/7"
    },
    {
      icon: Phone,
      title: "AI Phone Agent",
      description: "Answers when you can't"
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
            Here's What We Do For <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">You</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Lines - Desktop Only */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 pointer-events-none">
            <div className={`absolute left-[20%] right-[20%] h-full transition-all duration-1000 delay-500 ${
              isVisible1 ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}>
              <svg className="w-full h-12" style={{ transform: 'translateY(-24px)' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                    <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 24 Q 25% 0, 50% 24 T 100% 24"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="1000"
                  strokeDashoffset={isVisible1 ? "0" : "1000"}
                  style={{ transition: 'stroke-dashoffset 1.5s ease-out 0.5s' }}
                />
                {/* Animated dots */}
                <circle cx="0" cy="24" r="4" fill="#3b82f6">
                  <animate attributeName="cx" from="0" to="100%" dur="3s" repeatCount="indefinite" begin="1s" />
                </circle>
              </svg>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-200 ${
              isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${service.bgGradient} border-2 border-gray-300 rounded-2xl p-8 hover:shadow-2xl hover:border-gray-400 transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Accent corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.bgGradient} opacity-50 rounded-tr-2xl rounded-bl-full`}></div>

                <div className={`relative w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={2.5} />
                </div>
                <h3 className="relative text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="relative text-gray-700 leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={ref2}
          className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12 transition-all duration-700 delay-300 ${
            isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              Bonus: Never Miss a <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Client</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {bonusFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-300 rounded-xl p-6 hover:shadow-xl hover:border-gray-400 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 15px rgba(0, 0, 0, 0.06)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-2">{feature.title}</h4>
                    <p className="text-gray-700 font-medium">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xl text-gray-700 font-light">
            No complicated dashboards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
