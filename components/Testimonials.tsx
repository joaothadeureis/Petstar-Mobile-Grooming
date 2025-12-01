import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialItem {
  name: string;
  text: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  { name: "Thomas Koppmann", text: "Maycon was terrific! Very patient with my mini Aussie, who is quite skittish about grooming. She looked great and was relaxed when I picked her up.", rating: 5 },
  { name: "Lucy Mendez", text: "Best groomer we have found for our shi tzu. My husband loves him because he's always on time and I can't get over how cute and fluffy our dog looks!", rating: 5 },
  { name: "Amie T.", text: "Maycon has been cutting Taco's hair for almost a year and is always professional, on time, and has the cutest haircuts. Also, he always sends pictures which I love!", rating: 5 },
  { name: "Hilary Park", text: "I've been using Maycon to groom our very skiddish dog for about 2 years now. She really likes him and he does a great job grooming her. He's always on time, responds quickly, and is flexible.", rating: 5 },
  { name: "Alysha Gafni", text: "Maycon has been our groomer for over two years now. He gives Archie a great cut, is easy to schedule with, shows up on time, and is very good with dogs.", rating: 5 },
  { name: "Laura Mercurio", text: "Maycon is THE BEST! Our sweet pup Bengie is a grooming challenge. He does an amazing job and he's always on time!", rating: 5 },
  { name: "Jennifer Kim", text: "My Havanese is anxious with groomers, but Maycon is so patient with him! He communicates really well and does a great job with the haircut.", rating: 5 },
  { name: "Yolanda Koek", text: "Maycon did an amazing first groom of our puppy. He is super kind and professional, and let us know how it went, and also told us what to expect with future grooming.", rating: 5 },
  { name: "Madeleine R.", text: "Maycon goes above and beyond to make my dog comfortable. My dog is very anxious and it took many months for him to get used to grooming, but he doesn't bark anymore!", rating: 5 },
  { name: "Tena Olin", text: "I appreciated how Maycon was patient with my cat. My cat has very thick fur and hasn't been groomed in a long time. I'll definitely be using Petstar Mobile Grooming again!", rating: 5 },
  { name: "Kyla M.", text: "My anxious dog feels comfortable and comes out looking great. Very happy with the results!", rating: 5 },
  { name: "Ariana G.", text: "Maycon has been grooming my Yorkie for over a year. He always does such a good job and is so patient with her.", rating: 5 }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-fun">Happy Pet Parents</h2>
          <p className="text-gray-600 text-lg">Real reviews from our wonderful clients</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-brand-primary" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-brand-primary" />
          </button>

          {/* Testimonials Cards */}
          <div className="grid md:grid-cols-3 gap-6 px-8 md:px-4">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${currentIndex}-${index}`}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-brand-secondary/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-brand-primary">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => { setIsAutoPlaying(false); setCurrentIndex(index); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-brand-secondary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA after reviews */}
          <div className="text-center mt-10 pt-8 border-t border-gray-200">
            <p className="text-brand-primary font-semibold mb-4">
              ⭐ Loved by 500+ pet parents — your pet could be next!
            </p>
            <button 
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-secondary hover:bg-red-600 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg"
            >
              Book Now & Save $15
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};