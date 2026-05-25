import React from 'react';
import { useLanguage } from '../LanguageContext';

interface FooterProps {
    theme: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const { t } = useLanguage();

  return (
    <footer className={`py-6 text-[10px] uppercase tracking-widest text-center border-t relative z-30 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-gray-600 border-white/5' : 'bg-white text-gray-400 border-gray-100'}`}>
        <p>{t.footer.rights}</p>
    </footer>
  );
};
