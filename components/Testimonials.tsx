import React from 'react';
import { useLanguage } from '../LanguageContext';

interface Testimonial {
  id: string;
  name: string;
  roleKey: keyof ReturnType<typeof useLanguage>['t']['testimonials']['roles'];
  image: string;
}

interface TestimonialsProps {
    theme: 'light' | 'dark';
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'K. Bereczki Judith',
    roleKey: 't1',
    image: 'https://csikimuzeum.ro/storage/app/uploads/public/328/0bc/7fc/thumb__1920_0_0_0_auto.jpg',
  },
  {
    id: 't2',
    name: 'Botár István',
    roleKey: 't2',
    image: 'https://www.csikimuzeum.ro/storage/app/uploads/public/4a2/d17/377/thumb__710_947_0_0_crop.jpg',
  },
  {
    id: 't3',
    name: 'Ștefan Bișag',
    roleKey: 't3',
    image: 'https://i.postimg.cc/vT20SqxC/Rares-Bisag-1.png',
  },
  {
    id: 't4',
    name: 'Mara Zsuzsanna',
    roleKey: 't4',
    image: 'https://i.postimg.cc/fR98BvW0/image-32.png',
  },
  {
    id: 't5',
    name: 'Salamon Alpár',
    roleKey: 't5',
    image: 'https://i.postimg.cc/DwQJ1TBm/010203foto-FSA.jpg',
  }
];

const TestimonialCard: React.FC<{ data: Testimonial; role: string; theme: 'light' | 'dark' }> = ({ data, role, theme }) => {
    const isDark = theme === 'dark';
    return (
        <div className={`group relative rounded-3xl overflow-hidden border transition-colors flex flex-col sm:flex-row h-[280px] ${isDark ? 'bg-[#0a0a0a] border-white/5 hover:border-white/10' : 'bg-gray-100 border-gray-200 hover:border-gray-300'}`}>

            {/* Image Section */}
            <div className="w-full sm:w-2/5 h-full relative overflow-hidden">
                <img
                    src={data.image}
                    alt={data.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-r to-transparent sm:via-transparent ${isDark ? 'from-transparent to-[#0a0a0a]/90 sm:to-[#0a0a0a]' : 'from-transparent to-gray-100/90 sm:to-gray-100'}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-t to-transparent sm:hidden ${isDark ? 'from-[#0a0a0a]' : 'from-gray-100'}`}></div>
            </div>

            {/* Content Section */}
            <div className="absolute bottom-0 left-0 right-0 sm:static sm:w-3/5 p-6 md:p-8 flex flex-col justify-center relative z-10">
                <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{role}</div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{data.name}</h3>
                </div>
            </div>
        </div>
    );
};

export const Testimonials: React.FC<TestimonialsProps> = ({ theme }) => {
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section className={`py-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-[1400px] mx-auto px-6">

            {/* Header */}
            <div className="max-w-4xl mb-20">
                <h2 className="text-sm font-semibold tracking-widest text-brand-highlight uppercase mb-4">{tm.label}</h2>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    {tm.title}
                </h3>
            </div>

            {/* Grid of Testimonials */}
            <div className="grid md:grid-cols-2 gap-6 mb-32">
                {testimonials.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.id}
                        data={testimonial}
                        role={tm.roles[testimonial.roleKey]}
                        theme={theme}
                    />
                ))}
            </div>

            {/* Logos Section */}
            <div className={`border-t pt-16 text-center ${theme === 'dark' ? 'border-gray-900' : 'border-gray-200'}`}>
                 <p className="text-xs text-gray-600 uppercase tracking-widest mb-10">{tm.partners}</p>
                <div className={`flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 ${theme === 'light' ? 'invert' : ''}`}>
                    <img
                        src="https://i.postimg.cc/9fKChHBN/hu-white-half.png"
                        alt="Partner Logo"
                        className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className={`h-8 md:h-10 w-32 rounded opacity-20 hover:opacity-40 transition-opacity ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}></div>
                    <div className={`h-8 md:h-10 w-32 rounded opacity-20 hover:opacity-40 transition-opacity ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}></div>
                </div>
            </div>
        </div>
    </section>
  );
};
