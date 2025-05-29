import { Artist } from '../types/artist';

export const artists: Artist[] = [
  {
    id: '5',
    name: 'Huseyn Gurbanli',
    image: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/huseyngurbanli.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjYjYyNGVjLWJhZmEtNDBlZC05ZjUxLTQ0NThkZWQ0MWQwMCJ9.eyJ1cmwiOiJhcnRpc3RzL2h1c2V5bmd1cmJhbmxpLmpwZyIsImlhdCI6MTc0ODQzMjQwNCwiZXhwIjoxODExNTA0NDA0fQ.ZiXgqaMi6ebmS8RYS5Q8VUCQTv8mQjp4qoD65MVj4iQ',
    backgroundImage: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'photographer',
    price: 160,
    rating: 5.0,
    reviewCount: 75,
    location: 'Warsaw',
    featured: true,
    experience: 7,
    bookings: 180,
    biography: 'Professional photographer and videographer with a unique eye for capturing authentic moments. Specializing in event photography, corporate shoots, and creative storytelling through visual media.',
    genres: ['Event Photography', 'Corporate Photography', 'Portrait Photography', 'Wedding Photography']
  }
];

export const featuredArtists = artists.filter(artist => artist.featured);