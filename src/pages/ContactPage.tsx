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

  const handleArtistApplication = () => {
    const subject = encodeURIComponent('Artist Application - Portfolio Submission');
    const body = encodeURIComponent(`Hello RAW MEDIA Team,

I am interested in joining your artist network and would like to submit my portfolio for review.

Please find attached/linked:
- My portfolio/demo reel
- Artist biography
- Performance history
- Social media links
- Any relevant press or media coverage

Artist Name: [Your Name]
Genre/Specialty: [Your Genre/Specialty]
Location: [Your Location]
Experience: [Years of Experience]

I look forward to hearing from you.

Best regards,
[Your Name]`);
    
    window.location.href = `mailto:info@raw-media.co?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-6">GET IN TOUCH</h1>
          <p className="text-xl text-neutral-300">
            CONNECT WITH RAW MEDIA TO DISCOVER ARTISTS WHO DEFINE TOMORROW'S UNDERGROUND CULTURE.
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
            <h2 className="text-2xl font-bold mb-6">SEND US A MESSAGE</h2>
            
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
                  <option value="Artist Booking">Artist Booking</option>
                  <option value="Artist Representation">Artist Representation</option>
                  <option value="Cultural Partnership">Cultural Partnership</option>
                  <option value="Media Collaboration">Media Collaboration</option>
                  <option value="Festival Booking">Festival Booking</option>
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
                  placeholder="Tell us about your project or event..."
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
          <h2 className="mb-6">JOIN OUR ARTIST NETWORK</h2>
          <p className="text-xl text-neutral-300 mb-4 max-w-2xl mx-auto">
            ARE YOU AN ARTIST WHO DEFINES UNDERGROUND CULTURE? JOIN RAW MEDIA TO CONNECT WITH GLOBAL AUDIENCES AND EXPAND YOUR REACH.
          </p>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Send your portfolio, biography, and performance history to <span className="text-primary font-medium">info@raw-media.co</span> for review by our team.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            isGlowing
            onClick={handleArtistApplication}
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