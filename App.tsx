import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero onFormSuccess={handleFormSuccess} />
        <Features />
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