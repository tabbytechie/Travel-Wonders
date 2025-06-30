
import React from 'react';

const BottomNavigation = () => {
  const navItems = [
    { icon: '🗺️', label: 'Explore', active: true },
    { icon: '📅', label: 'Trip Plans', active: false },
    { icon: '➕', label: 'Add', active: false },
    { icon: '❤️', label: 'Favorite', active: false },
    { icon: '💬', label: 'Message', active: false }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex justify-around items-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center space-y-1 transition-colors ${
              item.active ? 'text-teal-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
