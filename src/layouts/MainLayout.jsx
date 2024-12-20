import React from 'react';
import Header from '../components/header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;