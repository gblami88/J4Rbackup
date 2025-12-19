import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Globe, Mail, MessageSquare, Phone, Search, Share2 } from 'lucide-react';

const IntegrationsGrid: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation({ threshold: 0.1 });

  const integrations = [
    {
      name: "Sales engagement",
      icon: Share2,
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      name: "Email & calendar",
      icon: Mail,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      name: "Customer support",
      icon: MessageSquare,
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      name: "Data warehouses",
      icon: Globe,
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      name: "Product data",
      icon: Search,
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      name: "Communication",
      icon: Phone,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
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
            All your marketing in one <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">place</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Integrate with the tools you already use
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-12 transition-all duration-700 delay-200 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${integration.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <integration.icon className={`w-7 h-7 ${integration.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-black">{integration.name}</h3>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 delay-400 ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-lg text-gray-600 mb-8">
            Plus seamless integration with Google, Facebook, Instagram, and more
          </p>
          <div className="inline-flex items-center gap-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FD5949"/>
                    <stop offset="50%" stopColor="#D6249F"/>
                    <stop offset="100%" stopColor="#285AEB"/>
                  </linearGradient>
                </defs>
                <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;
