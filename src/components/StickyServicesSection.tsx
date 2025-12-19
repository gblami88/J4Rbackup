import React from 'react';
import StickyTabs from '@/components/ui/sticky-section-tabs';

const ServiceContent: React.FC<{
  title: string;
  description: string;
  graphic: React.ReactNode;
}> = ({ description, graphic }) => (
  <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:bg-gray-800/50 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300">
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <div className="flex-shrink-0">
        {graphic}
      </div>

      <div className="flex-1 text-center sm:text-left">
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const StickyServicesSection: React.FC = () => {
  const services = [
    {
      id: 'websites',
      title: 'Website + SEO',
      description: 'Gets you on Google\'s first page when people search for what you do.',
      graphic: (
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Computer screen */}
            <rect x="20" y="25" width="60" height="45" rx="4" className="stroke-pink-300" />
            {/* Screen content lines */}
            <line x1="28" y1="35" x2="55" y2="35" className="stroke-pink-300" />
            <line x1="28" y1="42" x2="48" y2="42" className="stroke-pink-300" />
            <line x1="28" y1="49" x2="52" y2="49" className="stroke-pink-300" />
            <line x1="28" y1="56" x2="45" y2="56" className="stroke-pink-300" />
            {/* Stand */}
            <line x1="45" y1="70" x2="55" y2="70" className="stroke-pink-300" />
            <line x1="50" y1="70" x2="50" y2="75" className="stroke-pink-300" />
            <line x1="40" y1="75" x2="60" y2="75" className="stroke-pink-300" />
            {/* Search/SEO indicator */}
            <circle cx="72" cy="40" r="8" className="stroke-pink-300" />
            <line x1="78" y1="46" x2="84" y2="52" className="stroke-pink-300" strokeWidth="3" />
            {/* Stars */}
            <circle cx="85" cy="30" r="1.5" className="fill-pink-300 stroke-none animate-pulse" />
            <circle cx="15" cy="35" r="1.5" className="fill-pink-300 stroke-none animate-pulse" style={{ animationDelay: '0.3s' }} />
          </svg>
        </div>
      )
    },
    {
      id: 'paid-advertising',
      title: 'Paid Advertising (Google + Social Media)',
      description: 'Brings qualified clients ready to buy, not time-wasters.',
      graphic: (
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Target/bullseye */}
            <circle cx="50" cy="50" r="28" className="stroke-pink-300" />
            <circle cx="50" cy="50" r="20" className="stroke-pink-300" />
            <circle cx="50" cy="50" r="12" className="stroke-pink-300" />
            <circle cx="50" cy="50" r="4" className="fill-pink-300 stroke-none" />
            {/* Arrows pointing to center */}
            <path d="M15 15 L30 30" className="stroke-pink-300" />
            <path d="M25 30 L30 30 L30 25" className="stroke-pink-300" />
            <path d="M85 15 L70 30" className="stroke-pink-300" />
            <path d="M75 30 L70 30 L70 25" className="stroke-pink-300" />
            <path d="M85 85 L70 70" className="stroke-pink-300" />
            <path d="M75 70 L70 70 L70 75" className="stroke-pink-300" />
          </svg>
        </div>
      )
    },
    {
      id: 'email-automation',
      title: 'Email Marketing',
      description: 'Cold email campaigns or newsletters that keep interested buyers informed and ready to buy.',
      graphic: (
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Envelope */}
            <path d="M20 35 L20 70 C20 73 22 75 25 75 L75 75 C78 75 80 73 80 70 L80 35" className="stroke-pink-300" />
            {/* Envelope flap */}
            <path d="M20 35 L50 55 L80 35" className="stroke-pink-300" />
            <path d="M20 35 L50 20 L80 35" className="stroke-pink-300" />
            {/* Gear/automation symbol */}
            <circle cx="72" cy="28" r="8" className="stroke-pink-300" />
            <line x1="72" y1="20" x2="72" y2="22" className="stroke-pink-300" />
            <line x1="72" y1="34" x2="72" y2="36" className="stroke-pink-300" />
            <line x1="80" y1="28" x2="78" y2="28" className="stroke-pink-300" />
            <line x1="66" y1="28" x2="64" y2="28" className="stroke-pink-300" />
            {/* Sparkles */}
            <circle cx="88" cy="22" r="1.5" className="fill-pink-300 stroke-none animate-pulse" />
            <circle cx="12" cy="40" r="1.5" className="fill-pink-300 stroke-none animate-pulse" style={{ animationDelay: '0.3s' }} />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section aria-labelledby="services-heading">
      <div className="bg-black py-8 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="text-center">
            <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-0">
              Here's What We Do For <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">You</span>
            </h2>
          </div>
        </div>

        <StickyTabs
          mainNavHeight="4rem"
          rootClassName="bg-black text-white"
          navSpacerClassName="border-b border-white/15 bg-black"
          sectionClassName="bg-[#131313]"
          stickyHeaderContainerClassName="shadow-lg"
          headerContentWrapperClassName="border-b border-t border-white/15 bg-black"
          headerContentLayoutClassName="mx-auto max-w-6xl px-4 py-4 sm:py-6 sm:px-6 lg:px-8"
          titleClassName="my-0 text-xl sm:text-2xl font-bold leading-none md:text-3xl lg:text-4xl text-white"
          contentLayoutClassName="mx-auto max-w-6xl px-4 py-8 sm:py-10 sm:px-6 lg:px-8"
        >
          {services.map((service) => (
            <StickyTabs.Item key={service.id} title={service.title} id={service.id}>
              <ServiceContent
                title={service.title}
                description={service.description}
                graphic={service.graphic}
              />
            </StickyTabs.Item>
          ))}
        </StickyTabs>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl p-6 sm:p-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Bonus: Never Miss a <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Client</span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-gray-800/70 hover:border-pink-300/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pink-300/20 rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-pink-300" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">AI Chat Assistant</h4>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Captures website visitors 24/7
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-gray-800/70 hover:border-pink-300/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pink-300/20 rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-pink-300" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">AI Phone Agent</h4>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Answers when you can't
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              No complicated dashboards. Just marketing that works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyServicesSection;