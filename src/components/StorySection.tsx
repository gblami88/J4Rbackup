import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const StorySection: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ref4, isVisible: isVisible4 } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ref5, isVisible: isVisible5 } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 md:py-32 overflow-hidden" aria-labelledby="story-heading">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div
            ref={ref1}
            className={`transition-all duration-700 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 text-6xl text-gray-700 font-serif">"</div>
              <p className="text-2xl sm:text-3xl md:text-4xl mb-8 leading-relaxed font-light pl-6">
                You've probably wondered: <span className="relative font-display-italic font-semibold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">"Is marketing actually gonna work for my business?"
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"></span>
                </span>
              </p>
            </div>
          </div>

          <div
            ref={ref2}
            className={`transition-all duration-700 delay-100 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300">
              What nobody tells you is: most of what eats up your day has nothing to do with why you started your business. It's either asking ChatGPT how to run Facebook ads at 10 pm or watching YouTube tutorials that leave you more confused.
            </p>
          </div>

          <div
            ref={ref3}
            className={`transition-all duration-700 delay-200 ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300">
              You think doing it yourself costs nothing. But add up those hours. Late nights trying to figure out marketing. That's time you're not serving customers or doing the work you actually love.
            </p>
          </div>

          <div
            ref={ref4}
            className={`transition-all duration-700 delay-100 ${isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-r from-black via-gray-900 to-black px-8 sm:px-12 py-6 rounded-2xl border-2 border-gray-700 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-blue-500/5 rounded-2xl"></div>
                  <p className="relative text-xl sm:text-2xl md:text-3xl leading-relaxed font-semibold text-center bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    Now imagine flipping a switch. <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">"Direct response marketing"</span> gets you in front of more locals ready to buy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={ref5}
            className={`transition-all duration-700 delay-200 ${isVisible5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >

            <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border-2 border-gray-700/50 rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-2xl">
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>

              <h2 id="story-heading" className="relative text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
                The <span className="relative font-display-italic bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">Result
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 blur-sm"></span>
                </span>
              </h2>
              <div className="space-y-6">
                <div className="group relative flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CheckCircle className="relative w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <div className="relative">
                    <p className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-white transition-colors duration-300">More customers</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Because locals find you when they're searching</p>
                  </div>
                </div>
                <div className="group relative flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CheckCircle className="relative w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <div className="relative">
                    <p className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-white transition-colors duration-300">More time</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">No more DIY marketing headaches</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/get-analysis"
                className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Get your free business analysis"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-emerald-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">YES, I WANT THIS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;