import React from 'react';
import { Button } from './Button';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 mt-12 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* CTA Banner - Floating */}
        <div className="bg-brand-secondary rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto -mt-36 mb-16 shadow-2xl relative overflow-hidden ring-8 ring-white/10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-fun">Your Pet Deserves Stress-Free Grooming</h2>
                <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                    No more stressful car rides or waiting in cages. We bring the spa experience to your doorstep.
                </p>
                <Button size="lg" variant="white" className="mx-auto text-brand-secondary font-bold shadow-xl" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth'})}>
                    Book Now & Get $15 OFF
                </Button>
            </div>
        </div>

        {/* Footer Content - 2 columns layout */}
        <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
            
            {/* Left Column - Logo & Service Areas */}
            <div>
                <img 
                    src="https://static.wixstatic.com/media/bd5414_6b03330d2f07475cbdc4f039130edbc3~mv2.png/v1/fill/w_188,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20petstar.png" 
                    alt="Pet Star" 
                    className="h-14 mb-4 brightness-0 invert opacity-90"
                />
                <p className="text-gray-400 text-sm mb-6">Premier Mobile Pet Grooming — We come to you!</p>
                
                {/* Service Areas */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                  <span className="text-white text-sm font-semibold">Service Areas</span>
                </div>
                {/* Linha 1 */}
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/10 text-gray-300">Peninsula</span>
                  <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/10 text-gray-300">San Mateo County</span>
                  <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/10 text-gray-300">Santa Clara County</span>
                  <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/10 text-gray-300">San Francisco</span>
                </div>
                {/* Linha 2 */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1.5 rounded-full bg-brand-secondary text-white font-semibold">Marin County <span className="text-[9px] font-bold">NEW</span></span>
                  <span className="text-xs px-2.5 py-1.5 rounded-full bg-white/10 text-gray-300">South Bay</span>
                  <span className="text-xs px-2.5 py-1.5 rounded-full bg-brand-secondary text-white font-semibold">East Bay <span className="text-[9px] font-bold">NEW</span></span>
                </div>
            </div>
            
            {/* Right Column - Contact Info */}
            <div className="md:text-right">
                <h4 className="font-bold text-xl mb-6 font-fun">Contact Us</h4>
                <div className="space-y-4 text-gray-300">
                    <div className="flex items-center gap-3 md:justify-end">
                        <Clock className="w-5 h-5 text-brand-secondary" />
                        <span>Mon - Sat: 8:00am - 6:00pm</span>
                    </div>
                    <div className="flex items-center gap-3 md:justify-end">
                        <Mail className="w-5 h-5 text-brand-secondary" />
                        <span>petstarmobilegrooming@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 md:justify-end">
                        <Phone className="w-5 h-5 text-brand-secondary" />
                        <a href="tel:+16507274673" className="text-white font-semibold hover:text-brand-secondary transition-colors">
                            (650) 727-4673
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-12 border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Petstar Mobile Grooming. All rights reserved. | Made w/ ❤️ by <a href="https://wedomarketing.pro" className="font-semibold underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">WeDo Marketing</a>
        </div>
      </div>
    </footer>
  );
};