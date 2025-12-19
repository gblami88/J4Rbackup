import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "AI Chat Assistant",
      description: "Get an AI chat assistant that talks to customers like a real person, not like one of those \"Click here to learn more\" bots. Questions get answered in real time. Potential clients stay engaged, and all social channels get covered.",
      graphic: (
        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="relative">
            {/* Chat bubbles */}
            <div className="space-y-1">
              <div className="flex justify-end">
                <div className="w-6 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="flex justify-start">
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex justify-end">
                <div className="w-4 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            {/* AI indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Phone Agents",
      description: "Your new AI phone agent answers when you can't, even after hours. It handles bookings and customer questions with a real-sounding voice that feels like someone from your team. Most folks won't even know it's AI.",
      graphic: (
        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="relative">
            {/* Phone shape */}
            <div className="w-8 h-12 bg-gray-800 rounded-lg flex flex-col items-center justify-center">
              <div className="w-6 h-8 bg-green-400 rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            {/* Sound waves */}
            <div className="absolute -right-2 top-2 space-y-0.5">
              <div className="w-2 h-0.5 bg-blue-400 rounded animate-pulse"></div>
              <div className="w-3 h-0.5 bg-blue-400 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-0.5 bg-blue-400 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Professional Websites",
      description: "A Google-friendly website built in 7 days or less, no drama, no delays. It gets you found fast when people are searching for what you do.",
      graphic: (
        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="relative">
            {/* Browser window */}
            <div className="w-12 h-9 bg-white border-2 border-gray-300 rounded-lg">
              {/* Browser header */}
              <div className="w-full h-2 bg-gray-200 rounded-t-md flex items-center px-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                </div>
              </div>
              {/* Website content */}
              <div className="p-1 space-y-0.5">
                <div className="w-8 h-1 bg-blue-500 rounded"></div>
                <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
                <div className="w-7 h-0.5 bg-gray-300 rounded"></div>
              </div>
            </div>
            {/* SEO/Search indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Email Automation",
      description: "Email systems that check if a client's email is valid, scan public data about them, and write a message that feels personal, like you spent 30 minutes researching and writing it yourself. More personal = better results.",
      graphic: (
        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="relative">
            {/* Email envelope */}
            <div className="w-10 h-7 bg-blue-500 rounded-lg relative">
              <div className="absolute inset-1 bg-white rounded-sm">
                <div className="p-1 space-y-0.5">
                  <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
                  <div className="w-4 h-0.5 bg-gray-300 rounded"></div>
                  <div className="w-5 h-0.5 bg-gray-300 rounded"></div>
                </div>
              </div>
              {/* Email flap */}
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-lg"></div>
            </div>
            {/* Automation gears */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      title: "Social Media Automation",
      description: "Consistent content? Done. We'll build a content system that finds trending topics in your industry, customizes it to your brand, and posts it for you.",
      graphic: (
        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="relative">
            {/* Social media icons grid */}
            <div className="grid grid-cols-2 gap-1">
              <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                <div className="w-2 h-1 bg-white rounded"></div>
              </div>
              <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
              <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                <div className="w-2 h-1 bg-white rounded"></div>
              </div>
            </div>
            {/* Automation indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-1 h-1 bg-white rounded-full m-1"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Here's How We Help You Buy Back Your <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Time:</span>
          </h2>
        </div>
        
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50/30 border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:bg-gray-50/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {feature.graphic}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl font-semibold text-black mb-4">
            No tech headaches. No complicated dashboards.
          </p>
          <p className="text-xl md:text-2xl text-gray-600">
            Just smart systems that get the work done for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;