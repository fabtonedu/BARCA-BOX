import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { AlertTriangle, ShieldCheck, Droplets, Activity } from 'lucide-react';

interface ProblemSolutionProps {
    theme: 'light' | 'dark';
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isSolutionState, setIsSolutionState] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsSolutionState(latest >= 0.5);
  });

  // --- THEME AWARE TRANSFORMS ---
  const isDark = theme === 'dark';

  // Background transition: 
  // Dark mode: Red (#240505) -> Black (#050505)
  // Light mode: Light Red (#fee2e2) -> White (#ffffff)
  const bgColor = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    isDark ? ["#240505", "#050505"] : ["#fee2e2", "#ffffff"]
  );

  const accentColor = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    ["#ef4444", "#0071e3"]
  );

  // Text color needs to be inverted for light mode (except when solution state is active in dark mode)
  // We'll handle text color via CSS classes based on `theme` prop mostly, but HUD needs dynamic color
  const hudColor = accentColor; 

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.9]);
  const shieldOpacity = useTransform(scrollYProgress, [0.3, 0.5, 1], [0, 1, 1]);
  const shieldScale = useTransform(scrollYProgress, [0.3, 0.6], [1.2, 1]);

  return (
    <section ref={containerRef} className="relative h-[345vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        <motion.div 
            style={{ backgroundColor: bgColor }} 
            className="absolute inset-0 transition-colors duration-500"
        >
            {/* Grid pattern removed here */}
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center z-10">
            
            {/* HUD */}
            <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
                <motion.div 
                    style={{ color: hudColor }}
                    className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 space-y-8 font-mono text-sm md:text-base"
                >
                    <div className="flex items-center gap-3">
                        <Droplets />
                        <div className="flex flex-col">
                            <span className="opacity-50 text-xs uppercase">Páratartalom</span>
                            <DataValue isSolution={isSolutionState} type="humid" />
                        </div>
                    </div>
                </motion.div>

                 <motion.div 
                    style={{ color: hudColor }}
                    className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 space-y-8 font-mono text-sm md:text-base text-right"
                >
                    <div className="flex items-center justify-end gap-3">
                        <div className="flex flex-col">
                            <span className="opacity-50 text-xs uppercase">Stabilitás</span>
                            <DataValue isSolution={isSolutionState} type="stab" />
                        </div>
                        <Activity />
                    </div>
                </motion.div>
            </div>

            {/* CENTRAL OBJECT */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                
                <motion.div 
                    style={{ opacity: shieldOpacity, scale: shieldScale, borderColor: accentColor }}
                    className={`absolute inset-0 rounded-3xl border-2 backdrop-blur-sm z-20 shadow-[0_0_50px_rgba(0,113,227,0.2)] ${isDark ? 'bg-white/5' : 'bg-black/5'}`}
                >
                     <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-current rounded-tl-xl"></div>
                     <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-current rounded-tr-xl"></div>
                     <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-current rounded-bl-xl"></div>
                     <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-current rounded-br-xl"></div>
                </motion.div>

                <ShakeWrapper isShaking={!isSolutionState}>
                    <motion.div 
                        style={{ scale }}
                        className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl shadow-2xl relative z-10 flex items-center justify-center border border-amber-600/30"
                    >
                        <div className="w-full h-full opacity-30 bg-[radial-gradient(circle,transparent_20%,#000_120%)]"></div>
                        <span className="absolute text-amber-200/50 font-serif text-4xl">?</span>
                    </motion.div>
                </ShakeWrapper>

                <div 
                    className={`absolute inset-0 bg-red-500/20 rounded-full blur-3xl -z-10 transition-opacity duration-500 ${!isSolutionState ? 'animate-pulse opacity-100' : 'opacity-0'}`}
                />
            </div>

            {/* TEXT CONTENT */}
            <div className="absolute bottom-20 text-center px-6 max-w-2xl [transform:translateZ(0)] w-full">
                {/* PROBLEM */}
                <div 
                    className={`transition-opacity duration-700 ease-in-out ${!isSolutionState ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="inline-flex items-center gap-2 text-red-500 mb-4 px-4 py-1 rounded-full bg-red-500/10 border border-red-500/30">
                        <AlertTriangle size={18} />
                        <span className="font-bold tracking-wider text-sm uppercase">Kritikus Állapot</span>
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>A múlt sérülékeny.</h2>
                    <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Rázkódás. Oxidáció. <br/>A leletek minden másodpercben veszítenek értékükből.</p>
                </div>

                {/* SOLUTION */}
                <div 
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isSolutionState ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="inline-flex items-center gap-2 text-brand-highlight mb-4 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
                        <ShieldCheck size={18} />
                        <span className="font-bold tracking-wider text-sm uppercase">Védelem Aktív</span>
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>A megoldás stabil.</h2>
                    <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Zárt mikroklíma. Fizikai védelem. <br/>Minden adat rögzítve az utókor számára.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ShakeWrapper: React.FC<{ isShaking: boolean, children: React.ReactNode }> = ({ isShaking, children }) => {
    return (
        <div className={isShaking ? "animate-shake" : "transition-transform duration-500"}>
            {children}
        </div>
    );
};

const DataValue: React.FC<{ isSolution: boolean, type: 'temp'|'humid'|'stab' }> = ({ isSolution, type }) => {
    const [val, setVal] = useState("");

    useEffect(() => {
        let intervalId: number | undefined;

        if (!isSolution) {
            intervalId = window.setInterval(() => {
                if (type === 'temp') setVal((20 + Math.random() * 15).toFixed(1) + "°C");
                if (type === 'humid') setVal((40 + Math.random() * 40).toFixed(0) + "%");
                if (type === 'stab') setVal("KRITIKUS");
            }, 150);
        } else {
            if (type === 'temp') setVal("22.0°C");
            if (type === 'humid') setVal("45%");
            if (type === 'stab') setVal("OPTIMÁLIS");
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isSolution, type]); 

    return <span className="font-bold text-xl tracking-wider min-w-[80px] inline-block">{val}</span>;
};