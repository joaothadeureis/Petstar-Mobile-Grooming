import React from 'react';
import { LeadForm } from './LeadForm';
import { MapPin, Sparkles, Star, Shield, Clock, Heart } from 'lucide-react';

interface HeroProps {
  onFormSuccess: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFormSuccess }) => {
  return (
    <div id="hero" className="relative min-h-screen md:min-h-[850px] flex items-center pt-16 pb-28 md:pt-20 md:pb-40 overflow-hidden">
      
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2670&auto=format&fit=crop"
            alt="Happy Dog" 
            className="w-full h-full object-cover object-[50%_30%] md:object-[30%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-brand-primary via-brand-primary/90 to-brand-primary/60 md:to-transparent z-10"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            
            {/* Tartar Removal - Top Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-brand-dark px-5 py-2.5 rounded-full text-sm font-bold shadow-lg mb-6 animate-pulse">
              <Sparkles className="w-4 h-4" /> 
              <span>NEW: Safe Tartar Removal Available</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 font-fun">
              <span className="block text-white drop-shadow-lg">Premium Pet</span>
              <span className="block text-white drop-shadow-lg">Grooming</span>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-brand-secondary bg-white px-6 py-2 rounded-xl shadow-2xl inline-block transform -rotate-1 font-black">
                  At Your Door
                </span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Professional grooming for dogs & cats — calm, gentle, and stress-free.
            </p>
            
            {/* Value Props - Premium Style */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">Cage-Free</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium">1-on-1 Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium">We Come to You</span>
              </div>
            </div>

            {/* Regions - Styled Card */}
            <div className="inline-block mb-6 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2 text-white text-sm mb-4 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-brand-secondary" /> 
                <span className="uppercase tracking-wider text-sm font-bold">Now Serving</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-2">
                {['Peninsula', 'San Mateo County', 'Santa Clara County', 'San Francisco'].map((region) => (
                  <span key={region} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/10">
                    {region}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-brand-secondary text-white shadow-md">
                  Marin County <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded ml-1">NEW</span>
                </span>
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/10">
                  South Bay
                </span>
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-brand-secondary text-white shadow-md">
                  East Bay <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded ml-1">NEW</span>
                </span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[
                  'photo-1438761681033-6461ffad8d80',
                  'photo-1494790108377-be9c29b29330',
                  'photo-1507003211169-0a1dd7228f2d',
                  'photo-1534528741775-53994a69daeb'
                ].map((photo, i) => (
                  <img 
                    key={i}
                    src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=60&h=60&q=80`} 
                    alt="" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-md" 
                  />
                ))}
              </div>
              <div className="text-white">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-white/80">+500 satisfied pet parents</span>
              </div>
            </div>
          </div>

          {/* Right Content - The Form */}
          <div className="w-full max-w-md lg:w-[440px]">
            <div className="relative">
              {/* Glow effect behind form */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-secondary/30 to-yellow-400/30 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <LeadForm onSuccess={onFormSuccess} />
              </div>
            </div>
            {/* Badge below form */}
            <div className="text-center mt-5 flex items-center justify-center gap-3 text-white/70 text-sm">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-400" /> Licensed & Insured
              </span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span>Since 2019</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]" 
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