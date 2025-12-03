import React, { useState } from 'react';
import { Button } from './Button';
import { Gift, Loader2, ChevronDown } from 'lucide-react';

interface LeadFormProps {
  onSuccess: () => void;
}

// ==========================================
// CONFIGURATION - Edit webhook URL here
// ==========================================
const WEBHOOK_URL = "https://n8n.srv981504.hstgr.cloud/webhook/petstar-landing-page-offer"; // Optional: Add your webhook URL here (e.g., n8n, Zapier, Make)
// Example: "https://n8n.srv981504.hstgr.cloud/webhook/petstar-lead"
// ==========================================

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
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

      // 3. Send to PHP Backend (Email) and Webhook simultaneously
      const requests: Promise<Response>[] = [];

      // Always send to PHP backend for email
      requests.push(
        fetch('./mail.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
      );

      // Send to webhook if configured
      if (WEBHOOK_URL) {
        requests.push(
          fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
        );
      }

      // Execute all requests in parallel
      const results = await Promise.allSettled(requests);
      
      // Log results for debugging
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.warn(`Request ${index} failed:`, result.reason);
        } else if (!result.value.ok) {
          console.warn(`Request ${index} returned non-200 status`);
        }
      });

      // Always redirect to thank you page regardless of API results
      // (Better UX - don't block user from getting their coupon)
      setLoading(false);
      onSuccess();

    } catch (error) {
      console.error('Submission error:', error);
      // Still redirect on error to not frustrate the user
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
      <p className="text-gray-600 mb-2 leading-relaxed">
        Your first stress-free mobile grooming session.
      </p>
      <p className="text-xs text-brand-secondary font-semibold mb-4">
        ⚡ Limited spots weekly — claim before we're fully booked!
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors text-gray-900 placeholder-gray-400 text-sm"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Phone"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors text-gray-900 placeholder-gray-400 text-sm"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors text-gray-900 placeholder-gray-400 text-sm"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              id="city"
              name="city"
              required
              placeholder="Your City"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors text-gray-900 placeholder-gray-400 text-sm"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="petName"
              name="petName"
              placeholder="Pet's Name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors text-gray-900 placeholder-gray-400 text-sm"
              value={formData.petName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="relative">
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors appearance-none text-gray-900 text-sm"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="" disabled>Select a Service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
        </div>

        <Button fullWidth size="lg" variant="primary" type="submit" disabled={loading} className="shadow-red-200">
          {loading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            "CLAIM $15 DISCOUNT"
          )}
        </Button>
        <p className="text-xs text-center text-gray-500">
          Book instantly on the next page — takes less than 3 minutes!
        </p>
      </form>
    </div>
  );
};