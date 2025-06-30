
import React from 'react';
import { Card } from '@/components/ui/card';

const NatureSection = () => {
  const destinations = [
    {
      id: 1,
      name: 'Tavarua Island',
      location: 'Nadi, Fiji',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Alfsee',
      location: 'Costa Blanca, Spain',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Maarashi',
      location: 'Maldives',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Spend little time in nature</h3>
        <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
          View All
        </button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4">
        {destinations.map((destination) => (
          <Card key={destination.id} className="relative min-w-[280px] h-[200px] rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${destination.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg mb-1">{destination.name}</h4>
              <p className="text-sm text-white/80 mb-2">{destination.location}</p>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">⭐</span>
                <span className="text-sm font-medium">{destination.rating}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NatureSection;
