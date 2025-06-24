import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import Button from '../components/ui/Button';
import { artists } from '../data/artists';

type Category = 'all' | 'dj' | 'photographer';
type Location = string;

const ArtistsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);

  const allLocations = [...new Set(artists.map(artist => artist.location))];

  const toggleLocation = (location: Location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(l => l !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedLocations([]);
  };

  const filteredArtists = artists.filter(artist => {
    const matchesSearch = searchTerm === '' || 
      artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      artist.category === selectedCategory;
    
    const matchesLocation = selectedLocations.length === 0 || 
      selectedLocations.includes(artist.location);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const djArtists = filteredArtists.filter(artist => artist.category === 'dj');
  const photographerArtists = filteredArtists.filter(artist => artist.category === 'photographer');

  return (
    <div className="character-select-page">
      <div className="container">
        {/* Hero Section */}
        <div className="character-select-header">
          <h1 className="character-select-title">SELECT YOUR ARTIST</h1>
          <p className="character-select-subtitle">
            CHOOSE FROM OUR ROSTER OF ELITE TALENT
          </p>
        </div>

        {/* Search and filter section */}
        <div className="character-select-controls">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-neutral-400" />
              </div>
              <input
                type="text"
                className="character-select-search"
                placeholder="Search artists by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter button (mobile) */}
            <Button
              variant="outline"
              className="md:hidden character-select-filter-btn"
              leftIcon={<Filter size={18} />}
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            >
              Filters {(selectedCategory !== 'all' || selectedLocations.length > 0) && 
                `(${(selectedCategory !== 'all' ? 1 : 0) + selectedLocations.length})`}
            </Button>
          </div>

          {/* Filter section */}
          <div className={`character-select-filters ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#E8E6E3]">FILTERS</h3>
              {(selectedCategory !== 'all' || selectedLocations.length > 0) && (
                <button
                  className="text-neutral-400 hover:text-[#E8E6E3] text-sm flex items-center"
                  onClick={clearFilters}
                >
                  <X size={16} className="mr-1" /> Clear All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category filter */}
              <div>
                <h4 className="font-medium mb-3 text-[#E8E6E3]">CATEGORY</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`character-select-filter-tag ${
                      selectedCategory === 'all' ? 'active' : ''
                    }`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    ALL
                  </button>
                  <button
                    className={`character-select-filter-tag ${
                      selectedCategory === 'dj' ? 'active' : ''
                    }`}
                    onClick={() => setSelectedCategory('dj')}
                  >
                    DJS
                  </button>
                  <button
                    className={`character-select-filter-tag ${
                      selectedCategory === 'photographer' ? 'active' : ''
                    }`}
                    onClick={() => setSelectedCategory('photographer')}
                  >
                    PHOTOGRAPHERS
                  </button>
                </div>
              </div>

              {/* Location filter */}
              <div>
                <h4 className="font-medium mb-3 text-[#E8E6E3]">LOCATION</h4>
                <div className="flex flex-wrap gap-2">
                  {allLocations.map((location) => (
                    <button
                      key={location}
                      className={`character-select-filter-tag ${
                        selectedLocations.includes(location) ? 'active' : ''
                      }`}
                      onClick={() => toggleLocation(location)}
                    >
                      {location.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Active filters display */}
          {(selectedCategory !== 'all' || selectedLocations.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategory !== 'all' && (
                <div className="character-select-active-filter">
                  {selectedCategory === 'dj' ? 'DJS' : 'PHOTOGRAPHERS'}
                  <button
                    className="ml-2"
                    onClick={() => setSelectedCategory('all')}
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              {selectedLocations.map((location) => (
                <div
                  key={location}
                  className="character-select-active-filter"
                >
                  {location.toUpperCase()}
                  <button
                    className="ml-2"
                    onClick={() => toggleLocation(location)}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="character-select-results-count">
          <p className="text-[#A8A6A1]">
            {filteredArtists.length} {filteredArtists.length === 1 ? 'ARTIST' : 'ARTISTS'} AVAILABLE
          </p>
        </div>

        {/* Artists sections */}
        {filteredArtists.length > 0 ? (
          <div className="character-select-sections">
            {/* DJs Section */}
            {(selectedCategory === 'all' || selectedCategory === 'dj') && djArtists.length > 0 && (
              <div className="character-select-section">
                <h2 className="character-select-section-title">
                  DJS
                  <span className="character-select-section-count">({djArtists.length})</span>
                </h2>
                <div className="character-select-grid">
                  {djArtists.map((artist) => (
                    <CharacterSelectCard 
                      key={artist.id} 
                      artist={artist} 
                      navigate={navigate}
                      isHovered={hoveredArtist === artist.id}
                      onHover={() => setHoveredArtist(artist.id)}
                      onLeave={() => setHoveredArtist(null)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Photographers Section */}
            {(selectedCategory === 'all' || selectedCategory === 'photographer') && photographerArtists.length > 0 && (
              <div className="character-select-section">
                <h2 className="character-select-section-title">
                  PHOTOGRAPHERS & VIDEOGRAPHERS
                  <span className="character-select-section-count">({photographerArtists.length})</span>
                </h2>
                <div className="character-select-grid">
                  {photographerArtists.map((artist) => (
                    <CharacterSelectCard 
                      key={artist.id} 
                      artist={artist} 
                      navigate={navigate}
                      isHovered={hoveredArtist === artist.id}
                      onHover={() => setHoveredArtist(artist.id)}
                      onLeave={() => setHoveredArtist(null)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="character-select-empty">
            <div className="text-6xl mb-4 opacity-50">🎵</div>
            <h3 className="text-2xl font-bold mb-2 text-[#E8E6E3]">NO ARTISTS FOUND</h3>
            <p className="text-[#A8A6A1] mb-6">
              Try adjusting your filters or search terms
            </p>
            <Button variant="primary" onClick={clearFilters}>
              CLEAR ALL FILTERS
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

interface CharacterSelectCardProps {
  artist: any;
  navigate: (path: string) => void;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const CharacterSelectCard: React.FC<CharacterSelectCardProps> = ({ 
  artist, 
  navigate, 
  isHovered, 
  onHover, 
  onLeave 
}) => (
  <div 
    className={`character-select-card ${isHovered ? 'selected' : ''}`}
    onClick={() => navigate(`/artists/${artist.slug}`)}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="character-select-portrait-container">
      <img 
        src={artist.image} 
        alt={artist.name} 
        className="character-select-portrait"
      />
      {artist.featured && (
        <div className="character-select-featured-badge">
          FEATURED
        </div>
      )}
      <div className="character-select-overlay">
        <div className="character-select-overlay-content">
          <div className="character-select-category">
            {artist.category === 'dj' ? 'DJ' : 'PHOTOGRAPHER'}
          </div>
          <div className="character-select-price">
            {artist.location.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
    
    <div className="character-select-info">
      <h3 className="character-select-name">{artist.name.toUpperCase()}</h3>
      <div className="character-select-location">{artist.location.toUpperCase()}</div>
    </div>
  </div>
);

export default ArtistsPage;