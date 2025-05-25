import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedArtists from '../components/home/FeaturedArtists';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import { Music, Calendar, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedArtists />
      <HowItWorks />
      
      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem 
              icon={<Music />}
              value="500+"
              label="Professional Artists"
              color="primary"
            />
            <StatItem 
              icon={<Calendar />}
              value="10,000+"
              label="Events Completed"
              color="secondary"
            />
            <StatItem 
              icon={<Users />}
              value="250,000+"
              label="Happy Clients"
              color="accent"
            />
            <StatItem 
              icon={<Award />}
              value="50+"
              label="Award Winners"
              color="success"
            />
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container text-center">
          <h2 className="mb-6 max-w-3xl mx-auto">Ready to Create an Unforgettable Experience?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their perfect musical match for their events.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              isGlowing
              onClick={() => {}}
            >
              Book an Artist Now
            </Button>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

type StatItemProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
};

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, color }) => (
  <div className="flex flex-col items-center text-center">
    <div 
      className={`text-${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
      style={{ backgroundColor: `var(--tw-colors-${color}-500/10)` }}
    >
      {icon}
    </div>
    <div className="text-3xl font-bold mb-2">{value}</div>
    <div className="text-neutral-400">{label}</div>
  </div>
);

export default HomePage;