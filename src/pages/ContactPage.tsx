import React, { useState } from 'react';
import { MapPin, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-xl text-neutral-300">
            Have questions or need assistance? We're here to help you find the perfect musical talent for your event.
          </p>
        </div>
        
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <ContactCard 
            icon={<Mail className="h-6 w-6" />}
            title="Email"
            details={['info@raw-media.co']}
            color="primary"
          />
          <ContactCard 
            icon={<MapPin className="h-6 w-6" />}
            title="Office"
            details={['Jagiellońska 42', '03-462, Warsaw, Poland']}
            color="secondary"
          />
          <ContactCard 
            icon={<Clock className="h-6 w-6" />}
            title="Hours"
            details={['Monday-Friday: 9AM-6PM', 'Weekend: 10AM-4PM']}
            color="accent"
          />
        </div>
        
        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-background-light rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:ring-primary focus:border-primary"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:ring-primary focus:border-primary"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Subject*
                </label>
                <select
                  name="subject"
                  className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:ring-primary focus:border-primary"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Booking Inquiry">Booking Inquiry</option>
                  <option value="Artist Information">Artist Information</option>
                  <option value="Event Planning">Event Planning</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:ring-primary focus:border-primary min-h-[150px]"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                fullWidth
                isGlowing
                disabled={formStatus === 'sending'}
                leftIcon={formStatus === 'sending' ? undefined : <Send size={18} />}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-12 text-center mt-16">
          <h2 className="mb-6">Join Our Artist Network</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Are you a DJ or artist looking to expand your bookings? Join our platform to connect with clients and grow your career.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            isGlowing
          >
            Apply as an Artist
          </Button>
        </div>
      </div>
    </div>
  );
};

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, details, color }) => (
  <div className="bg-background-light rounded-xl p-6 flex items-start">
    <div 
      className={`h-12 w-12 rounded-full flex items-center justify-center mr-4`}
      style={{ 
        color: `var(--tw-colors-${color})`,
        backgroundColor: `var(--tw-colors-${color}-500/10)` 
      }}
    >
      {icon}
    </div>
    <div>
      <h3 className="font-bold mb-2">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-neutral-400">{detail}</p>
      ))}
    </div>
  </div>
);

export default ContactPage;