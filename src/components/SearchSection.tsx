
import React, { useState } from 'react';
import { Search, SlidersHorizontal, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchSection = () => {
  const [activePackage, setActivePackage] = useState('all');
  const navigate = useNavigate();

  const handlePackageClick = (packageType: string) => {
    setActivePackage(packageType);
    
    // Route to different pages based on package type
    switch (packageType) {
      case 'all':
        navigate('/explore');
        break;
      case 'flight':
        navigate('/trip-plans');
        break;
      case 'hotel':
        navigate('/favorite');
        break;
      default:
        navigate('/explore');
    }
  };

  return (
    <div className="bg-white p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Find your<br />
          favorite place
        </h2>
        <Bell className="w-6 h-6 text-gray-600" />
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search Destination, place..."
          className="pl-12 pr-12 py-4 rounded-2xl bg-gray-50 border-0 text-lg"
        />
        <SlidersHorizontal className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {/* Package Selection */}
      <div className="flex space-x-3">
        <Button
          onClick={() => handlePackageClick('all')}
          className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
            activePackage === 'all'
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span className="mr-2">🔗</span>
          All Package
        </Button>
        <Button
          onClick={() => handlePackageClick('flight')}
          className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
            activePackage === 'flight'
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Flight Package
        </Button>
        <Button
          onClick={() => handlePackageClick('hotel')}
          className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
            activePackage === 'hotel'
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Hotel Package
        </Button>
      </div>
    </div>
  );
};

export default SearchSection;
