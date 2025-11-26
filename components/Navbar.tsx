import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-fun ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 bg-white rounded-lg p-1">
          <img 
            src="https://static.wixstatic.com/media/bd5414_6b03330d2f07475cbdc4f039130edbc3~mv2.png/v1/fill/w_188,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20petstar.png" 
            alt="Pet Star Mobile Grooming" 
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-lg hover:text-brand-secondary transition-colors ${
                isScrolled ? 'text-brand-primary' : 'text-brand-primary md:text-white lg:text-white' // Assuming hero bg is dark
              }`}
              style={{ textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="sm" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth'})}>
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-primary bg-white rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t-4 border-brand-secondary md:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xl font-bold text-brand-primary py-3 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+15555555555" 
              className="flex items-center gap-2 text-brand-secondary font-bold py-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
            <Button fullWidth variant="primary" onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth'});
            }}>
              Claim $15 Discount
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};