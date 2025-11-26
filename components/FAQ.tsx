import React, { useState } from 'react';
import { Section } from './Section';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    question: "Do you need to plug into my house?",
    answer: "No. Our vans are fully self-contained with their own generator for electricity, filtered water heater, and wastewater tanks. We are 100% independent."
  },
  {
    question: "How long does a full grooming session take?",
    answer: "Typically, a full grooming session takes between 60 to 90 minutes, depending on the size and coat condition of your pet. This is far less time than the total commute and wait time at a traditional salon."
  },
  {
    question: "Do you groom cats?",
    answer: "Yes! We offer specialized grooming services for cats, including baths, lion cuts, and nail trimming."
  },
  {
    question: "What is your service area?",
    answer: "We proudly serve Foster City, San Mateo, Belmont, and surrounding Peninsula areas. Please contact us to confirm service at your specific address."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" dark>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <div className="bg-brand-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-brand-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-fun">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border-2 border-transparent hover:border-brand-primary/20 rounded-2xl overflow-hidden shadow-sm transition-all">
              <button
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-secondary' : 'text-gray-800'}`}>{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-brand-secondary" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};