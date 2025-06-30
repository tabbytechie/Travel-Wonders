
import React, { useState } from 'react';
import TravelHeader from '@/components/TravelHeader';
import SearchSection from '@/components/SearchSection';
import NatureSection from '@/components/NatureSection';
import PopularDestinations from '@/components/PopularDestinations';
import DestinationDetail from '@/components/DestinationDetail';
import BottomNavigation from '@/components/BottomNavigation';

const Index = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const sampleDestination = {
    name: 'Tavarua Island',
    location: 'Nadi, Fiji',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
  };

  const handleDestinationClick = () => {
    setSelectedDestination(sampleDestination);
  };

  const handleBackToMain = () => {
    setSelectedDestination(null);
  };

  if (selectedDestination) {
    return (
      <DestinationDetail 
        destination={selectedDestination} 
        onBack={handleBackToMain}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TravelHeader />
      
      <div className="space-y-0">
        <SearchSection />
        
        <div onClick={handleDestinationClick}>
          <NatureSection />
        </div>
        
        <div onClick={handleDestinationClick}>
          <PopularDestinations />
        </div>
      </div>

      <BottomNavigation />
      
      {/* Bottom padding to account for fixed navigation */}
      <div className="h-20" />
    </div>
  );
};

export default Index;
