import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  petName: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  isHighlight?: boolean;
  imgPosition?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    petName: "Tartar Removal",
    description: "Safe, non-anesthetic dental cleaning<br/>for healthier teeth.",
    beforeImg: "/offer/tartar before.webp",
    afterImg: "/offer/tartar after.webp",
    isHighlight: true
  },
  {
    id: 2,
    petName: "Full Grooming",
    description: "Complete transformation with bath,<br/>haircut, and styling.",
    beforeImg: "/offer/dog 1 before.webp",
    afterImg: "/offer/dog 1 after.webp"
  },
  {
    id: 3,
    petName: "Coat Refresh",
    description: "De-matting and professional<br/>coat care.",
    beforeImg: "/offer/dog 2 before.webp",
    afterImg: "/offer/dog 2 after.webp"
  },
  {
    id: 4,
    petName: "Style & Trim",
    description: "Breed-specific cuts with<br/>attention to detail.",
    beforeImg: "/offer/dog 3 before.webp",
    afterImg: "/offer/dog 3 after.webp"
  }
];

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(galleryItems[(currentIndex + i) % galleryItems.length]);
    }
    return items;
  };

  return (
    <Section id="gallery" pattern>
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-fun">Real Results</h2>
        <p className="text-gray-600 text-lg">See the amazing transformations from our mobile grooming sessions!</p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 md:p-3 hover:bg-gray-50 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-brand-primary" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 md:p-3 hover:bg-gray-50 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-brand-primary" />
        </button>

        {/* Cards Grid */}
        <div className={`grid gap-6 px-6 md:px-8 lg:px-4 ${visibleCount === 3 ? 'grid-cols-3' : visibleCount === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {getVisibleItems().map((item, index) => (
            <div 
              key={`${currentIndex}-${index}`}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-500 ${
                item.isHighlight ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-gray-100'
              }`}
            >
              <div className="relative flex h-[320px]">
                <div className="w-1/2 relative border-r border-white h-full">
                  <img src={item.beforeImg} alt={`${item.petName} Before`} className="w-full h-[320px] object-cover" />
                  <div className="absolute top-2 left-2 bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full">BEFORE</div>
                </div>
                <div className="w-1/2 relative h-full">
                  <img src={item.afterImg} alt={`${item.petName} After`} className="w-full h-[320px] object-cover" />
                  <div className="absolute top-2 right-2 bg-brand-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">AFTER</div>
                </div>
              </div>
              
              <div className="p-4 bg-white text-center">
                {item.isHighlight && (
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-brand-dark px-3 py-1 rounded-full font-bold text-xs mb-2">
                    <Star className="w-3 h-3 fill-current" /> Premium <Star className="w-3 h-3 fill-current" />
                  </div>
                )}
                <h3 className="font-bold text-lg text-brand-primary font-fun mb-1">{item.petName}</h3>
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => { setIsAutoPlaying(false); setCurrentIndex(index); }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-brand-secondary w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};