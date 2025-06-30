
import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TravelHeader = () => {
  return (
    <header className="relative">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
          }}
        />
        
        {/* Top Navigation */}
        <div className="relative z-10 flex justify-between items-center p-6 text-white">
          <div className="text-sm font-medium">9:41</div>
          <div className="flex items-center space-x-2">
            <div className="text-sm">📶</div>
            <div className="text-sm">📶</div>
            <div className="w-6 h-3 bg-white/30 rounded-sm border border-white/50" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-8 pb-32">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Unveil The<br />
            Travel Wonders
          </h1>
          <p className="text-xl text-white/90 mb-2 tracking-widest">
            NORWAY
          </p>
          <p className="text-white/80 mb-8 text-lg">
            Take the first step into<br />
            an unforgettable journey
          </p>
          
          <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full py-4 px-8 text-lg font-medium flex items-center justify-between max-w-xs group transition-all duration-300">
            <span className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                ✈️
              </div>
              Explore Now
            </span>
            <span className="ml-4 group-hover:translate-x-1 transition-transform">»</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TravelHeader;
