import React from 'react';
import { Section } from './Section';
import { Check, Sparkles, AlertCircle, Dog, Scissors } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div id="services" className="bg-brand-primary py-24 md:py-36 relative overflow-hidden">
      
      {/* Top Wave (Transition from White to Purple) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
          {/* Left: Services List */}
          <div className="flex-1 text-white">
            <div className="inline-flex items-center gap-2 text-brand-secondary bg-white px-3 py-1 rounded-lg font-bold uppercase text-xs mb-4">
                <Scissors className="w-4 h-4" /> Professional Care
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-fun">Full-Service Grooming</h2>
            <p className="text-blue-100 mb-10 text-xl leading-relaxed">
              Our comprehensive packages are designed to leave your pet feeling fresh, clean, and happy.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-fun">
                        <Sparkles className="w-6 h-6 text-brand-secondary" /> What's Included
                    </h3>
                    <ul className="space-y-4">
                        {[
                        "Gentle Bath with customized shampoo",
                        "Teeth Brushing with vet-approved solutions",
                        "Nail Trim & Filing (Dremeling included)",
                        "Ear Cleaning",
                        "Organic Oil Moisturizers for nose/paws",
                        "Full coat brush out & style"
                        ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-blue-50">
                            <Check className="w-5 h-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4 font-fun">Specialized Treatments</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Dematting", "De-Shedding", "Sensitive Skin Treatments", "Deep Hydration", "Safe Tartar Removal"].map((item, i) => (
                            <div key={i} className="bg-brand-dark/50 px-3 py-1.5 rounded-lg text-sm font-medium text-blue-100 border border-white/10">
                                {item}
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white text-brand-primary rounded-2xl p-6 relative overflow-hidden">
                        <Dog className="absolute -right-4 -bottom-4 w-24 h-24 text-brand-primary/10 rotate-12" />
                        <h3 className="text-xl font-bold mb-2 font-fun">Cats Welcome Too!</h3>
                        <p className="text-sm text-gray-600">We offer specialized grooming services for cats, including baths, lion cuts, and nail trimming.</p>
                    </div>
                 </div>
            </div>

          </div>

          {/* Right: Pricing Box */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-white text-brand-dark p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden border-4 border-brand-secondary/20">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-secondary/10 rounded-bl-full"></div>
              
              <h3 className="text-3xl font-bold mb-4 text-brand-primary font-fun">Pricing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Mobile grooming is an investment in your pet's happiness. Our prices reflect the personalized, one-on-one attention your dog receives.
              </p>
              
              <div className="bg-brand-light rounded-xl p-6 mb-8 border border-brand-primary/10">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-secondary/10 p-2 rounded-full">
                     <AlertCircle className="w-6 h-6 text-brand-secondary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary mb-1 text-lg">Base Rates</p>
                    <p className="text-gray-600">
                      Start at <span className="font-bold text-brand-secondary text-xl">$120</span> and vary depending on pet size and coat condition.
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-brand-secondary text-white font-bold rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-200"
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth'})}
              >
                Get Quote & $15 Off
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave (Transition from Purple to White) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </div>
  );
};