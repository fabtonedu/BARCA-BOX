import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
    theme: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Streamable Embed handling */}
        <div className="absolute inset-0 overflow-hidden">
             <iframe 
                src="https://streamable.com/e/5lqabd?autoplay=1&muted=1&loop=1&controls=0&nocontrols=1"
                className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 opacity-70"
                allow="autoplay; encrypted-media"
                title="Background Video"
                style={{ pointerEvents: 'none' }}
            />
        </div>
        
        {/* Gradient Overlay - Significantly lightened to let the video shine through */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
            theme === 'dark' 
                ? 'bg-gradient-to-b from-black/40 via-transparent to-black/80' 
                : 'bg-gradient-to-b from-black/20 via-transparent to-black/60' 
        }`} />

        {/* Continuous Looping Sensor/Grid Animation - Minimal opacity */}
        <motion.div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            initial={{ backgroundPosition: "0px 0px" }}
            animate={{ backgroundPosition: "40px 40px" }}
            transition={{ 
                duration: 5, 
                ease: "linear", 
                repeat: Infinity 
            }}
            style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
            }}
        />

        {/* Scanning Line Effect */}
        <motion.div 
            className="absolute left-0 w-full h-[1px] bg-brand-highlight/30 shadow-[0_0_15px_rgba(0,113,227,0.4)] z-0 pointer-events-none"
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ 
                duration: 4, 
                ease: "linear", 
                repeat: Infinity 
            }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-bold tracking-tight text-white mb-4 drop-shadow-xl"
        >
          BARCA
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-medium text-gray-100 mb-8 drop-shadow-md"
        >
          A leletek biztonsága a legfontosabb.
        </motion.h2>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-sm"
        >
            Megóvja, stabilizálja és dokumentálja a frissen talált régészeti leleteket – már az első pillanattól.
        </motion.p>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
            <a href="#overview" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full text-white flex items-center gap-2 group cursor-pointer text-lg font-medium transition-all">
                Tudj meg többet <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </motion.div>
      </div>
    </section>
  );
};