import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FeaturesProps {
    theme: 'light' | 'dark';
}

const features = [
  {
    id: 'f1',
    title: 'Stabil mikroklíma',
    description: 'A belső tér úgy van kialakítva, hogy a leletet minimális környezeti ingadozás érje, csökkentve az oxidáció és a hirtelen anyagváltozás kockázatát.',
    image: 'https://i.postimg.cc/T1SYvkQX/Belso-retegek-egyutt.png'
  },
  {
    id: 'f2',
    title: 'Védett rögzítés',
    description: 'A moduláris belső elrendezés a leleteket biztonságosan, mégis kíméletesen fogja meg – nincs felesleges mozgás, nincs ütközés.',
    image: 'https://i.postimg.cc/9f3R7fd4/Fogo-kozeli.png'
  },
  {
    id: 'f3',
    title: 'Szenzorvezérelt figyelés',
    description: 'Integrált szenzorok figyelik a páratartalmat, hőmérsékletet és fényviszonyokat, és lehetőséget adnak a későbbi adatnaplózásra.',
    image: 'https://i.postimg.cc/J4kRB5Pd/Elektronika-dobozban.png'
  },
  {
    id: 'f4',
    title: 'Terepre tervezett kialakítás',
    description: 'Könnyű, mégis masszív, könnyen tisztítható, esőben, sárban, terepjáró csomagtartójában is otthon érzi magát.',
    image: 'https://i.postimg.cc/28Q8KxvP/Robantott-osszes.png'
  },
  {
    id: 'f5',
    title: 'Dokumentációra kész',
    description: 'A BARCA használata egységes működést kényszerít ki: minden lelethez tartozik hely, idő, megtaláló és állapot – semmi sem vész el útközben.',
    image: 'https://i.postimg.cc/G3kCLm25/salalala.jpg'
  }
];

const AccordionItem: React.FC<{
  feature: (typeof features)[0];
  isOpen: boolean;
  onToggle: () => void;
  theme: 'light' | 'dark';
}> = ({ feature, isOpen, onToggle, theme }) => {
  return (
    <div className={`py-4 border-b last:border-b-0 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
      <motion.button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-4">
          <div className={`flex items-center justify-center w-7 h-7 rounded-full border ${theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'}`}>
            <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
              <Plus size={16} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} />
            </motion.div>
          </div>
          <span className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{feature.title}</span>
        </div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className={`pl-11 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {feature.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Features: React.FC<FeaturesProps> = ({ theme }) => {
  const [openId, setOpenId] = useState<string | null>(features[0].id);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const activeImage = features.find(f => f.id === openId)?.image || features[0].image;

  return (
    <section id="features" className={`py-24 sm:py-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold tracking-widest text-brand-highlight uppercase mb-4">Funkciók</h2>
            <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Minden részlete a leletekért dolgozik.</h3>
            <p className={`text-xl font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Nem csupán egy doboz. A BARCA egy precízen megtervezett rendszer, amely a terepi valóságra reagál.
            </p>
        </div>

        <div className={`backdrop-blur-xl border rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl transition-colors duration-500 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white shadow-brand-highlight/10' : 'bg-white/80 border-gray-200 text-gray-900 shadow-gray-200'}`}>
            <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            {/* Left Column: Accordion */}
            <div className="w-full md:col-span-3">
                {features.map((feature) => (
                <AccordionItem
                    key={feature.id}
                    feature={feature}
                    isOpen={openId === feature.id}
                    onToggle={() => handleToggle(feature.id)}
                    theme={theme}
                />
                ))}
            </div>

            {/* Right Column: Sticky Image */}
            <div className="sticky top-28 h-[24rem] md:h-[28rem] hidden md:block md:col-span-2">
                <div className={`relative w-full h-full rounded-2xl flex items-center justify-center overflow-hidden border ${theme === 'dark' ? 'bg-black/20 border-white/10' : 'bg-gray-100 border-black/5'}`}>
                <AnimatePresence mode="wait">
                    <motion.img
                    key={activeImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    src={activeImage}
                    alt={features.find(f => f.image === activeImage)?.title || 'BARCA product'}
                    className="absolute w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/5' : 'from-white/5'} to-transparent`}></div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};