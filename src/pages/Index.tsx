
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Explore from './Explore';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to explore page by default
    navigate('/explore', { replace: true });
  }, [navigate]);

  // Return explore component as fallback
  return <Explore />;
};

export default Index;
