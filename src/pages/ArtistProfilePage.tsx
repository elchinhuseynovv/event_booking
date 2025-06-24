import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Music, Clock, Instagram, Play, ExternalLink, Headphones, Globe, Camera } from 'lucide-react';
import Button from '../components/ui/Button';
import ShareButton from '../components/ui/ShareButton';
import SoundCloudPlayer from '../components/ui/SoundCloudPlayer';
import { findArtistBySlugOrId } from '../data/artists';

const ArtistProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'about' | 'media'>('about'); // Changed from 'media' to 'about'
  
  // Find the artist by slug or ID
  const artist = id ? findArtistBySlugOrId(id) : undefined;
  
  // Debug logging
  console.log('Artist slug/ID from URL:', id);
  console.log('Found artist:', artist);
  console.log('Artist soundcloud tracks:', artist?.soundcloudTracks);
  console.log('Artist gallery images:', artist?.galleryImages);
  console.log('Artist video showreel:', artist?.videoShowreel);
  
  if (!artist) {
    return (
      <div className="pt-24 pb-16 container text-center">
        <h2 className="mb-4">Artist Not Found</h2>
        <p className="mb-4">Sorry, the artist you're looking for doesn't exist.</p>
        <p className="mb-8 text-neutral-400">
          Searched for: {id}
        </p>
        <Button variant="primary" onClick={() => navigate('/artists')}>
          Back to Artists
        </Button>
      </div>
    );
  }

  // Get social links based on artist
  const getSocialLinks = () => {
    if (artist.slug === 'wrk') { // WRK
      return {
        soundcloud: 'https://soundcloud.com/wrk_dj/tracks',
        instagram: 'https://www.instagram.com/wrk_dj?igsh=OXFjam10bnlhd2F5'
      };
    }
    
    if (artist.slug === 'huseyn') { // Huseyn
      return {
        soundcloud: '',
        instagram: 'https://www.instagram.com/raw_visualstudio',
        tiktok: 'https://www.tiktok.com/@raw_visualstudio',
        website: 'https://raw-visualstudio.com',
        pinterest: 'https://pl.pinterest.com/rawvisualstudioffical',
        youtube: 'https://www.youtube.com/@RawVisualStudio'
      };
    }
    
    // Default links for other artists (empty for now)
    return {
      soundcloud: '',
      instagram: ''
    };
  };

  const socialLinks = getSocialLinks();

  // Get featured video based on artist
  const getFeaturedVideo = () => {
    if (artist.slug === 'wrk') { // WRK
      return {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/WRKvideo%20(1).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy9XUkt2aWRlbyAoMSkubXA0IiwiaWF0IjoxNzUwMTk2MTMzLCJleHAiOjIxODIxOTYxMzN9.PWejYc7tHHTrrt3Ik4aTruqlnT8PP96qpHw29LEHgso',
        title: 'WRK - Teletech 2025',
        description: 'Raw techno power in motion'
      };
    }
    
    if (artist.slug === 'huseyn') { // Huseyn
      // Use the intro video as the featured video
      return {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/Huseyn%20(1).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL0h1c2V5biAoMSkubXA0IiwiaWF0IjoxNzUwMTk5NzI0LCJleHAiOjIxODIxOTk3MjR9.L_ZlGXCvWauXZTaTF9wQoQXYkY5xvi4qAawashE_Cfk',
        title: 'Raw Visual Studio - Intro Reel 2025',
        description: 'Personal introduction and visual style showcase'
      };
    }
    
    // Default video for other artists
    return {
      url: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Live Performance Highlights',
      description: 'Professional event coverage'
    };
  };

  const featuredVideo = getFeaturedVideo();

  // Get cover background for Huseyn (video) or other artists (image)
  const getCoverBackground = () => {
    if (artist.slug === 'huseyn') {
      // Return the new video URL for Huseyn's cover
      return {
        type: 'video',
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/Huseyn%20(1).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL0h1c2V5biAoMSkubXA0IiwiaWF0IjoxNzUwNzc3OTQ5LCJleHAiOjIxODI3Nzc5NDl9.9VVRDZbHzBmWsByxHBNimqLQ3GCKteWaMxHKx14_Glo'
      };
    }
    
    // For other artists, use their background image
    return {
      type: 'image',
      url: artist.backgroundImage || artist.image
    };
  };

  const coverBackground = getCoverBackground();

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <div className="absolute inset-0">
            {coverBackground.type === 'video' ? (
              // Video background for Huseyn
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover filter brightness-50"
              >
                <source src={coverBackground.url} type="video/mp4" />
                {/* Fallback to image if video fails */}
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover filter brightness-50"
                />
              </video>
            ) : (
              // Image background for other artists
              <img 
                src={coverBackground.url} 
                alt={artist.name} 
                className="w-full h-full object-cover filter brightness-50"
              />
            )}
          </div>
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center md:items-end gap-8">
            <img 
              src={artist.image} 
              alt={artist.name}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-background shadow-xl object-cover"
            />
            <div className="text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {artist.genres && artist.genres.map((genre, index) => (
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
                <ShareButton artist={artist} />
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
            </div>
            
            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'about' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Biography</h2>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {artist.biography || 'No biography available.'}
                  </p>
                  
                  {/* Show signature for Huseyn */}
                  {artist.signature && (
                    <>
                      <h3 className="text-xl font-bold mb-3">Signature Style</h3>
                      <p className="text-neutral-300 mb-6 leading-relaxed">
                        {artist.signature}
                      </p>
                    </>
                  )}
                  
                  {/* Show mission for Huseyn */}
                  {artist.mission && (
                    <>
                      <h3 className="text-xl font-bold mb-3">Mission</h3>
                      <p className="text-neutral-300 mb-6 leading-relaxed">
                        {artist.mission}
                      </p>
                    </>
                  )}
                  
                  <h3 className="text-xl font-bold mb-4">Specializations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {artist.genres && artist.genres.map((genre, index) => (
                      <div 
                        key={index} 
                        className="bg-neutral-800 border border-neutral-600 rounded-lg p-4 text-center font-medium text-white hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-300"
                      >
                        {genre}
                      </div>
                    ))}
                  </div>
                  
                  {artist.category === 'photographer' ? (
                    <>
                      <h3 className="text-xl font-bold mb-3">Equipment & Services</h3>
                      <ul className="list-disc list-inside text-neutral-300 mb-6">
                        <li>Professional camera equipment for low-light environments</li>
                        <li>4K video recording capabilities</li>
                        <li>Live event streaming setup</li>
                        <li>Post-production editing and color grading</li>
                        <li>Same-day delivery for urgent projects</li>
                      </ul>
                      
                      <h3 className="text-xl font-bold mb-4">Event Types</h3>
                      <p className="text-neutral-300 mb-4">
                        {artist.name} specializes in capturing the raw energy of:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Techno Events', 'Underground Raves', 'Music Festivals', 'Club Nights', 'Artist Portraits', 'Behind the Scenes'].map((event, index) => (
                          <div 
                            key={index} 
                            className="bg-neutral-800 border border-neutral-600 rounded-lg p-4 text-center font-medium text-white hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-300"
                          >
                            {event}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold mb-3">Equipment</h3>
                      <ul className="list-disc list-inside text-neutral-300 mb-6">
                        <li>Professional Pioneer DJ equipment</li>
                        <li>High-quality sound system</li>
                        <li>Dynamic lighting setup</li>
                        <li>Backup equipment for reliability</li>
                      </ul>
                      
                      <h3 className="text-xl font-bold mb-4">Events</h3>
                      <p className="text-neutral-300 mb-4">
                        {artist.name} is available for underground and club events including:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {artist.slug === 'wrk' ? (
                          // WRK's specialized events
                          ['Underground Raves', 'Techno Clubs', 'Music Festivals', 'Warehouse Parties', 'Neo Rave Events', 'Schranz Nights'].map((event, index) => (
                            <div 
                              key={index} 
                              className="bg-neutral-800 border border-neutral-600 rounded-lg p-4 text-center font-medium text-white hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-300"
                            >
                              {event}
                            </div>
                          ))
                        ) : (
                          // Other DJs' general events
                          ['Weddings', 'Corporate Events', 'Nightclubs', 'Festivals', 'Private Parties', 'Birthday Celebrations'].map((event, index) => (
                            <div 
                              key={index} 
                              className="bg-neutral-800 border border-neutral-600 rounded-lg p-4 text-center font-medium text-white hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-300"
                            >
                              {event}
                            </div>
                          ))
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}
              
              {activeTab === 'media' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Media Gallery</h2>
                  
                  {/* Video Showreel Section - Show for photographers/videographers */}
                  {artist.videoShowreel && artist.videoShowreel.length > 0 && (
                    <>
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-bold">
                            Video Showreel
                          </h3>
                        </div>
                        
                        <div className="space-y-6">
                          {artist.videoShowreel
                            .filter(video => video.title !== 'Raw Visual Studio - Intro Reel 2025') // Filter out the intro video
                            .map((video, index) => (
                            <div key={index} className="bg-background-light rounded-xl overflow-hidden">
                              <div className="aspect-video relative group">
                                <video 
                                  className="w-full h-full object-cover"
                                  controls
                                  preload="metadata"
                                >
                                  <source src={video.url} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-bold text-lg">{video.title}</h4>
                                  <span className="text-sm text-neutral-400 bg-neutral-800 px-2 py-1 rounded">
                                    {video.duration}
                                  </span>
                                </div>
                                <p className="text-neutral-400 text-sm mb-2">
                                  {video.description}
                                </p>
                                <div className="flex items-center">
                                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                    video.type === 'intro' ? 'bg-blue-500/20 text-blue-400' :
                                    video.type === 'event' ? 'bg-purple-500/20 text-purple-400' :
                                    video.type === 'festival' ? 'bg-green-500/20 text-green-400' :
                                    'bg-neutral-500/20 text-neutral-400'
                                  }`}>
                                    {video.type.charAt(0).toUpperCase() + video.type.slice(1)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* SoundCloud Tracks Section - Show for ALL artists that have tracks */}
                  {artist.soundcloudTracks && artist.soundcloudTracks.length > 0 && (
                    <>
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-bold flex items-center">
                            <Headphones className="mr-2 text-orange-500" size={24} />
                            Latest Tracks
                          </h3>
                          {socialLinks.soundcloud && (
                            <a 
                              href={socialLinks.soundcloud}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                            >
                              <ExternalLink size={16} className="mr-1" />
                              View on SoundCloud
                            </a>
                          )}
                        </div>
                        
                        <div className="space-y-4">
                          {artist.soundcloudTracks.map((track, index) => (
                            <SoundCloudPlayer 
                              key={index} 
                              track={track} 
                              index={index}
                            />
                          ))}
                        </div>
                        
                        {/* SoundCloud Profile Link */}
                        {socialLinks.soundcloud && (
                          <div className="mt-6 text-center">
                            <a
                              href={socialLinks.soundcloud}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.25 0 .896.394 1.703 1 2.25v-4.5zm10.237 5.25c-.185 0-.312-.149-.312-.35v-8.55c0-.201.127-.35.312-.35.185 0 .313.149.313.35v8.55c0 .201-.128.35-.313.35zm3.736-2.083c0 2.59-2.1 4.691-4.691 4.691-.185 0-.312-.149-.312-.35v-8.55c0-.201.127-.35.312-.35 2.591 0 4.691 2.1 4.691 4.559z"/>
                              </svg>
                              View Full SoundCloud Profile
                            </a>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  
                  {/* Featured Video - Only show if no video showreel exists */}
                  {(!artist.videoShowreel || artist.videoShowreel.length === 0) && (
                    <div className="bg-background-light rounded-xl overflow-hidden mb-8">
                      <div className="aspect-video relative group cursor-pointer">
                        {artist.slug === 'wrk' ? (
                          // WRK gets the actual video
                          <video 
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                          >
                            <source src={featuredVideo.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          // Other artists get the image placeholder
                          <>
                            <img 
                              src={featuredVideo.url} 
                              alt="Featured performance" 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                                <Play fill="white" size={30} />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold">
                          {featuredVideo.title}
                        </h4>
                        <p className="text-neutral-400 text-sm">
                          {featuredVideo.description}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Photo Gallery - REMOVED CAPTION OVERLAYS */}
                  <h3 className="text-xl font-bold mb-4">
                    {artist.category === 'photographer' ? 'Portfolio' : 'Photos'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {artist.galleryImages && artist.galleryImages.length > 0 ? (
                      artist.galleryImages.map((image, index) => (
                        <div key={index} className="aspect-square rounded-lg overflow-hidden">
                          <img 
                            src={image.url} 
                            alt={image.alt} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))
                    ) : (
                      // Fallback to default images if no gallery images
                      [1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="aspect-square rounded-lg overflow-hidden">
                          <img 
                            src={`https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                            alt={`Gallery image ${item}`} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))
                    )}
                  </div>
                  
                  {/* Additional Content for Photographers */}
                  {artist.category === 'photographer' && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Recent Projects</h3>
                      <div className="space-y-4">
                        {['Boiler Room Warsaw 2024', 'Hive Festival Documentation', 'Verknipt After Movie'].map((project, index) => (
                          <div key={index} className="bg-background-light rounded-lg p-4 flex items-center">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                              <Play size={20} className="text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">{project}</h4>
                              <p className="text-neutral-400 text-sm">Video Documentation</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Booking Card */}
            <div className="bg-background-light rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Book This Artist</h3>
              
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
                    <p className="text-neutral-400 text-sm">
                      {artist.slug === 'huseyn' ? 'Within 3 hours' : 'Within 24 hours'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  {artist.category === 'photographer' ? (
                    <Camera size={20} className="text-primary mr-3 mt-1" />
                  ) : (
                    <Music size={20} className="text-primary mr-3 mt-1" />
                  )}
                  <div>
                    <h4 className="font-medium">
                      {artist.category === 'photographer' ? 'Equipment Included' : 'Equipment Included'}
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      {artist.category === 'photographer' ? 'Professional camera & editing setup' : 'Professional sound & lighting setup'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">
                      {artist.category === 'photographer' ? 'Coverage Duration' : 'Performance Duration'}
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      {artist.category === 'photographer' ? 'Flexible, from 2 hours to full event' : 'Flexible, from 2 hours to all night'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-background-light rounded-xl p-6">
              <h3 className="font-bold mb-4">Connect</h3>
              
              <div className="flex flex-wrap gap-2">
                {/* SoundCloud - only show if URL exists */}
                {socialLinks.soundcloud && (
                  <a 
                    href={socialLinks.soundcloud} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110"
                    aria-label="SoundCloud"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.25 0 .896.394 1.703 1 2.25v-4.5zm10.237 5.25c-.185 0-.312-.149-.312-.35v-8.55c0-.201.127-.35.312-.35.185 0 .313.149.313.35v8.55c0 .201-.128.35-.313.35zm3.736-2.083c0 2.59-2.1 4.691-4.691 4.691-.185 0-.312-.149-.312-.35v-8.55c0-.201.127-.35.312-.35 2.591 0 4.691 2.1 4.691 4.559z"/>
                    </svg>
                  </a>
                )}
                
                {/* Instagram - only show if URL exists */}
                {socialLinks.instagram && (
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] text-white hover:opacity-80 transition-opacity transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                )}

                {/* TikTok - only show if URL exists */}
                {socialLinks.tiktok && (
                  <a 
                    href={socialLinks.tiktok} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
                    aria-label="TikTok"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                )}

                {/* Website - only show if URL exists */}
                {socialLinks.website && (
                  <a 
                    href={socialLinks.website} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
                    aria-label="Website"
                  >
                    <Globe size={18} />
                  </a>
                )}

                {/* Pinterest - only show if URL exists */}
                {socialLinks.pinterest && (
                  <a 
                    href={socialLinks.pinterest} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110"
                    aria-label="Pinterest"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.803 1.604.803 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.472-.808-.472-1.458 0-1.809 1.337-3.57 3.613-3.57 1.968 0 3.323 1.333 3.323 3.231 0 2.067-.895 3.486-2.067 3.486-.632 0-1.175-.529-.999-1.175.211-.777.620-1.612.620-2.175 0-.502-.266-.921-.817-.921-.649 0-1.171.679-1.171 1.588 0 .577.194.967.194.967s-.656 2.804-.77 3.288c-.164.694-.025 1.588.013 1.678.021.05.049.045.069.018.032-.045.436-.558.642-1.216.08-.257.459-1.8.459-1.8.240.458.938.854 1.683.854 2.217 0 3.811-2.042 3.811-4.539C18.121 6.292 15.623 4.75 12 4.75c-3.623 0-6.371 1.542-6.371 4.789 0 1.32.496 2.490 1.56 2.92.174.07.330.004.381-.19.036-.132.121-.484.158-.628.052-.196.032-.265-.114-.437-.324-.381-.531-.871-.531-1.565 0-2.014 1.505-3.815 3.917-3.815 2.137 0 3.31 1.313 3.31 3.067 0 2.307-.102 4.248-1.614 4.248-.532 0-.929-.441-.802-.982.151-.646.444-1.342.444-1.808 0-.417-.223-.765-.686-.765-.544 0-.982.563-.982 1.317 0 .481.163.806.163.806s-.556 2.357-.653 2.77c-.097.412-.146.919-.097 1.303C5.098 18.746 1.5 15.745 1.5 12 1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5z"/>
                    </svg>
                  </a>
                )}

                {/* YouTube - only show if URL exists */}
                {socialLinks.youtube && (
                  <a 
                    href={socialLinks.youtube} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-110"
                    aria-label="YouTube"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            
            {/* Similar Artists */}
            <div className="bg-background-light rounded-xl p-6">
              <h3 className="font-bold mb-4">Similar Artists</h3>
              
              <div className="space-y-4">
                {/* We'll need to import artists here, but for now let's use a placeholder */}
                <p className="text-neutral-400 text-sm">More artists coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfilePage;