import React from 'react';
import { MessageSquare, Users, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-12 w-12" />,
    title: 'TELL US WHAT YOU WANT',
    description: 'Share your event type, date, vibe, and budget.',
    color: 'neutral-600',
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: 'WE RECOMMEND ARTISTS',
    description: 'Get a curated shortlist of talent that fits your needs — with pricing, videos, and availability.',
    color: 'neutral-600',
  },
  {
    icon: <CheckCircle className="h-12 w-12" />,
    title: 'WE HANDLE BOOKING & LOGISTICS',
    description: 'We confirm the artist, negotiate terms, and take care of everything — contracts, travel, riders.',
    color: 'neutral-600',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-2">HOW IT WORKS</h2>
          <p className="text-neutral-400">
            BOOKING YOUR PERFECT MUSICAL EXPERIENCE IS EASY WITH OUR SIMPLE THREE-STEP PROCESS
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-background-light rounded-xl p-8 text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent z-0 -translate-x-1/2" />
              )}
              
              {/* Step number */}
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-background flex items-center justify-center text-lg font-bold border-2 border-neutral-600 text-neutral-300 z-10">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div 
                className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-300 bg-neutral-700 text-neutral-300"
              >
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-neutral-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;