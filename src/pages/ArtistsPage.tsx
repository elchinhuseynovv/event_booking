import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ChevronDown, X } from 'lucide-react';
import Button from '../components/ui/Button';
import { artists } from '../data/artists';

type Category = 'all' | 'dj' | 'photographer';
type Location = string;
type SortOption = 'popularity' | 'priceAsc' | 'priceDesc' | 'rating';

const ArtistsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('popularity');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
    setSortBy('popularity');
  };

  const filteredArtists = artists.filter(artist => {
    const matchesSearch = searchTerm === '' || 
      artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      artist.category === selectedCategory;
    
    const matchesLocation = selectedLocations.length === 0 || 
      selectedLocations.includes(artist.location);
    
    return matchesSearch && matchesCategory && matchesLocation;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
      default:
        return b.bookings - a.bookings;
    }
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="mb-12">
          <h1 className="mb-4">Find Your Perfect Artist</h1>
          <p className="text-neutral-400 text-lg">
            Browse our curated selection of professional DJs and photographers
          </p>
        </div>

        {/* Search and filter section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-neutral-400" />
              </div>
              <input
                type="text"
                className="block w-full p-4 pl-10 bg-background-light border border-neutral-700 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Search artists by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sort dropdown */}
            <div className="relative min-w-[200px]">
              <select
                className="appearance-none block w-full p-4 pr-10 bg-background-light border border-neutral-700 rounded-lg focus:ring-primary focus:border-primary"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="popularity">Sort by: Popularity</option>
                <option value="rating">Sort by: Rating</option>
                <option value="priceAsc">Sort by: Price (Low to High)</option>
                <option value="priceDesc">Sort by: Price (High to Low)</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="w-5 h-5 text-neutral-400" />
              </div>
            </div>

            {/* Filter button (mobile) */}
            <Button
              variant="outline"
              className="md:hidden"
              leftIcon={<Filter size={18} />}
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            >
              Filters {(selectedCategory !== 'all' || selectedLocations.length > 0) && 
                `(${(selectedCategory !== 'all' ? 1 : 0) + selectedLocations.length})`}
            </Button>
          </div>

          {/* Filter section */}
          <div className={`bg-background-light border border-neutral-700 rounded-lg p-6 mb-6 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              {(selectedCategory !== 'all' || selectedLocations.length > 0) && (
                <button
                  className="text-neutral-400 hover:text-white text-sm flex items-center"
                  onClick={clearFilters}
                >
                  <X size={16} className="mr-1" /> Clear All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category filter */}
              <div>
                <h4 className="font-medium mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-background border border-neutral-700 text-neutral-300 hover:border-primary'
                    }`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All
                  </button>
                  <button
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategory === 'dj'
                        ? 'bg-primary text-white'
                        : 'bg-background border border-neutral-700 text-neutral-300 hover:border-primary'
                    }`}
                    onClick={() => setSelectedCategory('dj')}
                  >
                    DJs
                  </button>
                  <button
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategory === 'photographer'
                        ? 'bg-primary text-white'
                        : 'bg-background border border-neutral-700 text-neutral-300 hover:border-primary'
                    }`}
                    onClick={() => setSelectedCategory('photographer')}
                  >
                    Photographers/Videographers
                  </button>
                </div>
              </div>

              {/* Location filter */}
              <div>
                <h4 className="font-medium mb-3">Location</h4>
                <div className="flex flex-wrap gap-2">
                  {allLocations.map((location) => (
                    <button
                      key={location}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedLocations.includes(location)
                          ? 'bg-secondary text-white'
                          : 'bg-background border border-neutral-700 text-neutral-300 hover:border-secondary'
                      }`}
                      onClick={() => toggleLocation(location)}
                    >
                      {location}
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
                <div className="bg-primary/20 text-primary px-3 py-1 text-sm rounded-full flex items-center">
                  {selectedCategory === 'dj' ? 'DJs' : 'Photographers/Videographers'}
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
                  className="bg-secondary/20 text-secondary px-3 py-1 text-sm rounded-full flex items-center"
                >
                  {location}
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
        <div className="mb-6">
          <p className="text-neutral-400">
            Showing {filteredArtists.length} {filteredArtists.length === 1 ? 'artist' : 'artists'}
          </p>
        </div>

        {/* Artists grid */}
        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtists.map((artist) => (
              <div 
                key={artist.id} 
                className="card group cursor-pointer"
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
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < artist.rating ? 'fill-current' : 'stroke-current fill-none'
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-neutral-400 ml-2">
                      ({artist.reviewCount})
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                  
                  <div className="mb-2">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {artist.category === 'dj' ? 'DJ' : 'Photographer/Videographer'}
                    </span>
                  </div>
                  
                  <p className="text-sm text-neutral-400 mb-4">
                    {artist.location}
                  </p>
                  
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
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🎵</div>
            <h3 className="text-2xl font-bold mb-2">No artists found</h3>
            <p className="text-neutral-400 mb-6">
              Try adjusting your filters or search terms
            </p>
            <Button variant="primary" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistsPage;