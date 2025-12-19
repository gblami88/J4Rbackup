import React from 'react';

export const RequestAnalysisGraphic = () => (
  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
    {/* Clay-style form/document */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-24 h-28 sm:w-28 sm:h-32 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
        {/* Paper texture */}
        <div className="absolute inset-2 bg-white/80 rounded-xl backdrop-blur-sm">
          {/* Form lines */}
          <div className="p-3 space-y-2">
            <div className="h-2 bg-teal-400 rounded-full w-16"></div>
            <div className="h-1.5 bg-gray-300 rounded-full w-14"></div>
            <div className="h-1.5 bg-gray-300 rounded-full w-12"></div>
            <div className="h-1.5 bg-gray-300 rounded-full w-14"></div>
            <div className="mt-3 flex justify-end">
              <div className="w-8 h-6 bg-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-3 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Checkmark indicator */}
        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-xl flex items-center justify-center animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export const CustomPlanGraphic = () => (
  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
    {/* Clay-style location pin */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Map base */}
        <div className="w-24 h-20 sm:w-28 sm:h-24 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-200 rounded-2xl shadow-2xl overflow-hidden">
          {/* Map grid lines */}
          <div className="absolute inset-0">
            <div className="h-full w-full grid grid-cols-3 grid-rows-3">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border border-orange-200/30"></div>
              ))}
            </div>
          </div>
          {/* Roads */}
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-orange-300/40 transform -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-orange-300/40 transform -translate-x-1/2"></div>
        </div>

        {/* Location pin */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <div className="relative w-12 h-16 sm:w-14 sm:h-18">
            {/* Pin body */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-2xl flex items-center justify-center animate-bounce" style={{ animationDuration: '2s' }}>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
              {/* Badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                AD
              </div>
            </div>
            {/* Pin point */}
            <div className="absolute top-8 sm:top-10 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-orange-600"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const GoLiveGraphic = () => (
  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
    {/* Clay-style funnel */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Funnel structure */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
          {/* Top of funnel */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 sm:w-24 sm:h-7 bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-3xl shadow-xl"></div>

          {/* Middle sections */}
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-16 h-5 sm:w-20 sm:h-6 bg-gradient-to-b from-amber-200 to-amber-300 shadow-lg"></div>

          <div className="absolute top-9 sm:top-10 left-1/2 transform -translate-x-1/2 w-12 h-5 sm:w-16 sm:h-6 bg-gradient-to-b from-amber-300 to-orange-400 shadow-lg"></div>

          {/* Bottom narrow part */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-orange-400 to-orange-500 rounded-b-2xl shadow-xl"></div>
        </div>

        {/* People icons at top */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-1">
          <div className="w-3 h-4 sm:w-4 sm:h-5 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
          <div className="w-3 h-4 sm:w-4 sm:h-5 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
          <div className="w-3 h-4 sm:w-4 sm:h-5 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
        </div>

        {/* Money/Success symbol at bottom */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl flex items-center justify-center animate-pulse">
            <span className="text-2xl sm:text-3xl font-bold text-white">$</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
