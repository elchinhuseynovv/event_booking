export interface Artist {
  id: string;
  name: string;
  image: string;
  backgroundImage?: string;
  genres: string[];
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  featured: boolean;
  experience: number;
  bookings: number;
  biography?: string;
}