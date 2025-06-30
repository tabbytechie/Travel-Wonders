
import React from 'react';
import TravelHeader from '@/components/TravelHeader';
import SearchSection from '@/components/SearchSection';
import NatureSection from '@/components/NatureSection';
import PopularDestinations from '@/components/PopularDestinations';
import BottomNavigation from '@/components/BottomNavigation';

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TravelHeader />
      
      <div className="space-y-0">
        <SearchSection />
        <NatureSection />
        <PopularDestinations />
      </div>

      <BottomNavigation />
      
      {/* Bottom padding to account for fixed navigation */}
      <div className="h-20" />
    </div>
  );
};

export default Explore;
