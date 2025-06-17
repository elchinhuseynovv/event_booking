import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import FeaturedArtists from '../components/home/FeaturedArtists';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeroSection />
      <FeaturedArtists />
      <HowItWorks />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container text-center">
          <h2 className="mb-6 max-w-3xl mx-auto">Ready to Connect with Underground Culture?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Discover artists who define tomorrow's sound, vision and culture through RAW MEDIA's curated talent network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              isGlowing
              onClick={() => navigate('/booking')}
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

export default HomePage;