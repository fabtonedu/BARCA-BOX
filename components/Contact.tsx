import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ContactProps {
    theme: 'light' | 'dark';
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="contact" className={`relative min-h-[80vh] flex flex-col justify-between overflow-hidden border-t pt-20 transition-colors duration-500 ${isDark ? 'bg-black border-white/10' : 'bg-white border-gray-200'}`}>
        
        {/* Main Content Area */}
        <div className="relative z-20 max-w-[1400px] mx-auto w-full px-6 flex flex-col md:flex-row justify-between items-start gap-16">
            
            {/* Left Side: Typography & Links */}
            <div className="flex flex-col items-start">
                <h2 className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 ${isDark ? 'text-white' : 'text-black'}`}>
                    Védelem.<br/>
                    <span className="text-gray-500">Innováció.</span><br/>
                    Jövő.
                </h2>

                {/* Navigation / Social Links */}
                <div className={`flex flex-wrap gap-6 md:gap-8 text-sm font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <a href="mailto:info@fabton.org" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Email</a>
                    <a href="https://www.instagram.com/barca_fabton_2026/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Instagram</a>
                    <a href="https://www.facebook.com/fabtoneducation/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Facebook</a>
                    <a href="https://www.linkedin.com/company/93211161/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>LinkedIn</a>
                </div>
            </div>

            {/* Right Side: CTA Card */}
            <a 
                href="mailto:info@fabton.org"
                className="group relative w-full md:w-[400px] bg-brand-highlight hover:bg-blue-600 transition-all duration-300 p-8 md:p-10 flex flex-col justify-between min-h-[200px] md:min-h-[240px] cursor-pointer"
            >
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Partneri Együttműködés</h3>
                    <p className="text-blue-100 text-sm leading-relaxed max-w-[90%]">
                        Intézmények, kutatók és múzeumok jelentkezését várjuk. Építsük együtt a jövő régészetét.
                    </p>
                </div>
                
                <div className="flex items-center justify-between mt-8">
                    <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Kapcsolatfelvétel</span>
                    <ArrowUpRight className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
            </a>
        </div>

        {/* Giant Background Text */}
        <div className="relative w-full mt-20 md:mt-0 select-none pointer-events-none flex justify-center items-end">
            <h1 className={`text-[25vw] leading-none font-bold tracking-tighter translate-y-[10%] ${isDark ? 'text-white/5' : 'text-black/5'}`}>
                BARCA
            </h1>
        </div>

    </section>
  );
};