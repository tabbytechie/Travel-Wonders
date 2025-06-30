
import React from 'react';
import { ArrowLeft, Heart, MapPin, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import BottomNavigation from '@/components/BottomNavigation';
import { useNavigate } from 'react-router-dom';

const Favorite = () => {
  const navigate = useNavigate();

  const favorites = [
    {
      id: 1,
      name: 'Tavarua Island',
      location: 'Nadi, Fiji',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Swiss Alps',
      location: 'Switzerland',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Maldives Resort',
      location: 'Maldives',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 border-b">
        <div className="flex items-center mb-4">
          <button 
            onClick={() => navigate('/')}
            className="mr-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">Favorites</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {favorites.map((destination) => (
          <Card key={destination.id} className="relative h-[200px] rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${destination.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            
            <div className="absolute top-4 left-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                <span className="text-white text-sm font-medium">{destination.rating}</span>
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <button className="w-10 h-10 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600/80 transition-colors">
                <Heart className="w-5 h-5 text-white fill-white" />
              </button>
            </div>

            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg mb-1">{destination.name}</h4>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{destination.location}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <BottomNavigation />
      <div className="h-20" />
    </div>
  );
};

export default Favorite;
