import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, PlayCircle } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scroll = window.scrollY;
        const offset = scroll * 0.5;
        heroRef.current.style.setProperty('--scroll-offset', `${offset}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.setAttribute('data-text', titleRef.current.textContent || '');
    }
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg"
        >
          <source src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/public/uidata/background_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Animated Sound Wave */}
      <div className="absolute bottom-0 left-0 right-0 sound-wave" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 ref={titleRef} className="mb-6 glitch floating" data-text="Book the Perfect DJ & Artist for Your Next Event">
            Book the Perfect <span className="hero-text-gradient">DJ & Artist</span> for Your Next Event
          </h1>
          
          <p className="text-xl text-neutral-300 mb-8 glass p-4">
            From intimate gatherings to festival main stages, find and book the perfect talent to make your event unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              isGlowing
              rightIcon={<ChevronRight />}
              onClick={() => navigate('/artists')}
              className="gradient-border"
            >
              Explore Artists
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              leftIcon={<PlayCircle />}
              onClick={() => window.open('#', '_blank')}
              className="glass"
            >
              Watch Showreel
            </Button>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 glass p-4 rounded-xl">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((num) => (
                <img 
                  key={num}
                  src={`https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                  alt="DJ performing" 
                  className="w-12 h-12 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div>
              <div className="text-primary font-bold">500+ Artists</div>
              <div className="text-neutral-400 text-sm">Ready to make your event special</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;