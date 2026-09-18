import { Project, Service, Testimonial, Magazine } from '../types';

// Genuine AVN Interiors brand logo from avninteriors.com
export const AVN_LOGO = 'https://static.wixstatic.com/media/0a0f8f_8c0dab294c0e43a6a9bfa54cce0f12ce~mv2.png';

// Authentic portrait of Aditi Vora Nair (Founder & Principal Designer) from avninteriors.com/about
export const ADITI_PORTRAIT = 'https://static.wixstatic.com/media/0a0f8f_499b83cf03984a42a02d3c5112921a86~mv2.webp';

export const HERO_SLIDES = [
  {
    id: '01',
    title: 'Spaces\nthat live with you',
    subtitle: 'Thoughtful interiors. Timeless design.\nA more beautiful way to live, work and belong.',
    projectName: 'Tranquility',
    location: 'Mumbai',
    image: 'https://static.wixstatic.com/media/0a0f8f_b0550e918a7d482f87b4ab5a95d09799~mv2.jpg',
  },
  {
    id: '02',
    title: 'Sanctuary\nin the heart of the city',
    subtitle: 'Curated natural light, tactile textures,\nand refined proportion for serene living.',
    projectName: 'H House',
    location: 'Mumbai',
    image: 'https://static.wixstatic.com/media/0a0f8f_5908473b5add408a8788b0ae11e02607~mv2.jpg',
  },
  {
    id: '03',
    title: 'Warm minimalism\ncrafted with intention',
    subtitle: 'Spaces engineered to evolve,\ninspire, and stand the test of time.',
    projectName: 'Aikyam',
    location: 'Mumbai',
    image: 'https://static.wixstatic.com/media/0a0f8f_64def05fb8464d6dbe77c7b7e0a08876~mv2.jpg',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'tranquility',
    title: 'Tranquility',
    location: 'Mumbai',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/0a0f8f_38be14ac16e44bbdaee27206af92449d~mv2.jpg',
    year: '2024',
    area: '4,200 sq.ft',
    description: 'An understated urban sanctuary emphasizing natural travertine, brushed warm brass, and bespoke muted upholstery designed for calm, reflective living.',
  },
  {
    id: 'k-house',
    title: 'K House',
    location: 'Mumbai',
    category: 'Architecture',
    image: 'https://static.wixstatic.com/media/0a0f8f_a6bb18e17ea34323a0afb989ef57fdab~mv2.jpg',
    year: '2024',
    area: '8,500 sq.ft',
    description: 'A multi-tiered residence framing panoramic views with cantilevered teak elements and a seamless transition between interior and exterior spaces.',
  },
  {
    id: 'l-house',
    title: 'L House',
    location: 'Mumbai',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/0a0f8f_cf9e0f9661664576b3023aec1db7ecf0~mv2.jpg',
    year: '2023',
    area: '3,800 sq.ft',
    description: 'A light-filled dining and living suite centered around artisanal solid oak and Scandinavian minimalist sensibilities.',
  },
  {
    id: 'aikyam',
    title: 'Aikyam',
    location: 'Mumbai',
    category: 'Featured',
    image: 'https://static.wixstatic.com/media/0a0f8f_7e5fa703704e4d58ba2928fe47818e17~mv2.jpg',
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
    image: 'https://static.wixstatic.com/media/0a0f8f_80bba0ea57e04b7ea17888a9950c4f32~mv2.jpg',
    year: '2023',
    area: '3,100 sq.ft',
    description: 'A rich tactile formal living space featuring deep jewel-toned accents, warm timber panels, and artisanal lighting fixtures.',
  },
  {
    id: 'v-house',
    title: 'V House',
    location: 'Mumbai',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/0a0f8f_36922239b3e44dc8bfe1b83be45263d0~mv2.jpg',
    year: '2023',
    area: '4,000 sq.ft',
    description: 'A bespoke dining and gallery setting characterized by cognac saddle-leather elements and curated monochrome wall art.',
  },
  {
    id: 'l-s-office',
    title: 'L S Office',
    location: 'Mumbai',
    category: 'Commercial',
    image: 'https://static.wixstatic.com/media/0a0f8f_946e16ef854a4439be3913b70673aedb~mv2.jpg',
    year: '2024',
    area: '6,200 sq.ft',
    description: 'A double-height executive headquarters featuring a sculptural cantilevered staircase, structural glass balustrades, and a cascading green plant wall.',
  },
  {
    id: 't-t-house',
    title: 'T T House',
    location: 'Mumbai',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/0a0f8f_6dba76cd00034225b07efe183a86c661~mv2.jpg',
    year: '2023',
    area: '5,000 sq.ft',
    description: 'A grand volume entertaining hall highlighted by charcoal vertical slats, a bronze multi-tier chandelier, and recessed lighting.',
  },
];

// Complete collection of original AVN portfolio projects from avninteriors.com/portfolio
export const ALL_PORTFOLIO_PROJECTS: Project[] = [
  ...PROJECTS_DATA,
  ...FEATURED_WORK_DATA,
  {
    id: 'h-house',
    title: 'H House',
    location: 'Mumbai',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/0a0f8f_5908473b5add408a8788b0ae11e02607~mv2.jpg',
    year: '2024',
    area: '4,500 sq.ft',
    description: 'A warm sanctuary combining custom fluted wood paneling, bespoke master suite, and an open outdoor verandah.',
  },
  {
    id: 'a-house',
    title: 'A House',
    location: 'Kutch',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/0a0f8f_40ae1e7c0bfc4557bcc4377fd3bd7a01~mv2.jpg',
    year: '2023',
    area: '6,000 sq.ft',
    description: 'A vernacular architectural retreat honoring regional materiality, earth tones, and expansive courtyard ventilation.',
  },
  {
    id: 'level-residences',
    title: 'Level - The Residences',
    location: 'Mumbai',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/0a0f8f_cc58db53f4204499845b62775baf8056~mv2.jpg',
    year: '2024',
    area: '5,200 sq.ft',
    description: 'High-rise luxury residence pairing imported Italian statuario marble with muted brushed champagne metals.',
  },
  {
    id: 'indiabulls-blu',
    title: 'Indiabulls Blu',
    location: 'Mumbai',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/0a0f8f_60160315684744f1ad602afd489d7e80~mv2.jpg',
    year: '2023',
    area: '4,800 sq.ft',
    description: 'An executive residence perched high above Mumbai with floor-to-ceiling glazing and minimalist bespoke cabinetry.',
  },
  {
    id: 'n-house',
    title: 'N House',
    location: 'Mumbai',
    category: 'Residential',
    image: 'https://static.wixstatic.com/media/0a0f8f_de7094a939e249d9ad86aca082868973~mv2.jpg',
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
    avatar: 'https://static.wixstatic.com/media/0a0f8f_499b83cf03984a42a02d3c5112921a86~mv2.webp',
  },
  {
    id: '2',
    quote: 'Professional, creative and very attuned to what we wanted. The space feels like us, only better.',
    author: 'Priya Shah',
    role: 'Client',
    avatar: 'https://static.wixstatic.com/media/0a0f8f_4fedd4320b884b7690a7da30123e1c20~mv2.jpg',
  },
  {
    id: '3',
    quote: 'Aditi and her team are a joy to work with. Great attention to detail and beautiful execution.',
    author: 'Rohit Mehta',
    role: 'Client',
    avatar: 'https://static.wixstatic.com/media/0a0f8f_5bce5f536a464f7b92f60afc759e3182~mv2.jpg',
  },
];

// Exact Magazine Features from avninteriors.com/magzine-features
export const MAGAZINES_DATA: Magazine[] = [
  {
    id: 'ad',
    title: 'Architectural Digest',
    issue: 'Architectural Digest India',
    coverImage: 'https://static.wixstatic.com/media/0a0f8f_0f726589d1ac436492fae32b6bcd0141~mv2.jpg',
    badge: 'ARCHITECTURAL DIGEST',
  },
  {
    id: 'good-homes',
    title: 'GoodHomes',
    issue: 'The Color & Pattern Issue',
    coverImage: 'https://static.wixstatic.com/media/0a0f8f_e68c76aa39f44323bc365a384fc74145~mv2.jpg',
    badge: 'GOODHOMES',
  },
  {
    id: 'elle-decor',
    title: 'Elle Decor',
    issue: 'Modern Indian Design Special',
    coverImage: 'https://static.wixstatic.com/media/0a0f8f_c788c5e4b8ae49b9b1aa0bae34605382~mv2.jpg',
    badge: 'ELLE DECOR',
  },
  {
    id: 'living-etc',
    title: 'Livingetc',
    issue: 'Contemporary Luxury Spaces',
    coverImage: 'https://static.wixstatic.com/media/0a0f8f_ff7036ab59914f6d9475896c15ec5d5e~mv2.jpg',
    badge: 'LIVINGETC',
  },
  {
    id: 'inside-outside',
    title: 'Inside Outside',
    issue: 'Indian Architecture Special',
    coverImage: 'https://static.wixstatic.com/media/0a0f8f_7d7d843f31eb44ab9ffd0939d140f5cf~mv2.jpg',
    badge: 'INSIDE OUTSIDE',
  },
];

// Digital features from avninteriors.com/digital-features
export const DIGITAL_FEATURES_DATA = [
  {
    id: 'df-1',
    title: 'The Design Story',
    outlet: 'Architectural Digest Online',
    image: 'https://static.wixstatic.com/media/0a0f8f_bcef646b91c2410a9a0fd852e0826c96~mv2.jpg',
  },
  {
    id: 'df-2',
    title: 'Spatial Harmony',
    outlet: 'Elle Decor Digital',
    image: 'https://static.wixstatic.com/media/0a0f8f_fc29c0b7f9dd4166b019c1918f72f992~mv2.jpg',
  },
  {
    id: 'df-3',
    title: 'Material Elegance',
    outlet: 'Houzz India',
    image: 'https://static.wixstatic.com/media/0a0f8f_77ba2df252ea41ec81cd0661d2536aa8~mv2.jpg',
  },
  {
    id: 'df-4',
    title: 'Entertaining in Style',
    outlet: 'GoodHomes Digital',
    image: 'https://static.wixstatic.com/media/0a0f8f_3d0e6674c27c44b083fd6005d8be247f~mv2.jpg',
  },
  {
    id: 'df-5',
    title: 'Minimalist Balance',
    outlet: 'Architectural Digest Special',
    image: 'https://static.wixstatic.com/media/0a0f8f_1858c254b6254c8dade6036f08bbf9d4~mv2.jpg',
  },
];

