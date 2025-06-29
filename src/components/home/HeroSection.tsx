import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { useWebsiteConfig } from '../../hooks/useWebsiteConfig';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { config } = useWebsiteConfig();

  // Get background image URL from database or fallback
  const getBackgroundImageUrl = () => {
    return config?.background_video || 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/uidata/background.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1aWRhdGEvYmFja2dyb3VuZC5qcGciLCJpYXQiOjE3NTA3Nzk2MTcsImV4cCI6MjE4Mjc3OTYxN30.-nH5usbU7ykOb2_9FHhZQKR0pOvJeWbCGaG7ETiRCkI';
  };

  return (
    <section className="relative min-h-screen flex items-center hero-metallic">
      {/* Background Image with Metallic Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={getBackgroundImageUrl()}
          alt="RAW MEDIA Background"
          className="absolute w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark metallic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-neutral-800/85 to-stone-900/90" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Reduced top padding on mobile and removed extra spacing */}
          <h1 className="mb-6 pt-0 md:pt-16 lg:pt-0 text-white">
            WE REPRESENT ARTISTS WHO CREATE CULTURE
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-6 md:mb-8 metallic-glass p-3 md:p-4 font-bold tracking-wide">
            A EUROPE BASED GLOBAL TALENT AGENCY REPRESENTING CUTTING EDGE DJS, VISUAL ARTISTS AND MEDIA CREATORS
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              rightIcon={<ChevronRight />}
              onClick={() => navigate('/artists')}
              className="font-bold tracking-wider"
            >
              EXPLORE ARTISTS
            </Button>
          </div>
          
          <div className="mt-8 md:mt-12 metallic-glass-dark p-3 md:p-4 rounded-xl border border-zinc-700/50">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex justify-center md:justify-start -space-x-4">
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/sitephotos/Sound%20Vision%20Culture/DSC01275.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlcGhvdG9zL1NvdW5kIFZpc2lvbiBDdWx0dXJlL0RTQzAxMjc1LmpwZyIsImlhdCI6MTc1MDM1NzM1NSwiZXhwIjoyMTgyMzU3MzU1fQ.p3i94p3pkCad453WgbjIXKYz5mqisUC-P7ezlNjxnX8" 
                  alt="Sound Vision Culture artist 1" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-600 object-cover ring-2 ring-zinc-800"
                  loading="lazy"
                />
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/sitephotos/Sound%20Vision%20Culture/DSC04270.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlcGhvdG9zL1NvdW5kIFZpc2lvbiBDdWx0dXJlL0RTQzA0MjcwLmpwZyIsImlhdCI6MTc1MDM1NzQwMCwiZXhwIjoyMTgyMzU3NDAwfQ.toHoHHbTZVycjh6Hf058w2jQmxXJAT0doUiLCmgdbks" 
                  alt="Sound Vision Culture artist 2" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-600 object-cover ring-2 ring-zinc-800"
                  loading="lazy"
                />
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/sitephotos/Sound%20Vision%20Culture/DSC05665.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlcGhvdG9zL1NvdW5kIFZpc2lvbiBDdWx0dXJlL0RTQzA1NjY1LmpwZyIsImlhdCI6MTc1MDM1NzQwOSwiZXhwIjoyMTgyMzU3NDA5fQ.Z0Rg_L3PehUh0r43TjqOyI-PEPQcXeCBNtXwyS28OvM" 
                  alt="Sound Vision Culture artist 3" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-600 object-cover ring-2 ring-zinc-800"
                  loading="lazy"
                />
                <img 
                  src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/sitephotos/Sound%20Vision%20Culture/DSC06434%20(1).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlcGhvdG9zL1NvdW5kIFZpc2lvbiBDdWx0dXJlL0RTQzA2NDM0ICgxKS5qcGciLCJpYXQiOjE3NTA0MzUyNDcsImV4cCI6MjE4MjQzNTI0N30.AXhiGC68YdMTcsl0JXZt0HV3uMjnw5_kimDlwbXhqxo" 
                  alt="Sound Vision Culture artist 4" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-600 object-cover ring-2 ring-zinc-800"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="text-zinc-200 font-bold text-base md:text-lg tracking-wide">SOUND VISION CULTURE</div>
                <div className="text-zinc-400 text-sm font-medium tracking-wide">Artists who define tomorrow's underground aesthetic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;