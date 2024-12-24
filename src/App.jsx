import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/project/:id" element={<MainLayout><ProjectDetailPage /></MainLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;