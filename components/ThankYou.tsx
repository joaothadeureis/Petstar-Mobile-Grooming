import React from 'react';
import { Button } from './Button';
import { Calendar, Phone, MessageSquare, Copy, CheckCircle, Dog } from 'lucide-react';

export const ThankYou: React.FC = () => {
  const handleBookNow = () => {
    window.open('https://booking.moego.pet/ol/landing?name=PetStarMobileGrooming', '_blank');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('PETSTAR15');
    alert('Coupon code copied to clipboard!');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-light bg-paws flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10 flex flex-col items-center">
        
        {/* Brand Logo */}
        <img 
          src="https://static.wixstatic.com/media/bd5414_6b03330d2f07475cbdc4f039130edbc3~mv2.png/v1/fill/w_188,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20petstar.png" 
          alt="Pet Star Mobile Grooming" 
          className="h-20 mb-8 object-contain"
        />

        {/* Success Icon */}
        <div className="mb-6 relative inline-block">
          <div className="absolute inset-0 bg-green-200 rounded-full blur-lg animate-pulse"></div>
          <div className="bg-white p-4 rounded-full shadow-xl relative z-10">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-primary mb-4 font-fun">
          You're In!
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto">
          We've received your details. Your discount is unlocked and ready to use for your first stress-free grooming session.
        </p>

        {/* Coupon Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-white mb-10 relative overflow-hidden group w-full">
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-secondary"></div>
          
          <div className="flex flex-col items-center gap-4">
            <span className="text-gray-500 font-bold tracking-widest text-sm uppercase">Your Coupon Code</span>
            
            <button 
              className="bg-brand-light border-2 border-dashed border-brand-primary rounded-xl px-8 py-4 flex items-center justify-center gap-4 cursor-pointer hover:bg-brand-primary/5 transition-colors w-full md:w-auto" 
              onClick={handleCopyCode}
              title="Click to copy"
            >
              <span className="text-3xl md:text-5xl font-mono font-bold text-brand-secondary">PETSTAR15</span>
              <Copy className="w-6 h-6 text-gray-400" />
            </button>

            <p className="text-sm text-gray-500">
              <span className="font-bold text-brand-primary">Important:</span> Please enter this code at checkout on our booking system.
            </p>
          </div>
          
          <Dog className="absolute -bottom-6 -right-6 w-24 h-24 text-gray-100 rotate-12 group-hover:rotate-6 transition-transform" />
        </div>

        {/* Primary CTA */}
        <div className="space-y-6 w-full md:w-auto md:min-w-[320px]">
          <Button 
            size="lg" 
            fullWidth 
            className="text-xl py-6 shadow-xl shadow-red-200 animate-bounce-subtle"
            onClick={handleBookNow}
          >
            <Calendar className="w-6 h-6 mr-2" />
            Book Appointment Now
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-brand-light text-gray-500 font-medium">Have questions before booking?</span>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="grid grid-cols-2 gap-4">
            <a href="tel:+15555555555" className="block w-full">
              <Button variant="outline" fullWidth className="bg-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </a>
            <a href="sms:+15555555555" className="block w-full">
              <Button variant="outline" fullWidth className="bg-white">
                <MessageSquare className="w-5 h-5 mr-2" />
                Text Us
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};