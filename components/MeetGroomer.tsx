import React from 'react';
import { Section } from './Section';
import { Award, Heart, Clock, Shield } from 'lucide-react';

export const MeetGroomer: React.FC = () => {
  return (
    <Section id="meet-maycon">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Side - Grid with 3 photos */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3">
            {/* Main large photo */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/offer/maycon with a dog.webp" 
                alt="Maycon - Petstar Mobile Grooming" 
                className="w-full h-[280px] md:h-[320px] object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-primary/80 to-transparent p-4">
                <div className="flex items-center gap-2">
                  <div className="bg-white rounded-full p-1.5">
                    <Heart className="w-4 h-4 text-brand-secondary fill-brand-secondary" />
                  </div>
                  <span className="text-white font-bold text-sm">5,000+ Happy Pets Groomed</span>
                </div>
              </div>
            </div>
            
            {/* Two smaller photos - Van images */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/offer/2 van petstar.webp" 
                alt="Petstar Mobile Grooming Van" 
                className="w-full h-[140px] md:h-[160px] object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/offer/dog in front of van.webp" 
                alt="Happy dog in front of grooming van" 
                className="w-full h-[140px] md:h-[160px] object-cover"
              />
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

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-brand-light rounded-xl p-4">
              <Award className="w-6 h-6 text-brand-secondary mb-2" />
              <p className="font-bold text-brand-primary">Certified</p>
              <p className="text-sm text-gray-500">Pro Groomer</p>
            </div>
            <div className="bg-brand-light rounded-xl p-4">
              <Clock className="w-6 h-6 text-brand-primary mb-2" />
              <p className="font-bold text-brand-primary">5+ Years</p>
              <p className="text-sm text-gray-500">Experience</p>
            </div>
            <div className="bg-brand-light rounded-xl p-4">
              <Shield className="w-6 h-6 text-brand-primary mb-2" />
              <p className="font-bold text-brand-primary">Insured</p>
              <p className="text-sm text-gray-500">Licensed</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
