import React from 'react';
import { Button } from './Button';
import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 mt-12 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* CTA Banner - Floating */}
        <div className="bg-brand-secondary rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto -mt-36 mb-16 shadow-2xl relative overflow-hidden ring-8 ring-white/10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            {/* Decorative circles */}
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-fun">Ready for Stress-Free Grooming?</h2>
                <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                    Secure your spot today and let your pet experience the comfort of grooming at home.
                </p>
                <Button size="lg" variant="white" className="mx-auto text-brand-secondary font-bold shadow-xl" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth'})}>
                    Book Now & Save $15!
                </Button>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-t border-white/10 pt-12">
            <div>
                <img 
                    src="https://static.wixstatic.com/media/bd5414_6b03330d2f07475cbdc4f039130edbc3~mv2.png/v1/fill/w_188,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20petstar.png" 
                    alt="Pet Star" 
                    className="h-14 mb-6 brightness-0 invert opacity-90"
                />
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                    Premier Mobile Grooming serving Foster City, San Mateo, Belmont, and surrounding Peninsula areas.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold text-xl mb-6 font-fun">Contact</h4>
                <div className="space-y-3 text-gray-300">
                    <p className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                        Mon - Sat: 8:00am - 6:00pm
                    </p>
                    <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-brand-secondary" /> info@petstarmobilegrooming.com
                    </p>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-xl mb-6 font-fun">Follow Us</h4>
                <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-all group">
                        <Facebook className="w-5 h-5 group-hover:fill-white" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-all group">
                        <Instagram className="w-5 h-5 group-hover:fill-white" />
                    </a>
                </div>
            </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs mt-16 border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Pet Star Mobile Grooming. All rights reserved.
        </div>
      </div>
    </footer>
  );
};