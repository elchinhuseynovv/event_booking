import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, PlayCircle } from 'lucide-react';
import Button from '../ui/Button';
import { useWebsiteConfig } from '../../hooks/useWebsiteConfig';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { config } = useWebsiteConfig();

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

  // Get background video URL from database or fallback
  const getBackgroundVideoUrl = () => {
    return config?.background_video || 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/public/uidata/background_video.mp4';
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center hero-metallic">
      {/* Background Video with Metallic Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg"
        >
          <source src={getBackgroundVideoUrl()} type="video/mp4" />
        </video>
        {/* Dark metallic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-neutral-800/85 to-stone-900/90" />
        {/* Subtle metallic texture overlay */}
        <div className="absolute inset-0 metallic-texture opacity-20" />
      </div>
      
      {/* Animated Sound Wave - Metallic Style */}
      <div className="absolute bottom-0 left-0 right-0 metallic-sound-wave" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Keep original headline styling exactly as is */}
          <h1 ref={titleRef} className="mb-6 glitch floating" data-text="Book the Perfect DJ & Artist for Your Next Event">
            Book the Perfect <span className="hero-text-gradient">DJ & Artist</span> for Your Next Event
          </h1>
          
          <p className="text-xl text-zinc-300 mb-8 metallic-glass p-4 font-bold tracking-wide">
            From intimate gatherings to festival main stages, find and book the perfect talent to make your event unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              isGlowing
              rightIcon={<ChevronRight />}
              onClick={() => navigate('/artists')}
              className="metallic-gradient-border font-bold tracking-wider"
            >
              EXPLORE ARTISTS
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              leftIcon={<PlayCircle />}
              onClick={() => window.open('#', '_blank')}
              className="metallic-glass-outline font-bold tracking-wider"
            >
              WATCH SHOWREEL
            </Button>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 metallic-glass-dark p-4 rounded-xl border border-zinc-700/50">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((num) => (
                <img 
                  key={num}
                  src={`https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                  alt="DJ performing" 
                  className="w-12 h-12 rounded-full border-2 border-zinc-600 object-cover ring-2 ring-zinc-800"
                />
              ))}
            </div>
            <div>
              <div className="text-zinc-200 font-bold text-lg tracking-wide">500+ ARTISTS</div>
              <div className="text-zinc-400 text-sm font-medium tracking-wide">Ready to make your event special</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;