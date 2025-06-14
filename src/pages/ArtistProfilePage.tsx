import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Music, Clock, Instagram, Facebook, Twitter, Globe, Play, Heart, Share2, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { artists } from '../data/artists';

const ArtistProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'about' | 'media' | 'reviews'>('about');
  
  // Find the artist by ID
  const artist = artists.find(a => a.id === id);
  
  if (!artist) {
    return (
      <div className="pt-24 pb-16 container text-center">
        <h2 className="mb-4">Artist Not Found</h2>
        <p className="mb-8">Sorry, the artist you're looking for doesn't exist.</p>
        <Button variant="primary" onClick={() => navigate('/artists')}>
          Back to Artists
        </Button>
      </div>
    );
  }

  // Get social links based on artist
  const getSocialLinks = () => {
    if (artist.id === '1') { // WRK
      return {
        soundcloud: 'https://on.soundcloud.com/Qntc0dcB35cDSkJo4H',
        instagram: 'https://www.instagram.com/wrk_dj?igsh=OXFjam10bnlhd2F5',
        facebook: '#',
        twitter: '#',
        website: '#'
      };
    }
    
    // Default links for other artists
    return {
      soundcloud: '#',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      website: '#'
    };
  };

  const socialLinks = getSocialLinks();

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <div className="absolute inset-0">
            <img 
              src={artist.backgroundImage || artist.image} 
              alt={artist.name} 
              className="w-full h-full object-cover filter brightness-50"
            />
          </div>
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center md:items-end gap-8">
            <img 
              src={artist.image} 
              alt={artist.name}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-background shadow-xl object-cover"
            />
            <div className="text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {artist.genres.map((genre, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-medium bg-primary/30 backdrop-blur-sm text-white px-3 py-1 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <h1 className="mb-2">{artist.name}</h1>
              <div className="flex items-center justify-center md:justify-start gap-4 text-neutral-300 mb-4">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {artist.location}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {artist.experience} Years
                </div>
                <div className="flex items-center">
                  <Star size={16} className="mr-1 text-warning" />
                  {artist.rating}/5 ({artist.reviewCount})
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Button 
                  variant="primary" 
                  size="lg" 
                  isGlowing
                  onClick={() => navigate(`/booking?artist=${artist.id}`)}
                >
                  Book Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  leftIcon={<Heart size={18} />}
                >
                  Favorite
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  leftIcon={<Share2 size={18} />}
                >
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs Navigation */}
            <div className="flex border-b border-neutral-800 mb-8">
              <button
                className={`px-6 py-3 font-medium ${
                  activeTab === 'about'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-neutral-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button
                className={`px-6 py-3 font-medium ${
                  activeTab === 'media'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-neutral-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('media')}
              >
                Media
              </button>
              <button
                className={`px-6 py-3 font-medium ${
                  activeTab === 'reviews'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-neutral-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({artist.reviewCount})
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'about' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Biography</h2>
                  <p className="text-neutral-300 mb-6">
                    {artist.biography || `${artist.name} is a professional DJ and music producer based in ${artist.location}. With ${artist.experience} years of experience in the industry, they've performed at numerous venues and events, from intimate clubs to major festivals.`}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3">Musical Style</h3>
                  <p className="text-neutral-300 mb-6">
                    Specializing in {artist.genres.join(', ')}, {artist.name} creates an energetic atmosphere that keeps the dance floor packed all night long. Their unique sound combines classic tracks with the latest hits, always adapted to match the mood and theme of each event.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3">Equipment</h3>
                  <ul className="list-disc list-inside text-neutral-300 mb-6">
                    <li>Professional Pioneer DJ equipment</li>
                    <li>High-quality sound system</li>
                    <li>Dynamic lighting setup</li>
                    <li>Backup equipment for reliability</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-3">Events</h3>
                  <p className="text-neutral-300">
                    {artist.name} is available for a wide range of events including:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {['Weddings', 'Corporate Events', 'Nightclubs', 'Festivals', 'Private Parties', 'Birthday Celebrations'].map((event, index) => (
                      <div key={index} className="bg-background-light p-4 rounded-lg text-center">
                        {event}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'media' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Media Gallery</h2>
                  
                  {/* Featured Video */}
                  <div className="bg-background-light rounded-xl overflow-hidden mb-8">
                    <div className="aspect-video relative group cursor-pointer">
                      <img 
                        src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Featured performance" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                          <Play fill="white" size={30} />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold">Live at Summer Festival 2023</h4>
                      <p className="text-neutral-400 text-sm">Downtown Main Stage</p>
                    </div>
                  </div>
                  
                  {/* Photo Gallery */}
                  <h3 className="text-xl font-bold mb-4">Photos</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={`https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                          alt={`Gallery image ${item}`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Audio Samples */}
                  <h3 className="text-xl font-bold mb-4">Listen</h3>
                  <div className="space-y-4">
                    {['Summer Mix 2023', 'Club Classics Remix', 'Wedding Celebration Set'].map((track, index) => (
                      <div key={index} className="bg-background-light rounded-lg p-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                          <Play size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{track}</h4>
                          <p className="text-neutral-400 text-sm">60:00 min</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Client Reviews</h2>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={i < artist.rating ? 'text-warning fill-current' : 'text-neutral-500'}
                          />
                        ))}
                      </div>
                      <span className="font-bold">{artist.rating}</span>
                      <span className="text-neutral-400 ml-1">({artist.reviewCount})</span>
                    </div>
                  </div>
                  
                  {/* Review List */}
                  <div className="space-y-6">
                    {[
                      {
                        name: 'Sarah Johnson',
                        date: '2 months ago',
                        rating: 5,
                        comment: 'Absolutely amazing! The energy was perfect for our wedding reception. Everyone was on the dance floor all night long. Highly recommend!',
                        event: 'Wedding Reception'
                      },
                      {
                        name: 'Michael Rodriguez',
                        date: '3 months ago',
                        rating: 5,
                        comment: 'Fantastic performance at our corporate event. Very professional, arrived early to set up, and read the room perfectly. Will definitely book again for future events.',
                        event: 'Corporate Party'
                      },
                      {
                        name: 'Jessica Williams',
                        date: '5 months ago',
                        rating: 4,
                        comment: 'Great music selection and very accommodating with our requests. Only minor issue was a slight delay in start time, but the overall experience was excellent.',
                        event: 'Birthday Celebration'
                      }
                    ].map((review, index) => (
                      <div key={index} className="bg-background-light rounded-xl p-6">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-bold">{review.name}</h4>
                          <span className="text-neutral-400 text-sm">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <div className="flex text-warning mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < review.rating ? 'fill-current' : 'text-neutral-500'}
                              />
                            ))}
                          </div>
                          <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {review.event}
                          </span>
                        </div>
                        <p className="text-neutral-300 mt-3">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button variant="outline">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Booking Card */}
            <div className="bg-background-light rounded-xl p-6 sticky top-24 mb-8">
              <h3 className="text-xl font-bold mb-4">Book This Artist</h3>
              
              <div className="flex justify-between mb-4 pb-4 border-b border-neutral-800">
                <span className="text-neutral-400">Starting price:</span>
                <span className="text-2xl font-bold text-primary">${artist.price}/hr</span>
              </div>
              
              <p className="text-neutral-300 mb-6">
                Fill out the booking form to check availability and get a personalized quote for your event.
              </p>
              
              <Button
                variant="primary"
                fullWidth
                isGlowing
                onClick={() => navigate(`/booking?artist=${artist.id}`)}
              >
                Check Availability
              </Button>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <Calendar size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Typical Response Time</h4>
                    <p className="text-neutral-400 text-sm">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Music size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Equipment Included</h4>
                    <p className="text-neutral-400 text-sm">Professional sound & lighting setup</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Performance Duration</h4>
                    <p className="text-neutral-400 text-sm">Flexible, from 2 hours to all night</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-background-light rounded-xl p-6 mb-8">
              <h3 className="font-bold mb-4">Connect</h3>
              
              <div className="flex flex-wrap gap-2">
                {/* SoundCloud */}
                {socialLinks.soundcloud !== '#' && (
                  <a 
                    href={socialLinks.soundcloud} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-[#FF5500] text-white hover:bg-[#FF4400] transition-colors"
                    aria-label="SoundCloud"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.25 0 .896.394 1.703 1 2.25v-4.5zm10.237 5.25c-.185 0-.312-.149-.312-.35v-8.55c0-.201.127-.35.312-.35.185 0 .313.149.313.35v8.55c0 .201-.128.35-.313.35zm3.736-2.083c0 2.59-2.1 4.691-4.691 4.691-.185 0-.312-.149-.312-.35v-8.55c0-.201.127-.35.312-.35 2.591 0 4.691 2.1 4.691 4.559z"/>
                    </svg>
                  </a>
                )}
                
                {/* Instagram */}
                {socialLinks.instagram !== '#' && (
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] text-white hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                )}
                
                {/* Facebook */}
                <a 
                  href={socialLinks.facebook} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1877F2] text-white hover:bg-[#166FE5] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                
                {/* Twitter */}
                <a 
                  href={socialLinks.twitter} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1A91DA] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                
                {/* Website */}
                <a 
                  href={socialLinks.website} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white hover:bg-primary-600 transition-colors"
                  aria-label="Website"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>
            
            {/* Similar Artists */}
            <div className="bg-background-light rounded-xl p-6">
              <h3 className="font-bold mb-4">Similar Artists</h3>
              
              <div className="space-y-4">
                {artists
                  .filter(a => a.id !== artist.id && a.genres.some(g => artist.genres.includes(g)))
                  .slice(0, 3)
                  .map(similarArtist => (
                    <div 
                      key={similarArtist.id}
                      className="flex items-center gap-3 cursor-pointer hover:bg-background/30 p-2 rounded-lg transition-colors"
                      onClick={() => navigate(`/artists/${similarArtist.id}`)}
                    >
                      <img 
                        src={similarArtist.image} 
                        alt={similarArtist.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{similarArtist.name}</h4>
                        <div className="flex items-center text-sm text-neutral-400">
                          <Star size={12} className="text-warning fill-current mr-1" />
                          {similarArtist.rating} · {similarArtist.genres[0]}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfilePage;