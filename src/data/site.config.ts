export const siteConfig = {
  name: import.meta.env.VITE_BUSINESS_NAME || 'VENIRA LAPTOP CIRCLE',
  url: import.meta.env.VITE_SITE_URL || 'https://veniralaptopcircle.com',
  phone: import.meta.env.VITE_PHONE || '+919876543210',
  whatsapp: import.meta.env.VITE_WHATSAPP || '919876543210',
  email: import.meta.env.VITE_EMAIL || 'contact@veniralaptopcircle.com',
  address: import.meta.env.VITE_ADDRESS || 'Bengaluru, Karnataka, India',
  mapsEmbedUrl:
    import.meta.env.VITE_MAPS_EMBED_URL ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE4LjAiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1',
  hours: {
    weekdays: import.meta.env.VITE_HOURS_MON_SAT || '10:00 AM - 8:00 PM',
    sunday: import.meta.env.VITE_HOURS_SUN || 'Closed',
  },
  tagline: 'Reliable Laptop Sales & Services in Bengaluru',
  city: 'Bengaluru',
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
  seoKeywords: {
    primary: [
      'Laptop repair Bengaluru',
      'Laptop service center Bengaluru',
      'MacBook repair Bengaluru',
      'Refurbished laptops Bengaluru',
      'Laptop sales Bengaluru',
      'SSD upgrade Bengaluru',
      'Laptop screen replacement Bengaluru',
    ],
    secondary: [
      'Affordable laptop repair',
      'Laptop repair near me',
      'Windows laptop repair',
      'MacBook service center',
      'Laptop pickup and delivery Bengaluru',
    ],
  },
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Laptop Sales', path: '/laptop-sales' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const features = [
  {
    title: 'Genuine Spare Parts',
    description: 'Original and high-quality components for lasting repairs.',
    icon: 'parts',
  },
  {
    title: 'Fast Turnaround',
    description: 'Most repairs completed within 24-48 hours.',
    icon: 'speed',
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent quotes with no hidden charges.',
    icon: 'price',
  },
  {
    title: 'Pickup & Delivery',
    description: 'Doorstep service across Bengaluru.',
    icon: 'delivery',
  },
  {
    title: 'Experienced Technicians',
    description: 'Certified experts for Windows and MacBook devices.',
    icon: 'expert',
  },
  {
    title: 'Windows & Mac Experts',
    description: 'Specialized support for all major laptop brands.',
    icon: 'brands',
  },
];

export const brands = ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Apple'];

export const processSteps = [
  {
    step: '01',
    title: 'Book Service',
    description: 'Call, WhatsApp, or fill our contact form to schedule repair.',
  },
  {
    step: '02',
    title: 'Pickup / Drop-off',
    description: 'Free pickup and delivery available across Bengaluru.',
  },
  {
    step: '03',
    title: 'Diagnosis & Repair',
    description: 'We diagnose the issue and repair with genuine parts.',
  },
  {
    step: '04',
    title: 'Quality Check & Delivery',
    description: 'Thorough testing before safe return to your doorstep.',
  },
];
