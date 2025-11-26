import React from 'react';
import { Section } from './Section';
import { Heart, Clock, ShieldCheck, Wind, Smile, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: "Stress-Free, Cage-Free",
    description: "A calm, private environment within our self-contained van. We focus entirely on one dog at a time—ideal for anxious or senior pets."
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Unmatched Convenience",
    description: "We require as little as 10 minutes of your time for drop-off/pick-up. Flexible scheduling fits into your busy life."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "High-Quality & Hygiene",
    description: "Premium shampoos, vet-recommended solutions, and meticulously sanitized vans after every session to minimize illness exposure."
  },
  {
    icon: <Wind className="w-8 h-8 text-white" />,
    title: "Gentle, Specialized Drying",
    description: "Cage-free hand-drying techniques and noise-reducing hoods ensure a low-stress finish while we inspect skin and coat."
  },
  {
    icon: <Smile className="w-8 h-8 text-white" />,
    title: "Relationship Building",
    description: "Our recurring schedule helps your pet bond with their dedicated groomer, turning appointments into something they look forward to."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "Full Attention",
    description: "No other barking dogs, no cages, no drying boxes. Just 100% focus on your furry friend's comfort and style."
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="why-us" pattern>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 font-fun">Why Choose Pet Star?</h2>
        <p className="text-gray-600 text-xl font-light">We aren't just a grooming service; we are a wellness experience for your furry family member.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-brand-light hover:border-brand-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="bg-brand-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20 group-hover:bg-brand-secondary transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 font-fun">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};