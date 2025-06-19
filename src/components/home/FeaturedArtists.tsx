import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import Button from '../ui/Button';
import { featuredArtists } from '../../data/artists';

const FeaturedArtists: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="section bg-background-light">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="mb-2">Featured Artists</h2>
            <p className="text-neutral-400">From underground warehouses in Warsaw to international stages, we represent the artists shaping tomorrow's culture</p>
          </div>
          <Button 
            variant="ghost" 
            rightIcon={<ChevronRight />}
            onClick={() => navigate('/artists')}
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {featuredArtists.map((artist) => (
            <div 
              key={artist.id} 
              className="card group"
              onClick={() => navigate(`/artists/${artist.slug}`)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {artist.featured && (
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-neutral-600 text-white text-xs font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-3 md:p-6">
                <div className="flex items-center mb-1 md:mb-2">
                  <div className="flex text-neutral-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        fill={i < artist.rating ? 'currentColor' : 'none'}
                        size={12} 
                        className="md:w-4 md:h-4"
                      />
                    ))}
                  </div>
                  <span className="text-xs md:text-sm text-neutral-400 ml-1 md:ml-2">
                    ({artist.reviewCount})
                  </span>
                </div>
                
                <h3 className="text-sm md:text-xl font-bold mb-1">{artist.name}</h3>
                
                <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                  {(artist.genres || []).slice(0, 2).map((genre, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium bg-neutral-700 text-neutral-300 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs md:text-sm text-neutral-400">{artist.location}</p>
                    <p className="text-sm md:text-lg font-semibold text-white">{artist.experience} years exp.</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/booking?artist=${artist.id}`);
                    }}
                  >
                    Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* New tagline block */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-background rounded-xl p-8 border border-neutral-700">
            <p className="text-lg text-neutral-300 leading-relaxed">
              DJs, music producers, filmmakers, photographers, VJs — RAW MEDIA connects visionary talents with promoters, festivals and cultural institutions worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;