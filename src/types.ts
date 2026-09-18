export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Architecture' | 'Featured';
  image: string;
  year?: string;
  area?: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'home' | 'building' | 'blueprint' | 'tools';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Magazine {
  id: string;
  title: string;
  issue: string;
  coverImage: string;
  badge?: string;
}
