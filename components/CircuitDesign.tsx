import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Database, Thermometer, Sun, Clock } from 'lucide-react';

interface CircuitDesignProps {
    theme: 'light' | 'dark';
}

export const CircuitDesign: React.FC<CircuitDesignProps> = ({ theme }) => {
  // Use specific dark shades to match the site's professional aesthetic
  const blueprintBg = "bg-[#050505]"; // Deepest black/gray
  const blueprintBorder = "border-white/10";

  return (
    <section className={`relative py-32 overflow-hidden border-t transition-colors duration-500 ${theme === 'dark' ? 'bg-black border-white/5' : 'bg-white border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Content */}
        <div className="text-center mb-16 max-w-4xl mx-auto z-10 relative">
            <h2 className="text-sm font-semibold tracking-widest text-brand-highlight uppercase mb-4">Elektronika</h2>
            <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>A BARCA digitális idegrendszere.</h3>
            <p className={`text-xl font-light leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Nem csak egy doboz. Egy önállóan gondolkodó védelmi egység. 
                A redundáns áramkörök gondoskodnak arról, hogy a szenzoradatok és a védelem áramkimaradás esetén is aktívak maradjanak.
            </p>
        </div>

        {/* Schematic Visualization */}
        <div className={`relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[16/10] rounded-3xl overflow-hidden border shadow-2xl transition-all duration-500 ${blueprintBg} ${blueprintBorder} shadow-brand-highlight/5`}>
            
            {/* The Circuit Image - Clean Technical Style */}
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                <motion.div
                    className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    {/* 
                        Image Processing:
                        - invert: Black lines -> White lines for blueprint look
                        - grayscale: Remove any color noise
                        - mix-blend-screen: Removes the black background cleanly
                        - brightness/contrast: Enhance visibility of thin lines
                    */}
                    <img 
                        src="https://i.postimg.cc/FK3f1YrX/A4-1-(5).png" 
                        alt="BARCA Wiring Diagram"
                        className="w-[90%] h-[90%] object-contain invert grayscale brightness-[1.1] contrast-[1.1] mix-blend-screen opacity-90" 
                    />
                </motion.div>
            </div>

            {/* Grid Overlay - Very subtle, precise engineering grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            {/* Scanning Line Animation - Brand Blue */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-[2px] bg-brand-highlight/40 shadow-[0_0_20px_rgba(0,113,227,0.6)] z-20"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            />
            
            {/* Vignette - Seamless blend into card edges */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/10 to-[#050505]/90 pointer-events-none"></div>

            {/* --- HOTSPOTS (Mapped to Schematic Layout) --- */}
            
            {/* 1. SOLAR (Top Center - The 3 Panels) */}
            <div className="absolute top-[18%] left-[50%] -translate-x-1/2 flex items-center justify-center gap-2 group/spot">
                <div className="relative cursor-pointer">
                    <div className="w-3 h-3 bg-brand-highlight rounded-full animate-ping absolute opacity-75"></div>
                    <div className="w-3 h-3 bg-brand-highlight rounded-full relative z-10 border-2 border-[#050505] shadow-[0_0_15px_rgba(0,113,227,0.8)]"></div>
                </div>
                <div className="absolute top-8 hidden md:flex flex-col w-40 bg-[#111]/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10 text-xs shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity z-30 pointer-events-none text-white text-center">
                    <span className="text-brand-highlight font-bold flex items-center justify-center gap-2 mb-1"><Sun size={12}/> Energia</span>
                    <span className="text-gray-400">Napelem Tömb (21W)</span>
                </div>
            </div>

            {/* 2. INA219 (Mid Left/Center - Small module below solar) */}
            <div className="absolute top-[42%] left-[38%] flex items-center gap-2 group/spot">
                <div className="relative cursor-pointer">
                    <div className="w-3 h-3 bg-brand-highlight rounded-full animate-ping absolute opacity-75"></div>
                    <div className="w-3 h-3 bg-brand-highlight rounded-full relative z-10 border-2 border-[#050505] shadow-[0_0_15px_rgba(0,113,227,0.8)]"></div>
                </div>
                <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col w-40 bg-[#111]/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10 text-xs shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity z-30 pointer-events-none text-left text-white">
                    <span className="text-brand-highlight font-bold flex items-center gap-2 mb-1"><Zap size={12}/> Töltésvezérlés</span>
                    <span className="text-gray-400">INA219<br/>Fogyasztásmérés</span>
                </div>
            </div>

            {/* 3. ESP32 (Bottom Left - The large vertical board) */}
            <div className="absolute bottom-[25%] left-[18%] flex items-center justify-center gap-2 group/spot">
                <div className="relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full animate-ping absolute opacity-50"></div>
                    <div className="w-4 h-4 bg-white rounded-full relative z-10 border-4 border-[#050505] shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
                </div>
                <div className="absolute bottom-8 hidden md:flex flex-col w-48 bg-[#111]/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10 text-xs shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity z-30 pointer-events-none text-white text-center">
                    <span className="text-white font-bold flex items-center justify-center gap-2 mb-1"><Cpu size={12}/> Központi Egység</span>
                    <span className="text-gray-400">Waveshare ESP32<br/>Logika és Vezérlés</span>
                </div>
            </div>

             {/* 4. RTC (Mid Right - Small square module) */}
             <div className="absolute top-[52%] left-[62%] flex items-center gap-2 group/spot">
                <div className="relative cursor-pointer">
                    <div className="w-3 h-3 bg-brand-highlight rounded-full animate-ping absolute opacity-75"></div>
                    <div className="w-3 h-3 bg-brand-highlight rounded-full relative z-10 border-2 border-[#050505] shadow-[0_0_15px_rgba(0,113,227,0.8)]"></div>
                </div>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col w-40 bg-[#111]/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10 text-xs shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity z-30 pointer-events-none text-right text-white">
                    <span className="text-brand-highlight font-bold flex items-center justify-end gap-2 mb-1">Időzítés <Clock size={12}/></span>
                    <span className="text-gray-400">DS3231 RTC<br/>Precíziós óra</span>
                </div>
            </div>

             {/* 5. SD CARD (Bottom Right Center - Rectangular module) */}
             <div className="absolute bottom-[22%] left-[60%] flex items-center gap-2 group/spot">
                <div className="relative cursor-pointer">
                    <div className="w-3 h-3 bg-brand-highlight rounded-full animate-ping absolute opacity-75"></div>
                    <div className="w-3 h-3 bg-brand-highlight rounded-full relative z-10 border-2 border-[#050505] shadow-[0_0_15px_rgba(0,113,227,0.8)]"></div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col w-40 bg-[#111]/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10 text-xs shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity z-30 pointer-events-none text-center text-white">
                    <span className="text-brand-highlight font-bold flex items-center justify-center gap-2 mb-1"><Database size={12}/> Adattárolás</span>
                    <span className="text-gray-400">Micro SD<br/>Offline mentés</span>
                </div>
            </div>

            {/* 6. DHT22 (Far Right - The probes) */}
            <div className="absolute bottom-[35%] right-[12%] flex items-center gap-2 group/spot">
                <div className="relative cursor-pointer">
                    <div className="w-3 h-3 bg-brand-highlight rounded-full animate-ping absolute opacity-75"></div>
                    <div className="w-3 h-3 bg-brand-highlight rounded-full relative z-10 border-2 border-[#050505] shadow-[0_0_15px_rgba(0,113,227,0.8)]"></div>
                </div>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col w-40 bg-[#111]/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10 text-xs shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity z-30 pointer-events-none text-right text-white">
                    <span className="text-brand-highlight font-bold flex items-center justify-end gap-2 mb-1">Klímafigyelés <Thermometer size={12}/></span>
                    <span className="text-gray-400">DHT22 Szenzor<br/>Hő & Pára</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};