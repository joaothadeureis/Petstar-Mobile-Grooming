import React, { useState } from 'react';
import { Button } from './Button';
import { Gift, Loader2, ChevronDown } from 'lucide-react';

interface LeadFormProps {
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Get User IP
      let ipAddress = 'Unknown';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        ipAddress = ipData.ip;
      } catch (error) {
        console.warn('Could not fetch IP address', error);
      }

      // 2. Prepare Payload
      const payload = {
        ...formData,
        ip: ipAddress,
        userAgent: navigator.userAgent,
        submittedAt: new Date().toISOString(),
        source: window.location.href
      };

      // 3. Send to PHP Backend (Hostinger)
      // This expects a 'mail.php' file to exist in the same directory as the index.html
      const response = await fetch('./mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Optional: You can also keep the webhook call here if you want data in both places
      // await fetch('https://n8n.srv981504.hstgr.cloud/webhook/...', ...);

      if (response.ok) {
        // Success logic
        setTimeout(() => {
          setLoading(false);
          onSuccess();
        }, 500);
      } else {
        // Even if PHP fails (e.g. local dev environment), we usually let the user proceed 
        // on a landing page to not block the coupon.
        console.warn('Email script returned non-200 status');
        setTimeout(() => {
          setLoading(false);
          onSuccess();
        }, 500);
      }

    } catch (error) {
      console.error('Submission error:', error);
      setLoading(false);
      onSuccess();
    }
  };

  const serviceOptions = [
    "Cat nail trimming",
    "Cat haircut",
    "Cat Bath",
    "Tartar Removal",
    "Dog Bath",
    "Dog Haircut",
    "Dog Nail Trimming",
    "Skunk Off"
  ];

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-3 bg-brand-secondary"></div>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-red-100 text-brand-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <Gift className="w-3 h-3" /> Limited Offer
        </span>
      </div>

      <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-2 font-fun">
        Get $15 OFF
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Your first stress-free mobile grooming session. Claim your voucher now!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors text-gray-900 placeholder-gray-400"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors text-gray-900 placeholder-gray-400"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Phone"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors text-gray-900 placeholder-gray-400"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
             <label htmlFor="petName" className="sr-only">Pet's Name</label>
             <input
              type="text"
              id="petName"
              name="petName"
              placeholder="Pet's Name"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors text-gray-900 placeholder-gray-400"
              value={formData.petName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="service" className="sr-only">Service</label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors appearance-none text-gray-900"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="" disabled>Select a Service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
        </div>

        <Button fullWidth size="lg" variant="primary" type="submit" disabled={loading} className="mt-2 shadow-red-200">
          {loading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            "CLAIM $15 DISCOUNT"
          )}
        </Button>
        <p className="text-xs text-center text-gray-400 mt-2">
          We respect your privacy. No spam, ever.
        </p>
      </form>
    </div>
  );
};