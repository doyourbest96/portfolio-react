import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;