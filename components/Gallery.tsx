import React from 'react';
import { Section } from './Section';
import { BeforeAfterItem } from '../types';

const galleryItems: BeforeAfterItem[] = [
  {
    id: 1,
    petName: "Max",
    description: "Golden Doodle, looking sharp after his full-service grooming.",
    beforeImg: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&auto=format&fit=crop&q=60", 
    afterImg: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&auto=format&fit=crop&q=60" 
  },
  {
    id: 2,
    petName: "Bella",
    description: "Maltese, pampered to perfection.",
    beforeImg: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea92f5?w=600&auto=format&fit=crop&q=60", 
    afterImg: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&auto=format&fit=crop&q=60" 
  },
  {
    id: 3,
    petName: "Whiskers",
    description: "Our feline friend, feeling fresh with a professional trim.",
    beforeImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=60", 
    afterImg: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&auto=format&fit=crop&q=60" 
  }
];

export const Gallery: React.FC = () => {
  return (
    <Section id="gallery" pattern>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-fun">Before & After</h2>
        <p className="text-gray-600 text-lg">Explore our gallery of happy clients. We bring out the best in every pet!</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-72 flex">
                <div className="w-1/2 relative group border-r border-white">
                    <img src={item.beforeImg} alt={`${item.petName} Before`} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-gray-900/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">BEFORE</div>
                </div>
                <div className="w-1/2 relative">
                    <img src={item.afterImg} alt={`${item.petName} After`} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-brand-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">AFTER</div>
                </div>
                
                {/* Interactive slider hint */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/50">
                        <div className="w-1 h-8 bg-white/80 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-2xl text-brand-primary font-fun">{item.petName}</h3>
                <div className="h-1 w-12 bg-brand-secondary rounded-full"></div>
              </div>
              <p className="text-gray-600 italic">"{item.description}"</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-xs text-gray-400 mt-12">*Images are for demonstration.</p>
    </Section>
  );
};