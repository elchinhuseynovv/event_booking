export interface SoundCloudTrack {
  title: string;
  url: string;
  duration: string;
  plays: string;
  description: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface VideoShowreel {
  title: string;
  url: string;
  description: string;
  duration: string;
  type: 'intro' | 'event' | 'festival' | 'commercial' | 'documentary';
}

export interface Artist {
  id: string;
  slug: string; // Add slug field for URL routing
  name: string;
  image: string;
  backgroundImage?: string;
  category: 'dj' | 'photographer';
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  featured: boolean;
  experience: number;
  bookings: number;
  biography?: string;
  genres: string[];
  signature?: string;
  mission?: string;
  soundcloudTracks?: SoundCloudTrack[];
  galleryImages?: GalleryImage[];
  videoShowreel?: VideoShowreel[];
}