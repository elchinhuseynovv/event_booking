import { Artist } from '../types/artist';

export const artists: Artist[] = [
  {
    id: '5',
    name: 'Huseyn Gurbanli',
    image: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/huseyngurbanliprofile.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL2h1c2V5bmd1cmJhbmxpcHJvZmlsZS5qcGciLCJpYXQiOjE3NDk3MTY3ODMsImV4cCI6MjE5ODk5Njc4M30.4qn7iTWB3pHMBfTaTvrgYUIpV38MkBfc0b7NGaSl12E',
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