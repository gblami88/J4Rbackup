import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, Wrench, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const StepsSection: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      const scrollStart = windowHeight - sectionTop;
      const scrollEnd = scrollStart - sectionHeight;

      if (scrollStart > 0 && scrollEnd < windowHeight) {
        const progress = Math.min(Math.max(scrollStart / (sectionHeight + windowHeight), 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: "1",
      title: "Free Business Analysis",
      description: "We show where you're losing potential customers",
      icon: ClipboardCheck,
      color: "bg-white",
      iconColor: "text-blue-600",
      bgGradient: "from-blue-500 via-blue-600 to-blue-700"
    },
    {
      number: "2",
      title: "We Build Your System",
      description: "We identify your ideal customers and create campaigns that bring them to you",
      icon: Wrench,
      color: "bg-white",
      iconColor: "text-emerald-600",
      bgGradient: "from-emerald-500 via-emerald-600 to-emerald-700"
    },
    {
      number: "3",
      title: "Track & Optimize",
      description: "We monitor what's working and double down on it",
      icon: Rocket,
      color: "bg-white",
      iconColor: "text-orange-600",
      bgGradient: "from-orange-500 via-orange-600 to-orange-700"
    }
  ];

  return (
    <section id="how-it-works" className="bg-black py-6 sm:py-8 md:py-12" aria-labelledby="steps-heading" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div
            ref={headerRef}
            className={`bg-gray-900 text-white py-6 sm:py-8 md:py-10 mb-8 sm:mb-10 -mx-4 sm:-mx-6 lg:-mx-8 px-5 sm:px-6 lg:px-8 border-y-2 border-gray-800 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
              Our <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Guarantee</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              If we don't get you more customers within 90 days, we'll work for free until we do.
            </p>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-3">
              We succeed when you succeed. Simple as that.
            </p>
          </div>
          <h2 id="steps-heading" className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Here is where we go from <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">here</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            You can close this page and keep guessing what works (we've all been there). Or take a minute to request a FREE marketing analysis.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We'll show you exactly where potential customers are slipping away and how to fix it fast. Then you decide what's next. No obligation.
          </p>
          <Link
            to="/get-analysis"
            className="inline-flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg mb-8"
            aria-label="Show me where I'm losing customers"
          >
            <span>SHOW ME WHERE I'M LOSING CUSTOMERS</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </Link>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Getting Started Is <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Simple</span>
          </h3>
        </div>

        <div className="relative">
          {/* Animated Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 pointer-events-none z-0">
            <div className={`absolute left-[16%] right-[16%] h-full transition-all duration-1000 delay-300 ${
              cardsVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <svg className="w-full h-12" style={{ transform: 'translateY(-24px)' }}>
                <defs>
                  <linearGradient id="stepsLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                    <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 24 Q 25% 0, 50% 24 T 100% 24"
                  stroke="url(#stepsLineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="1000"
                  strokeDashoffset={cardsVisible ? 1000 - (scrollProgress * 1000) : 1000}
                  style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                />
              </svg>
            </div>
          </div>

          {/* Animated Glowing Dot Between Cards */}
          {scrollProgress > 0.2 && (
            <div
              className="hidden md:block absolute top-1/2 pointer-events-none z-20"
              style={{
                left: `${16 + (scrollProgress * 68)}%`,
                transform: 'translate(-50%, -50%)',
                transition: 'left 0.1s linear'
              }}
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-90 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 rounded-full blur-xl opacity-100 animate-pulse"></div>
                <div className="relative bg-white rounded-full shadow-2xl w-6 h-6"></div>
              </div>
            </div>
          )}

          <div
            ref={cardsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 sm:mb-8 transition-all duration-700 delay-200 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${step.bgGradient} border-2 border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:scale-105 z-10`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Accent corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-tr-2xl rounded-bl-full`}></div>

                <div className={`relative w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} strokeWidth={2.5} />
                </div>
                <h3 className="relative text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="relative text-white/90 leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StepsSection;