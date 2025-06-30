
import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Japan Mountains',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isPopular: true
    },
    {
      id: 2,
      name: 'Swiss Alps',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isPopular: false
    }
  ];

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Popular Destinations</h3>
        <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {destinations.map((destination) => (
          <Card key={destination.id} className="relative h-[200px] rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${destination.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            
            <div className="absolute top-4 left-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-yellow-400 mr-1">⭐</span>
                <span className="text-white text-sm font-medium">{destination.rating}</span>
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Heart className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg">{destination.name}</h4>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
