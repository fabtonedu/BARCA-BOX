import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scan, Shield, Activity, Box } from 'lucide-react';

interface ExplodedViewProps {
    theme: 'light' | 'dark';
}

export const ExplodedView: React.FC<ExplodedViewProps> = ({ theme }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Fade in the image
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [0.95, 1.05]);

  // Scan line movement
  const scanTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Feature highlights (Text opacity based on scroll position)
  const feature1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]); // Top / Lid
  const feature2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]); // Middle / Foam
  const feature3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0]); // Bottom / Base

  const isDark = theme === 'dark';

  return (
    <section ref={targetRef} className={`relative h-[300vh] transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Section Header */}
        <div className="absolute top-8 left-0 right-0 text-center z-20 px-6">
             <h2 className="text-sm font-semibold tracking-widest text-brand-highlight uppercase mb-2">Felépítés</h2>
             <h3 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Mérnöki Precizitás</h3>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-[80vh]">
          
          {/* LEFT: Dynamic Description Panel */}
          <div className="md:col-span-4 relative h-64 flex flex-col justify-center order-2 md:order-1 z-30">
             
             {/* Highlight 1: Lid & Protection */}
             <motion.div style={{ opacity: feature1Opacity }} className="absolute inset-0 flex flex-col justify-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}>
                    <Shield size={24} />
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Páncélozott Héj</h3>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Ütésálló kompozit fedél hermetikus zárással. A szellőzőnyílások speciális szűrővel vannak ellátva, amely kizárja a port, de engedi a mikroklíma szabályozását.
                </p>
             </motion.div>

             {/* Highlight 2: Core & Sword */}
             <motion.div style={{ opacity: feature2Opacity }} className="absolute inset-0 flex flex-col justify-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}>
                    <Activity size={24} />
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Adaptív Mag</h3>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    A többrétegű szivacsrendszer (EPP) felveszi a lelet formáját. A központi térben a legérzékenyebb tárgyak – például kardok vagy ékszerek – is mozdulatlanul utaznak.
                </p>
             </motion.div>

             {/* Highlight 3: Base & Sensors */}
             <motion.div style={{ opacity: feature3Opacity }} className="absolute inset-0 flex flex-col justify-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}>
                    <Box size={24} />
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Stabil Bázis</h3>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    A doboz alja rejti a szenzorokat és az elektronikát, elszigetelve a lelettől, de folyamatos kapcsolatban a belső légtérrel. Rázkódáselnyelő talpak a terepi stabilitásért.
                </p>
             </motion.div>
          </div>

          {/* RIGHT: The Exploded Image */}
          <div className="md:col-span-8 relative h-full flex items-center justify-center order-1 md:order-2">
            <motion.div 
                style={{ opacity: imageOpacity, scale: imageScale }}
                className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center"
            >
                {/* 
                   High-fidelity exploded view representation.
                */}
                <img 
                  src="https://i.postimg.cc/RCTSpKsZ/Belso-retegek-robbantva-oldalrol.png" 
                  alt="BARCA Exploded View Engineering"
                  className="max-h-full max-w-full object-contain drop-shadow-2xl"
                />

                {/* Scanning Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                    <motion.div 
                        style={{ top: scanTop }}
                        className="absolute left-0 w-full h-[2px] bg-brand-highlight shadow-[0_0_20px_rgba(0,113,227,1)] z-10"
                    />
                    <motion.div 
                        style={{ top: scanTop }}
                        className="absolute left-0 w-full h-24 -translate-y-full bg-gradient-to-t from-brand-highlight/20 to-transparent z-10"
                    />
                </div>
                
                {/* Decorative Grid behind image */}
                <div className={`absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 mask-image-radial-gradient`}></div>
            </motion.div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 ${isDark ? 'text-white/30' : 'text-black/30'}`}>
             <Scan size={20} className="animate-pulse" />
             <span className="text-[10px] uppercase tracking-widest">Görgess a rétegekért</span>
        </div>

      </div>
    </section>
  );
};