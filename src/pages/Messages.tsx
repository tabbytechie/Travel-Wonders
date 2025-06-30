
import React, { useState } from 'react';
import { ArrowLeft, Send, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BottomNavigation from '@/components/BottomNavigation';
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Travel Guide - Fiji',
      lastMessage: 'The best time to visit is during dry season!',
      time: '2m ago',
      avatar: '🌴',
      unread: 2
    },
    {
      id: 2,
      name: 'Hotel Concierge',
      lastMessage: 'Your reservation is confirmed for Dec 15th',
      time: '1h ago',
      avatar: '🏨',
      unread: 0
    },
    {
      id: 3,
      name: 'Tour Group - Alps',
      lastMessage: 'Weather looks perfect for hiking tomorrow!',
      time: '3h ago',
      avatar: '🏔️',
      unread: 1
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

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
          <h1 className="text-2xl font-bold">Messages</h1>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search conversations..."
            className="pl-10 rounded-2xl bg-gray-50"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="bg-white">
        {conversations.map((conversation) => (
          <div key={conversation.id} className="flex items-center p-4 border-b hover:bg-gray-50 cursor-pointer">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl mr-4">
              {conversation.avatar}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">{conversation.name}</h3>
                <span className="text-xs text-gray-500">{conversation.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
            </div>
            {conversation.unread > 0 && (
              <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center ml-2">
                <span className="text-white text-xs">{conversation.unread}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Message */}
      <div className="p-6">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-2xl"
          />
          <Button 
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-3"
          >
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>

      <BottomNavigation />
      <div className="h-20" />
    </div>
  );
};

export default Messages;
