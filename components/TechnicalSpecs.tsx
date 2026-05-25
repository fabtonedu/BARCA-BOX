import React from 'react';
import { Download, Github } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface TechnicalSpecsProps {
    theme: 'light' | 'dark';
}

export const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const { t } = useLanguage();
  const sp = t.specs;

  return (
    <section id="tech-specs" className={`py-24 transition-colors duration-500 ${isDark ? 'bg-[#111] text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-6">

            {/* Header */}
            <div className={`mb-16 border-b pb-8 flex flex-col md:flex-row justify-between items-end gap-4 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                <div>
                    <h2 className="text-sm font-bold tracking-widest text-brand-highlight uppercase mb-2">{sp.label}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">{sp.title}</h3>
                </div>
                <div className="text-right">
                    <span className="font-mono text-xs text-gray-500">MODEL: BARCA-X1 // REV. 2.4</span>
                </div>
            </div>

            {/* Hard Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mb-24">

                {/* Column 1: Physical */}
                <div className="space-y-8">
                    <h4 className={`text-lg font-semibold border-l-2 border-brand-highlight pl-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{sp.physical.heading}</h4>
                    <dl className="space-y-6">
                        <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">{sp.physical.dimensions}</dt>
                            <dd className={`font-mono text-xl ${isDark ? 'text-white' : 'text-black'}`}>750 x 450 mm</dd>
                        </div>
                        <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">{sp.physical.material}</dt>
                            <dd className={`font-mono text-lg ${isDark ? 'text-white' : 'text-black'}`}>PLA Filament</dd>
                            <dd className="text-xs text-gray-500">{sp.physical.materialDesc}</dd>
                        </div>
                    </dl>
                </div>

                {/* Column 2: Control & Sensors */}
                <div className="space-y-8">
                    <h4 className={`text-lg font-semibold border-l-2 border-brand-highlight pl-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{sp.control.heading}</h4>
                    <dl className="space-y-6">
                        <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Waveshare ESP-32 S3</dt>
                            <dd className={`font-mono text-lg ${isDark ? 'text-white' : 'text-black'}`}>{sp.control.esp32Label}</dd>
                            <dd className="text-xs text-gray-500">{sp.control.esp32Desc}</dd>
                        </div>
                        <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">DHT22 Szenzor</dt>
                            <dd className={`font-mono text-lg ${isDark ? 'text-white' : 'text-black'}`}>{sp.control.dht22Label}</dd>
                            <dd className="text-xs text-gray-500">{sp.control.dht22Desc}</dd>
                        </div>
                        <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">DS3231 Modul</dt>
                            <dd className={`font-mono text-lg ${isDark ? 'text-white' : 'text-black'}`}>{sp.control.rtcLabel}</dd>
                            <dd className="text-xs text-gray-500">{sp.control.rtcDesc}</dd>
                        </div>
                         <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">SD Kártya Olvasó</dt>
                            <dd className={`font-mono text-lg ${isDark ? 'text-white' : 'text-black'}`}>{sp.control.sdLabel}</dd>
                            <dd className="text-xs text-gray-500">{sp.control.sdDesc}</dd>
                        </div>
                    </dl>
                </div>

                {/* Column 3: Power */}
                <div className="space-y-8">
                    <h4 className={`text-lg font-semibold border-l-2 border-brand-highlight pl-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{sp.power.heading}</h4>
                    <dl className="space-y-6">
                         <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Allpowers 21W Napelem</dt>
                            <dd className={`font-mono text-lg ${isDark ? 'text-white' : 'text-black'}`}>{sp.power.solarLabel}</dd>
                            <dd className="text-xs text-gray-500">{sp.power.solarDesc}</dd>
                        </div>
                        <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Ugreen 20000mAh</dt>
                            <dd className={`font-mono text-lg ${isDark ? 'text-white' : 'text-black'}`}>{sp.power.batteryLabel}</dd>
                            <dd className="text-xs text-gray-500">{sp.power.batteryDesc}</dd>
                        </div>
                        <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">INA219 Modul</dt>
                            <dd className={`font-mono text-lg ${isDark ? 'text-white' : 'text-black'}`}>{sp.power.inaLabel}</dd>
                            <dd className="text-xs text-gray-500">{sp.power.inaDesc}</dd>
                        </div>
                        <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Seetronic USB-C</dt>
                            <dd className={`font-mono text-lg ${isDark ? 'text-white' : 'text-black'}`}>{sp.power.usbLabel}</dd>
                            <dd className="text-xs text-gray-500">{sp.power.usbDesc}</dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* Download / Open Source Section */}
            <div className={`max-w-5xl mx-auto rounded-3xl border overflow-hidden shadow-2xl transition-colors duration-500 ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
                <div className="grid md:grid-cols-2">

                    {/* Left Side: 3D Model Embed */}
                    <div className={`relative h-80 md:h-auto min-h-[350px] ${isDark ? 'bg-gray-900/50' : 'bg-gray-100'}`}>
                        <div className="sketchfab-embed-wrapper w-full h-full relative">
                            <iframe
                                title="BARCA BOX"
                                className="w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                src="https://sketchfab.com/models/98746ef88cb84dbfa32a2e6024337f7c/embed?autospin=1&autostart=1&preload=1&ui_hint=0"
                            />
                            <div className="absolute bottom-2 left-2 text-[10px] text-gray-500 pointer-events-none opacity-50 hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded backdrop-blur-sm">
                                <a href="https://sketchfab.com/3d-models/barca-box-98746ef88cb84dbfa32a2e6024337f7c?utm_medium=embed&utm_campaign=share-popup&utm_content=98746ef88cb84dbfa32a2e6024337f7c" target="_blank" rel="nofollow" className="font-bold text-[#1CAAD9] pointer-events-auto">BARCA BOX</a>
                                <span className="text-[#4A4A4A] mx-1">by</span>
                                <a href="https://sketchfab.com/fusionit.education?utm_medium=embed&utm_campaign=share-popup&utm_content=98746ef88cb84dbfa32a2e6024337f7c" target="_blank" rel="nofollow" className="font-bold text-[#1CAAD9] pointer-events-auto">fusionit.education</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{sp.openSource.title}</h3>
                        <p className={`text-lg mb-8 font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {sp.openSource.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                             {/* Github Button */}
                            <a href="#" className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-colors w-full sm:w-auto ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                                <Github size={20} />
                                GitHub Repo
                            </a>

                            {/* Visual Abstract */}
                            <div className={`hidden sm:block w-28 h-36 rounded-xl border relative overflow-hidden group shrink-0 cursor-pointer transition-colors ${isDark ? 'bg-white/5 border-white/10 hover:border-white/30' : 'bg-black/5 border-black/10 hover:border-black/30'}`} title={sp.openSource.docTooltip}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-white/5' : 'from-black/5'} to-transparent`}></div>
                                <div className={`absolute top-4 left-4 w-16 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>
                                <div className={`absolute top-8 left-4 w-12 h-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
                                <div className={`absolute top-12 left-4 w-12 h-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
                                <div className="absolute bottom-4 right-4 text-brand-highlight bg-brand-highlight/10 p-2 rounded-lg group-hover:bg-brand-highlight/20 transition-colors">
                                    <Download size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
