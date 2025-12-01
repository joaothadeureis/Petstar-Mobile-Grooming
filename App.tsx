import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MeetGroomer } from './components/MeetGroomer';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';
import { Star } from 'lucide-react';

// Announcement Bar Component
const AnnouncementBar: React.FC = () => (
  <div className="bg-brand-dark text-white py-1.5 px-4 text-center text-xs md:text-sm sticky top-0 left-0 w-full z-[60]">
    <div className="flex items-center justify-center gap-1.5 md:gap-2 flex-wrap">
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="font-bold">4.9</span>
      </div>
      <span className="text-white/70">•</span>
      <span className="text-white/90">64+ Reviews on Google</span>
      <span className="text-white/70">•</span>
      <span className="text-brand-secondary font-semibold">Trusted by 500+ Pet Parents</span>
    </div>
  </div>
);

function App() {
  const [isThankYou, setIsThankYou] = useState(false);

  // Check URL on mount and hash changes
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      // Support both /thank-you and /offer/thank-you paths
      const isThankYouPath = path.endsWith('/thank-you') || path.endsWith('/thank-you/');
      setIsThankYou(isThankYouPath || hash === '#thank-you');
    };
    
    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);
    
    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  // When form is submitted successfully, redirect to /thank-you
  const handleFormSuccess = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Use history.pushState for clean URL (for tracking)
    // Get base path from current location
    const basePath = window.location.pathname.replace(/\/?$/, '');
    const thankYouPath = basePath.includes('/offer') ? '/offer/thank-you' : '/thank-you';
    window.history.pushState({}, '', thankYouPath);
    setIsThankYou(true);
  };

  // Thank You page - standalone without header/footer
  if (isThankYou) {
    return <ThankYou />;
  }

  // Home page with full layout
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero onFormSuccess={handleFormSuccess} />
        <Features />
        <MeetGroomer />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;