
import React, { useState } from 'react';
import { ArrowLeft, Heart, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DestinationDetail = ({ destination, onBack }: { destination: any, onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="bg-white min-h-screen">
      {/* Header Image */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Navigation */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Destination Info */}
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{destination.location}</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>
        </div>

        <div className="absolute bottom-6 right-6">
          <button className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors">
            🌊
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-around py-6 bg-white border-b">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Clock className="w-4 h-4 mr-1 text-gray-500" />
          </div>
          <div className="text-sm font-medium text-gray-900">10-12hrs</div>
          <div className="text-xs text-gray-500">Duration</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <MapPin className="w-4 h-4 mr-1 text-gray-500" />
          </div>
          <div className="text-sm font-medium text-gray-900">28km</div>
          <div className="text-xs text-gray-500">Distance</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Star className="w-4 h-4 mr-1 text-gray-500" />
          </div>
          <div className="text-sm font-medium text-gray-900">4.8k</div>
          <div className="text-xs text-gray-500">Reviews</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b bg-white">
        {['Details', 'Route List', 'Reviews'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
            className={`flex-1 py-4 text-center font-medium transition-colors ${
              activeTab === tab.toLowerCase().replace(' ', '')
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">About {destination.name}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {destination.name} is a heart-shaped tropical paradise located in the Mamanuca Islands of Fiji, surrounded by crystal-clear waters and coral reefs. The island spans approximately 29 acres and is known for its luxury surf resort, pristine white sand beaches, and world-famous surfing spots like Cloudbreak, Re...
        </p>

        <h4 className="text-lg font-bold mb-4">Gallery</h4>
        <div className="flex space-x-3 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-20 h-20 bg-gray-200 rounded-lg" />
          ))}
          <button className="text-teal-600 font-medium hover:text-teal-700 ml-auto">
            View all
          </button>
        </div>

        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-2xl text-lg font-medium flex items-center justify-center group">
          <span className="mr-2">+</span>
          Start your trip
          <span className="ml-4 group-hover:translate-x-1 transition-transform">»</span>
        </Button>
      </div>
    </div>
  );
};

export default DestinationDetail;
