import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Florinda P.",
    text: "Macorio is so great. My dog loves seeing him every month. He is so professional, polite and great with animals. Always on time which is very helpful when you have a busy life. I highly recommend Pet star mobile grooming!",
    source: "Google Reviews"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    text: "I was worried because my Yorkie is extremely anxious at the groomers. The cage-free environment made all the difference! She came back happy and looking beautiful. Worth every penny.",
    source: "Local Client"
  },
  {
    id: 3,
    name: "Mike T.",
    text: "The convenience is unbeatable. They pulled up to my driveway, groomed my two Labs, and were done in under 3 hours total. No driving, no waiting. Fantastic service.",
    source: "Google Reviews"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      {/* Background Image Parallax-ish */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2669&auto=format&fit=crop" 
            alt="Dogs running"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-fun">What Our Clients Say</h2>
          <div className="flex justify-center gap-2 text-brand-secondary">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-8 h-8 fill-current" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-xl relative transform hover:-translate-y-1 transition-transform">
              <div className="absolute -top-6 left-8 bg-brand-secondary w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                <Quote className="w-6 h-6 text-white fill-current" />
              </div>
              <div className="pt-6">
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">"{review.text}"</p>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center font-bold text-brand-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary">{review.name}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{review.source}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};