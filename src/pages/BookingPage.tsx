import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Music, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { artists } from '../data/artists';

const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const artistId = searchParams.get('artist');
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(artistId);
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventDuration, setEventDuration] = useState('4');
  const [eventType, setEventType] = useState('');
  const [venueName, setVenueName] = useState('');
  const [venueAddress, setVenueAddress] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  
  useEffect(() => {
    // Scroll to top when step changes
    window.scrollTo(0, 0);
  }, [currentStep]);
  
  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const validateCurrentStep = () => {
    // Basic validation for each step
    switch (currentStep) {
      case 1:
        return !!selectedArtist;
      case 2:
        return !!eventDate && !!eventTime && !!eventType && !!eventDuration;
      case 3:
        return !!venueName && !!venueAddress && !!guestCount;
      case 4:
        return !!contactName && !!contactEmail && !!contactPhone;
      default:
        return true;
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the booking to a backend
    setIsBookingComplete(true);
  };

  const selectedArtistData = artists.find(a => a.id === selectedArtist);
  
  // If booking is complete, show success message
  if (isBookingComplete) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container max-w-3xl mx-auto">
          <div className="bg-background-light rounded-xl p-8 text-center">
            <div className="w-20 h-20 bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Booking Submitted Successfully!</h1>
            <p className="text-neutral-300 text-lg mb-8">
              Thank you for your booking request. We will review your details and get back to you within 24 hours to confirm availability and pricing.
            </p>
            <div className="mb-8 p-6 bg-background rounded-lg">
              <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-neutral-400 text-sm">Artist</p>
                  <p className="font-medium">{selectedArtistData?.name}</p>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Event Date & Time</p>
                  <p className="font-medium">{eventDate} at {eventTime}</p>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Duration</p>
                  <p className="font-medium">{eventDuration} hours</p>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Event Type</p>
                  <p className="font-medium">{eventType}</p>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Venue</p>
                  <p className="font-medium">{venueName}</p>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Guest Count</p>
                  <p className="font-medium">{guestCount} people</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                onClick={() => navigate('/')}
              >
                Return to Homepage
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/artists')}
              >
                Browse More Artists
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container">
        <h1 className="text-center mb-2">Book Your Perfect Artist</h1>
        <p className="text-center text-neutral-400 text-lg mb-12">
          Fill out the form below to request a booking for your event
        </p>
        
        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex justify-between relative">
            {/* Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-700 -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-neutral-600 -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${(currentStep - 1) * 33.3}%` }}
            ></div>
            
            {/* Step Circles */}
            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors duration-300 ${
                  step <= currentStep
                    ? 'bg-neutral-600 text-white'
                    : 'bg-neutral-700 text-neutral-400'
                }`}
              >
                {step < currentStep ? (
                  <Check className="h-5 w-5" />
                ) : (
                  step
                )}
              </div>
            ))}
          </div>
          
          {/* Step Labels */}
          <div className="flex justify-between mt-2 text-sm">
            <div className={`w-10 text-center ${currentStep >= 1 ? 'text-white' : 'text-neutral-400'}`}>
              Artist
            </div>
            <div className={`w-10 text-center ${currentStep >= 2 ? 'text-white' : 'text-neutral-400'}`}>
              Event
            </div>
            <div className={`w-10 text-center ${currentStep >= 3 ? 'text-white' : 'text-neutral-400'}`}>
              Venue
            </div>
            <div className={`w-10 text-center ${currentStep >= 4 ? 'text-white' : 'text-neutral-400'}`}>
              Contact
            </div>
          </div>
        </div>
        
        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="bg-background-light rounded-xl p-6 md:p-8">
            {/* Step 1: Select Artist */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Music className="mr-2 text-neutral-400" /> Choose Your Artist
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {artists.map((artist) => (
                    <div 
                      key={artist.id}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-colors ${
                        selectedArtist === artist.id
                          ? 'border-neutral-600 bg-neutral-800'
                          : 'border-neutral-700 hover:border-neutral-600'
                      }`}
                      onClick={() => setSelectedArtist(artist.id)}
                    >
                      <div className="flex items-center">
                        <img 
                          src={artist.image} 
                          alt={artist.name} 
                          className="w-12 h-12 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-medium">{artist.name}</h4>
                          <p className="text-sm text-neutral-400">
                            {artist.genres?.[0]}, {artist.experience} years exp.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {selectedArtistData && (
                  <div className="mt-8">
                    <h3 className="font-semibold mb-2">Selected Artist</h3>
                    <div className="bg-background p-4 rounded-lg flex items-center">
                      <img 
                        src={selectedArtistData.image} 
                        alt="Selected artist" 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-medium">{selectedArtistData.name}</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedArtistData.genres && Array.isArray(selectedArtistData.genres) && selectedArtistData.genres.map((genre, index) => (
                            <span 
                              key={index} 
                              className="text-xs font-medium bg-neutral-700 text-neutral-300 px-2 py-1 rounded-full"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Step 2: Event Details */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Calendar className="mr-2 text-neutral-400" /> Event Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Event Date*
                    </label>
                    <input
                      type="date"
                      className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Start Time*
                    </label>
                    <input
                      type="time"
                      className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                      value={eventTime}
                      onChange={(e) => setEventTime(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Event Type*
                    </label>
                    <select
                      className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      required
                    >
                      <option value="">Select event type</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Nightclub">Nightclub</option>
                      <option value="Festival">Festival</option>
                      <option value="Private Party">Private Party</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Duration (hours)*
                    </label>
                    <select
                      className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                      value={eventDuration}
                      onChange={(e) => setEventDuration(e.target.value)}
                      required
                    >
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                      <option value="5">5 hours</option>
                      <option value="6">6 hours</option>
                      <option value="8">8 hours</option>
                      <option value="custom">Custom duration</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Special Requests or Additional Information
                  </label>
                  <textarea
                    className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600 min-h-[120px]"
                    placeholder="Please share any specific music preferences, special dedications, or other important details..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                  ></textarea>
                </div>
              </div>
            )}
            
            {/* Step 3: Venue Details */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MapPin className="mr-2 text-neutral-400" /> Venue Information
                </h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Venue Name*
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                    placeholder="e.g. Underground Warehouse, Techno Club Berlin"
                    value={venueName}
                    onChange={(e) => setVenueName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Venue Address*
                  </label>
                  <textarea
                    className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                    placeholder="Full address including city and zip code"
                    value={venueAddress}
                    onChange={(e) => setVenueAddress(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Approximate Guest Count*
                    </label>
                    <input
                      type="number"
                      className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                      placeholder="e.g. 100"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Venue Type
                    </label>
                    <select
                      className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                    >
                      <option value="">Select venue type</option>
                      <option value="Underground Warehouse">Underground Warehouse</option>
                      <option value="Techno Club">Techno Club</option>
                      <option value="Rave Venue">Rave Venue</option>
                      <option value="Industrial Space">Industrial Space</option>
                      <option value="Underground Bunker">Underground Bunker</option>
                      <option value="Alternative Space">Alternative Space</option>
                      <option value="Festival Ground">Festival Ground</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Venue Facilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-5 w-5 rounded text-neutral-600" />
                      <span>Sound system available</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-5 w-5 rounded text-neutral-600" />
                      <span>Lighting equipment available</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-5 w-5 rounded text-neutral-600" />
                      <span>Stage available</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-5 w-5 rounded text-neutral-600" />
                      <span>Dance floor available</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Contact Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                      placeholder="Your full name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                      placeholder="Your email address"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-background border border-neutral-700 rounded-lg p-3 focus:border-neutral-600"
                    placeholder="Your phone number"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 rounded text-neutral-600" required />
                    <span className="text-sm">
                      I agree to the <a href="#" className="text-white hover:underline">terms and conditions</a> and <a href="#" className="text-white hover:underline">privacy policy</a>
                    </span>
                  </label>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 rounded text-neutral-600" />
                    <span className="text-sm">
                      Subscribe to our newsletter for special offers and updates
                    </span>
                  </label>
                </div>
                
                <div className="bg-neutral-800 rounded-lg p-4 mb-6">
                  <p className="text-sm">
                    <strong>Note:</strong> This is a booking request only. Our team will contact you within 24 hours to confirm availability and final pricing. No payment is required at this stage.
                  </p>
                </div>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <Button
                  variant="outline"
                  leftIcon={<ChevronLeft size={18} />}
                  onClick={handlePreviousStep}
                >
                  Previous
                </Button>
              ) : (
                <div></div> // Empty div to maintain layout
              )}
              
              {currentStep < 4 ? (
                <Button
                  variant="primary"
                  rightIcon={<ChevronRight size={18} />}
                  onClick={handleNextStep}
                  disabled={!validateCurrentStep()}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!validateCurrentStep()}
                >
                  Submit Booking
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;