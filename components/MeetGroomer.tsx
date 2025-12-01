import React from 'react';
import { Section } from './Section';
import { Award, Heart, Clock, Shield } from 'lucide-react';

export const MeetGroomer: React.FC = () => {
  return (
    <Section id="meet-maycon">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/offer/maycon with a dog.webp" 
              alt="Maycon - Petstar Mobile Grooming" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-primary/80 to-transparent p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <Heart className="w-5 h-5 text-brand-secondary fill-brand-secondary" />
                </div>
                <span className="text-white font-bold">500+ Happy Pets Groomed</span>
              </div>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 md:right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-brand-light">
            <div className="flex items-center gap-3">
              <div className="bg-brand-secondary/10 rounded-full p-2">
                <Award className="w-6 h-6 text-brand-secondary" />
              </div>
              <div>
                <p className="font-bold text-brand-primary text-sm">Certified Groomer</p>
                <p className="text-xs text-gray-500">5+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full text-sm font-bold text-brand-primary mb-4">
            <Heart className="w-4 h-4 text-brand-secondary" /> Meet Your Groomer
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 font-fun">
            Hi, I'm Maycon!
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            As the founder of Petstar Mobile Grooming, I treat every pet like they're my own. 
            With over 5 years of professional grooming experience, I've dedicated my career to 
            providing stress-free, personalized care that your furry family members deserve.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            I understand that every pet is unique. Whether your dog is anxious, senior, or just 
            needs some extra TLC, I take the time to build trust and make grooming a positive experience. 
            My mobile salon allows me to give 100% attention to your pet—no distractions, no stress.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-light rounded-xl p-4">
              <Clock className="w-6 h-6 text-brand-primary mb-2" />
              <p className="font-bold text-brand-primary">5+ Years</p>
              <p className="text-sm text-gray-500">Professional Experience</p>
            </div>
            <div className="bg-brand-light rounded-xl p-4">
              <Shield className="w-6 h-6 text-brand-primary mb-2" />
              <p className="font-bold text-brand-primary">Insured</p>
              <p className="text-sm text-gray-500">Fully Licensed & Bonded</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
