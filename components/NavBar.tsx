import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavBarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#overview', text: 'Áttekintés' },
    { href: '#materials', text: 'A lelet útja' },
    { href: '#features', text: 'Funkciók' },
    { href: '#tech-specs', text: 'Specifikációk' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <span className={`font-bold text-xl tracking-wide transition-colors ${isScrolled || isMobileMenuOpen ? 'text-gray-900 dark:text-white' : 'text-white'}`}>BARCA</span>
        </div>

        <div className={`hidden md:flex items-center gap-8 text-xs font-medium transition-colors ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-brand-highlight dark:hover:text-white transition-colors">{link.text}</a>
          ))}
          <a href="#contact" className="bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-1.5 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
            Kapcsolat
          </a>
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-200 dark:hover:bg-white/10' : 'hover:bg-white/10 text-white'}`}
            title={theme === 'dark' ? "Váltás világos módra" : "Váltás sötét módra"}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme}
                className={`p-2 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
            className={`transition-colors ${isScrolled || isMobileMenuOpen ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 p-6 flex flex-col gap-6 md:hidden">
          {navLinks.map(link => (
             <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-800 dark:text-gray-300">{link.text}</a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-900 dark:text-white">Kapcsolat</a>
        </div>
      )}
    </nav>
  );
};