import React, { useState } from 'react';
import { Button } from './Button';
import { Calendar, Phone, MessageSquare, Copy, Sparkles, PartyPopper } from 'lucide-react';

export const ThankYou: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleBookNow = () => {
    window.open('https://booking.moego.pet/ol/landing?name=PetStarMobileGrooming', '_blank');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('PETSTAR15');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-light to-white flex flex-col">
      
      {/* Simple Header with Logo */}
      <header className="py-6 px-4">
        <div className="container mx-auto flex justify-center">
          <img 
            src="https://static.wixstatic.com/media/bd5414_6b03330d2f07475cbdc4f039130edbc3~mv2.png/v1/fill/w_188,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20petstar.png" 
            alt="Pet Star Mobile Grooming" 
            className="h-16 object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full text-center">
          
          {/* Success Message with subtle celebration */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Success!</span>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-3 font-fun">
            You're In!
          </h1>
          <p className="text-gray-600 mb-8">
            Your $15 discount is ready. Use the code below when booking.
          </p>

          {/* Coupon Card - Clean design */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Your Coupon Code</span>
            
            <button 
              className="mt-3 w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl px-6 py-4 flex items-center justify-center gap-3 cursor-pointer hover:border-brand-primary hover:bg-brand-light/50 transition-all" 
              onClick={handleCopyCode}
              title="Click to copy"
            >
              <span className="text-2xl md:text-3xl font-mono font-bold text-brand-primary">PETSTAR15</span>
              <Copy className={`w-5 h-5 transition-colors ${copied ? 'text-green-500' : 'text-gray-400'}`} />
            </button>
            
            <p className={`mt-2 text-xs transition-all ${copied ? 'text-green-600 font-medium' : 'text-gray-400'}`}>
              {copied ? '✓ Copied to clipboard!' : 'Click to copy'}
            </p>
          </div>

          {/* Primary CTA */}
          <Button 
            size="lg" 
            fullWidth 
            className="text-lg py-5 shadow-lg shadow-red-100"
            onClick={handleBookNow}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Appointment
          </Button>

          {/* Secondary Actions */}
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <a href="tel:+15555555555" className="text-gray-500 hover:text-brand-primary flex items-center gap-1 transition-colors">
              <Phone className="w-4 h-4" />
              Call
            </a>
            <span className="text-gray-300">|</span>
            <a href="sms:+15555555555" className="text-gray-500 hover:text-brand-primary flex items-center gap-1 transition-colors">
              <MessageSquare className="w-4 h-4" />
              Text
            </a>
          </div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-6 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Pet Star Mobile Grooming
        </p>
      </footer>
    </div>
  );
};