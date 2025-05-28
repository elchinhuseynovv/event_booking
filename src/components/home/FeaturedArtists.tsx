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
            <p className="text-neutral-400">Discover our top performers</p>
          </div>
          <Button 
            variant="ghost" 
            rightIcon={<ChevronRight />}
            onClick={() => navigate('/artists')}
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredArtists.map((artist) => (
            <div 
              key={artist.id} 
              className="card group"
              onClick={() => navigate(`/artists/${artist.id}`)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {artist.featured && (
                  <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-warning">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        fill={i < artist.rating ? 'currentColor' : 'none'}
                        size={16} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-400 ml-2">
                    ({artist.reviewCount})
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(artist.genres || []).map((genre, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-neutral-400">Starting from</p>
                    <p className="text-lg font-semibold text-primary">${artist.price}/hr</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/booking?artist=${artist.id}`);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;