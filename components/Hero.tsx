import React from 'react';
import { LeadForm } from './LeadForm';
import { CheckCircle, MapPin } from 'lucide-react';

interface HeroProps {
  onFormSuccess: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFormSuccess }) => {
  return (
    <div id="hero" className="relative min-h-screen md:min-h-[800px] flex items-center pt-28 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop"
            alt="Happy Dog Grooming" 
            // object position logic: 
            // Mobile: 50% x 15% (Center horizontal, Top vertical) -> Keeps face at top, away from bottom form
            // Desktop: 20% x 50% (Left horizontal, Center vertical) -> Moves dog to left, away from right form
            className="w-full h-full object-cover object-[50%_15%] md:object-[20%_center]"
        />
        {/* Brand Gradient Overlay */}
        {/* Adjusted gradient to ensure text readability on the left/top while revealing image on right/bottom */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-brand-primary/90 via-brand-primary/60 to-brand-primary/20 md:to-transparent z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6 shadow-lg">
              <MapPin className="w-4 h-4 text-brand-secondary" /> Serving Peninsula Area
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-md font-fun">
              Premier Care.<br/>
              Zero Stress.<br/>
              <span className="text-brand-secondary bg-white px-2 rounded-lg transform -rotate-2 inline-block shadow-lg mt-2">We Come to You!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-sm">
              Stop wasting hours at noisy salons. Give your pet the calm, personalized, cage-free experience they deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-base font-bold text-white mb-8">
              <div className="flex items-center gap-2 bg-brand-dark/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <CheckCircle className="text-brand-secondary w-5 h-5 fill-white" /> Cage-Free
              </div>
              <div className="flex items-center gap-2 bg-brand-dark/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <CheckCircle className="text-brand-secondary w-5 h-5 fill-white" /> 1-on-1 Attention
              </div>
              <div className="flex items-center gap-2 bg-brand-dark/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <CheckCircle className="text-brand-secondary w-5 h-5 fill-white" /> Fully Self-Contained
              </div>
            </div>
          </div>

          {/* Right Content - The Form */}
          <div className="w-full max-w-md lg:w-[460px]">
            <LeadForm onSuccess={onFormSuccess} />
            {/* Trust Badge below form */}
            <div className="flex items-center justify-center gap-4 mt-6 opacity-90">
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-primary bg-gray-200 overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                        </div>
                    ))}
                </div>
                <div className="text-white text-sm font-medium">
                    <div className="font-bold">500+ Happy Pets</div>
                    <div className="text-brand-secondary">★★★★★</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
            <path 
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                fill="#ffffff"
            ></path>
        </svg>
      </div>
    </div>
  );
};