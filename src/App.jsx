import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/home/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default App;