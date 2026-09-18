import { Project, Service, Testimonial, Magazine } from '../types';

export const AVN_LOGO = '/images/avn-logo.png';

export const ADITI_PORTRAIT = '/images/aditi-portrait.webp';

export const HERO_SLIDES = [
  {
    id: '01',
    title: 'Spaces\nthat live with you',
    subtitle: 'Thoughtful interiors. Timeless design.\nA more beautiful way to live, work and belong.',
    projectName: 'Tranquility',
    location: 'Mumbai',
    image: '/images/hero/01-tranquility.jpg',
  },
  {
    id: '02',
    title: 'Sanctuary\nin the heart of the city',
    subtitle: 'Curated natural light, tactile textures,\nand refined proportion for serene living.',
    projectName: 'A House',
    location: 'Kutch',
    image: '/images/hero/02-a-house.jpg',
  },
  {
    id: '03',
    title: 'Warm minimalism\ncrafted with intention',
    subtitle: 'Spaces engineered to evolve,\ninspire, and stand the test of time.',
    projectName: 'K House',
    location: 'Mumbai',
    image: '/images/hero/03-k-house.jpg',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'tranquility',
    title: 'Tranquility',
    location: 'Mumbai',
    category: 'Residential',
    image: '/images/tranquility.jpg',
    year: '2024',
    area: '4,200 sq.ft',
    description: 'An understated urban sanctuary emphasizing natural travertine, brushed warm brass, and bespoke muted upholstery designed for calm, reflective living.',
  },
  {
    id: 'k-house',
    title: 'K House',
    location: 'Mumbai',
    category: 'Architecture',
    image: '/images/k-house.jpg',
    year: '2024',
    area: '8,500 sq.ft',
    description: 'A multi-tiered residence framing panoramic views with cantilevered teak elements and a seamless transition between interior and exterior spaces.',
  },
  {
    id: 'l-house',
    title: 'L House',
    location: 'Mumbai',
    category: 'Residential',
    image: '/images/l-house.jpg',
    year: '2023',
    area: '3,800 sq.ft',
    description: 'A light-filled dining and living suite centered around artisanal solid oak and Scandinavian minimalist sensibilities.',
  },
  {
    id: 'aikyam',
    title: 'Aikyam',
    location: 'Mumbai',
    category: 'Featured',
    image: '/images/aikyam.jpg',
    year: '2024',
    area: '5,600 sq.ft',
    description: 'A sprawling coastal apartment combining fluted dark walnut, custom architectural marble accents, and bespoke curved modular seating.',
  },
];

export const FEATURED_WORK_DATA: Project[] = [
  {
    id: 'm-house',
    title: 'M House',
    location: 'Thane',
    category: 'Residential',
    image: '/images/m-house.jpg',
    year: '2023',
    area: '3,100 sq.ft',
    description: 'A rich tactile formal living space featuring deep jewel-toned accents, warm timber panels, and artisanal lighting fixtures.',
  },
  {
    id: 'v-house',
    title: 'V House',
    location: 'Mumbai',
    category: 'Residential',
    image: '/images/v-house.jpg',
    year: '2023',
    area: '4,000 sq.ft',
    description: 'A bespoke dining and gallery setting characterized by cognac saddle-leather elements and curated monochrome wall art.',
  },
  {
    id: 'l-s-office',
    title: 'L S Office',
    location: 'Mumbai',
    category: 'Commercial',
    image: '/images/ls-office.jpg',
    year: '2024',
    area: '6,200 sq.ft',
    description: 'A double-height executive headquarters featuring a sculptural cantilevered staircase, structural glass balustrades, and a cascading green plant wall.',
  },
  {
    id: 't-t-house',
    title: 'T T House',
    location: 'Mumbai',
    category: 'Residential',
    image: '/images/tt-house.jpg',
    year: '2023',
    area: '5,000 sq.ft',
    description: 'A grand volume entertaining hall highlighted by charcoal vertical slats, a bronze multi-tier chandelier, and recessed lighting.',
  },
];

export const ALL_PORTFOLIO_PROJECTS: Project[] = [
  ...PROJECTS_DATA,
  ...FEATURED_WORK_DATA,
  {
    id: 'h-house',
    title: 'H House',
    location: 'Mumbai',
    category: 'Residential',
    image: '/images/h-house.jpg',
    year: '2024',
    area: '4,500 sq.ft',
    description: 'A warm sanctuary combining custom fluted wood paneling, bespoke master suite, and an open outdoor verandah.',
  },
  {
    id: 'a-house',
    title: 'A House',
    location: 'Kutch',
    category: 'Residential',
    image: '/images/hero/02-a-house.jpg',
    year: '2023',
    area: '6,000 sq.ft',
    description: 'A vernacular architectural retreat honoring regional materiality, earth tones, and expansive courtyard ventilation.',
  },
  {
    id: 'level-residences',
    title: 'Level - The Residences',
    location: 'Mumbai',
    category: 'Residential',
    image: '/images/level-residences.jpg',
    year: '2024',
    area: '5,200 sq.ft',
    description: 'High-rise luxury residence pairing imported Italian statuario marble with muted brushed champagne metals.',
  },
  {
    id: 'indiabulls-blu',
    title: 'Indiabulls Blu',
    location: 'Mumbai',
    category: 'Residential',
    image: '/images/indiabulls-blu.jpg',
    year: '2023',
    area: '4,800 sq.ft',
    description: 'An executive residence perched high above Mumbai with floor-to-ceiling glazing and minimalist bespoke cabinetry.',
  },
  {
    id: 'n-house',
    title: 'N House',
    location: 'Mumbai',
    category: 'Residential',
    image: '/images/n-house.jpg',
    year: '2023',
    area: '3,500 sq.ft',
    description: 'A contemporary family home with calm neutral palettes, bespoke joinery, and thoughtfully layered lighting.',
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'residential',
    title: 'Residential Interiors',
    description: 'Personalised homes that reflect your lifestyle.',
    iconName: 'home',
  },
  {
    id: 'commercial',
    title: 'Commercial Interiors',
    description: 'Functional and inspiring workspaces.',
    iconName: 'building',
  },
  {
    id: 'architecture',
    title: 'Architecture & New Build',
    description: 'Thoughtful design for new spaces.',
    iconName: 'blueprint',
  },
  {
    id: 'renovation',
    title: 'Renovation & Makeovers',
    description: 'Breathe new life into existing spaces.',
    iconName: 'tools',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: 'It was a great experience. I liked her choices and trusted her completely. Not to mention we were quite in sync throughout the design & execution phase.',
    author: 'Kashish Mirani',
    role: 'Client',
    avatar: '/images/testimonial-1.webp',
  },
  {
    id: '2',
    quote: 'Professional, creative and very attuned to what we wanted. The space feels like us, only better.',
    author: 'Priya Shah',
    role: 'Client',
    avatar: '/images/testimonial-2.jpg',
  },
  {
    id: '3',
    quote: 'Aditi and her team are a joy to work with. Great attention to detail and beautiful execution.',
    author: 'Rohit Mehta',
    role: 'Client',
    avatar: '/images/testimonial-3.jpg',
  },
];

export const MAGAZINES_DATA: Magazine[] = [
  {
    id: 'ad',
    title: 'Architectural Digest',
    issue: 'Architectural Digest India',
    coverImage: '/images/ad-cover.jpg',
    badge: 'ARCHITECTURAL DIGEST',
  },
  {
    id: 'good-homes',
    title: 'GoodHomes',
    issue: 'The Color & Pattern Issue',
    coverImage: '/images/good-homes-cover.jpg',
    badge: 'GOODHOMES',
  },
  {
    id: 'elle-decor',
    title: 'Elle Decor',
    issue: 'Modern Indian Design Special',
    coverImage: '/images/elle-decor-cover.jpg',
    badge: 'ELLE DECOR',
  },
  {
    id: 'living-etc',
    title: 'Livingetc',
    issue: 'Contemporary Luxury Spaces',
    coverImage: '/images/living-etc-cover.jpg',
    badge: 'LIVINGETC',
  },
  {
    id: 'inside-outside',
    title: 'Inside Outside',
    issue: 'Indian Architecture Special',
    coverImage: '/images/inside-outside-cover.jpg',
    badge: 'INSIDE OUTSIDE',
  },
];

export const DIGITAL_FEATURES_DATA = [
  {
    id: 'df-1',
    title: 'The Design Story',
    outlet: 'Architectural Digest Online',
    image: '/images/df-1.jpg',
  },
  {
    id: 'df-2',
    title: 'Spatial Harmony',
    outlet: 'Elle Decor Digital',
    image: '/images/df-2.jpg',
  },
  {
    id: 'df-3',
    title: 'Material Elegance',
    outlet: 'Houzz India',
    image: '/images/df-3.jpg',
  },
  {
    id: 'df-4',
    title: 'Entertaining in Style',
    outlet: 'GoodHomes Digital',
    image: '/images/df-4.jpg',
  },
  {
    id: 'df-5',
    title: 'Minimalist Balance',
    outlet: 'Architectural Digest Special',
    image: '/images/df-5.jpg',
  },
];