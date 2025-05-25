import React from 'react';
import { Search, Calendar, Music } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-12 w-12" />,
    title: 'Find Your Perfect Artist',
    description: 'Browse our curated selection of professional DJs and musicians, filter by genre, price, and availability.',
    color: 'primary',
  },
  {
    icon: <Calendar className="h-12 w-12" />,
    title: 'Book Your Date',
    description: 'Select your event date and time, provide details about your venue, and confirm your booking instantly.',
    color: 'secondary',
  },
  {
    icon: <Music className="h-12 w-12" />,
    title: 'Enjoy The Show',
    description: 'Sit back and enjoy as your chosen artist delivers an unforgettable performance for you and your guests.',
    color: 'accent',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-2">How It Works</h2>
          <p className="text-neutral-400">
            Booking your perfect musical experience is easy with our simple three-step process
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
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-background flex items-center justify-center text-lg font-bold border-2 border-current z-10" style={{ color: `var(--tw-colors-${step.color})` }}>
                {index + 1}
              </div>
              
              {/* Icon */}
              <div 
                className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                style={{ 
                  color: `var(--tw-colors-${step.color})`,
                  backgroundColor: `var(--tw-colors-${step.color}-500/10)` 
                }}
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