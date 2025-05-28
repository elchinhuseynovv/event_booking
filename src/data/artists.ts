import { Artist } from '../types/artist';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'DJ Electra',
    image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backgroundImage: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'dj',
    price: 150,
    rating: 4.9,
    reviewCount: 128,
    location: 'Los Angeles',
    featured: true,
    experience: 8,
    bookings: 312,
    biography: 'DJ Electra is an award-winning electronic music producer and DJ with over 8 years of experience performing at top venues around the world.'
  },
  {
    id: '2',
    name: 'Beat Master',
    image: 'https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backgroundImage: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'dj',
    price: 180,
    rating: 4.8,
    reviewCount: 95,
    location: 'New York',
    featured: true,
    experience: 10,
    bookings: 275,
    biography: 'Beat Master has been dominating the music scene for over a decade, crafting unforgettable experiences for events of all sizes.'
  },
  {
    id: '3',
    name: 'John Smith',
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backgroundImage: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'photographer',
    price: 120,
    rating: 4.9,
    reviewCount: 156,
    location: 'Los Angeles',
    featured: true,
    experience: 12,
    bookings: 420,
    biography: 'Award-winning photographer specializing in event photography with a keen eye for capturing perfect moments.'
  },
  {
    id: '4',
    name: 'Sarah Williams',
    image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backgroundImage: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'photographer',
    price: 140,
    rating: 4.8,
    reviewCount: 98,
    location: 'New York',
    featured: false,
    experience: 8,
    bookings: 245,
    biography: 'Professional photographer and videographer with expertise in event documentation and creative storytelling.'
  }
];

export const featuredArtists = artists.filter(artist => artist.featured);