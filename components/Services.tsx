import React from 'react';
import { Check, Sparkles, Star, Cat } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    "Bath with premium shampoo",
    "Teeth brushing",
    "Nail trim & filing",
    "Ear cleaning",
    "Nose & paw moisturizing",
    "Full coat brush out & style"
  ];

  const specialServices = ["Dematting", "De-Shedding", "Sensitive Skin", "Deep Hydration"];

  return (
    <div id="services" className="bg-brand-primary py-20 md:py-28 relative overflow-hidden">
      
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-fun">Full-Service Grooming</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Everything your pet needs in one convenient appointment at your doorstep.
          </p>
        </div>

        {/* Main Content - Clean Layout */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
          
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {services.map((service, i) => (
              <div key={i} className="flex items-center gap-2 text-white">
                <Check className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                <span className="text-sm md:text-base">{service}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Specialized + Tartar + Cats Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {specialServices.map((item, i) => (
              <span key={i} className="bg-white/20 px-4 py-2 rounded-full text-sm text-white">
                {item}
              </span>
            ))}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 px-4 py-2 rounded-full text-sm font-bold text-brand-dark flex items-center gap-1 shadow-lg">
              <Star className="w-4 h-4" /> Non-Anesthetic Tartar Removal
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-brand-primary flex items-center gap-1">
              <Cat className="w-4 h-4" /> Cats Welcome
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Pricing - Simple */}
          <div className="text-center">
            <p className="text-blue-100 mb-2">Prices starting at</p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-white">$105</span>
              <span className="text-blue-200 text-sm text-left">varies by pet size<br/>and coat condition</span>
            </div>
            <button 
              className="bg-brand-secondary hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth'})}
            >
              Get Quote & $15 Off
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </div>
  );
};