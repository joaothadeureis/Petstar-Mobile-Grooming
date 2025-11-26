import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
  pattern?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false, pattern = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${dark ? 'bg-brand-light' : 'bg-white'} ${pattern ? 'bg-paws' : ''} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  );
};