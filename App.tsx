import React, { useState } from 'react';
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
  const [view, setView] = useState<'home' | 'thank-you'>('home');

  // When form is submitted successfully, scroll to top and switch view
  const handleFormSuccess = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView('thank-you');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {view === 'home' ? (
          <>
            <Hero onFormSuccess={handleFormSuccess} />
            <Features />
            <Services />
            <Gallery />
            <Testimonials />
            <FAQ />
          </>
        ) : (
          <ThankYou />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;