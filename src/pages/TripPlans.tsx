
import React from 'react';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BottomNavigation from '@/components/BottomNavigation';
import { useNavigate } from 'react-router-dom';

const TripPlans = () => {
  const navigate = useNavigate();

  const trips = [
    {
      id: 1,
      destination: 'Bali, Indonesia',
      dates: 'Dec 15-22, 2024',
      duration: '7 days',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      status: 'Upcoming'
    },
    {
      id: 2,
      destination: 'Tokyo, Japan',
      dates: 'Jan 10-17, 2025',
      duration: '8 days',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      status: 'Planning'
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
          <h1 className="text-2xl font-bold">Trip Plans</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {trips.map((trip) => (
          <Card key={trip.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex space-x-4">
              <div 
                className="w-20 h-20 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${trip.image})` }}
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{trip.destination}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{trip.dates}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{trip.duration}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  trip.status === 'Upcoming' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {trip.status}
                </span>
              </div>
            </div>
          </Card>
        ))}
        
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-2xl">
          Plan New Trip
        </Button>
      </div>

      <BottomNavigation />
      <div className="h-20" />
    </div>
  );
};

export default TripPlans;
