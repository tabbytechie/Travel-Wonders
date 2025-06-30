
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TravelHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 px-6 py-8 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Hi Sarah 👋</h1>
            <p className="text-white/90 text-sm">Where do you want to go?</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-lg">🔔</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Explore the Beautiful world!</h2>
          <div className="flex space-x-2 mb-4">
            <span className="text-2xl">🌴</span>
            <span className="text-2xl">🏔️</span>
            <span className="text-2xl">🏖️</span>
          </div>
        </div>
        
        <button 
          onClick={() => navigate('/explore')}
          className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg"
        >
          Explore now
        </button>
      </div>
    </div>
  );
};

export default TravelHeader;
