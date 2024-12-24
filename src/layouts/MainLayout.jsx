import React from 'react';
import Header from '../components/header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;