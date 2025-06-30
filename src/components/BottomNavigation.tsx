
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: '🗺️', label: 'Explore', path: '/explore', active: location.pathname === '/explore' || location.pathname === '/' },
    { icon: '📅', label: 'Trip Plans', path: '/trip-plans', active: location.pathname === '/trip-plans' },
    { icon: '➕', label: 'Add', path: '/add', active: location.pathname === '/add' },
    { icon: '❤️', label: 'Favorite', path: '/favorite', active: location.pathname === '/favorite' },
    { icon: '💬', label: 'Message', path: '/messages', active: location.pathname === '/messages' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex justify-around items-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
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
