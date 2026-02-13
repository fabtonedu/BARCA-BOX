import React from 'react';
import { motion } from 'framer-motion';

interface MaterialItem {
  id: string;
  title: string;
  description: string;
  image: string;
  isRender?: boolean; // Flag for render handling
  zoom?: number; // Optional scaling factor
}

interface MaterialsProps {
    theme: 'light' | 'dark';
}

const steps: MaterialItem[] = [
  {
    id: 's1',
    title: '1. A Megtalálás Pillanata',
    description: 'A legsérülékenyebb perc. A BARCA azonnali, hermetikus védelmet nyújt a környezeti sokk (levegő, napfény) ellen már a gödör partján.',
    image: 'https://i.postimg.cc/cJ324Fhs/Napelem-latszik.png'
  },
  {
    id: 's2',
    title: '2. Adaptív Rögzítés',
    description: 'Nincs két egyforma lelet. A belső moduláris szivacsrendszer felveszi a tárgy formáját, és fizikai kényszer nélkül stabilizálja azt.',
    image: 'https://i.postimg.cc/sg4Zdzdy/Szilikagel-kozeli.png'
  },
  {
    id: 's3',
    title: '3. Védett Transzport',
    description: 'A terepjáró rázkódása vagy a hőingadozás nem jut el a tárgyig. A BARCA passzív klímastabilizátorként viselkedik az út során.',
    image: 'https://i.postimg.cc/MTMTT2Ls/Zar-kozeli.png'
  },
  {
    id: 's4',
    title: '4. Érkezés a Laborba',
    description: 'A leletet a restaurátor pontosan abban a fizikai és kémiai állapotban veszi át, ahogyan az a földből kikerült.',
    image: 'https://i.postimg.cc/RCTSpKsZ/Belso-retegek-robbantva-oldalrol.png',
    isRender: true,
    zoom: 1.35
  }
];

const StepCard: React.FC<{ step: MaterialItem, theme: 'light'|'dark' }> = ({ step, theme }) => {
  const targetScale = step.zoom || 1;
  
  return (
    <div className={`min-h-[80vh] flex items-center justify-center sticky top-0 transition-colors duration-500 border-t ${theme === 'dark' ? 'bg-black border-white/5' : 'bg-white border-gray-100'}`}>
      <div className="relative w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-2 md:order-1"
        >
          <h3 className={`text-3xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {step.title}
          </h3>
          <p className={`text-xl md:text-2xl font-light leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {step.description}
          </p>
        </motion.div>

        <div className={`order-1 md:order-2 relative aspect-video md:aspect-square md:h-[500px] rounded-3xl overflow-hidden border transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
           <motion.img 
             initial={{ scale: targetScale * 1.1, opacity: 0 }}
             whileInView={{ scale: targetScale, opacity: 1 }}
             transition={{ duration: 0.8 }}
             src={step.image} 
             // Removed the random stock photo fallback. 
             // If the image is missing, it will now show the alt text or broken icon, 
             // confirming we are trying to load the specific file, not a random one.
             alt={step.title} 
             className={`w-full h-full transition-all duration-700 
                ${step.isRender 
                    ? `object-contain bg-[#b0b0b0]/10 ${step.zoom ? '' : 'p-4'}` // Remove padding if zoomed
                    : 'object-cover opacity-80 hover:opacity-100' // Styling for lifestyle photos
                }
             `}
           />
           {/* Gradient Overlay only for non-render images */}
           {!step.isRender && (
               <div className={`absolute inset-0 bg-gradient-to-t opacity-60 ${theme === 'dark' ? 'from-black via-transparent to-transparent' : 'from-white via-transparent to-transparent'}`}></div>
           )}
        </div>

      </div>
    </div>
  );
};

export const Materials: React.FC<MaterialsProps> = ({ theme }) => {
  return (
    <section id="materials" className={`relative pt-24 pb-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="text-center mb-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold tracking-widest text-brand-highlight uppercase mb-4">A lelet útja</h2>
        <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>A sártól a múzeumig.</h3>
        <p className={`text-xl font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          A BARCA nem csak egy doboz, hanem egy biztonsági protokoll. Így kíséri végig a leletet a legkritikusabb órákon.
        </p>
      </div>
      {steps.map((s) => (
        <StepCard key={s.id} step={s} theme={theme} />
      ))}
    </section>
  );
};