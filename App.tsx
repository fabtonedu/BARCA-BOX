import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Materials } from './components/Materials';
import { ExplodedView } from './components/ExplodedView';
import { CircuitDesign } from './components/CircuitDesign';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Initial theme setup
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Update HTML class for Tailwind dark mode
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-brand-highlight selection:text-white ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero theme={theme} />
        <ProblemSolution theme={theme} />
        <Materials theme={theme} />
        <Features theme={theme} />
        <ExplodedView theme={theme} />
        <CircuitDesign theme={theme} />
        <TechnicalSpecs theme={theme} />
        <Testimonials theme={theme} />
        <Contact theme={theme} />
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default App;