export const siteConfig = {
  name: import.meta.env.VITE_BUSINESS_NAME || 'VENIRA LAPTOP CIRCLE',
  url: import.meta.env.VITE_SITE_URL || 'https://veniralaptopcircle.com',
  phone: import.meta.env.VITE_PHONE || '+918867165553',
  whatsapp: import.meta.env.VITE_WHATSAPP || '918867165553',
  email: import.meta.env.VITE_EMAIL || 'contact@laptopcircle.in',
  address: import.meta.env.VITE_ADDRESS || '#165, 1st Floor, 9th cross, 2nd main road, Sampige raod, malleshwaram, Bengaluru - 560003',
  mapsEmbedUrl:
    import.meta.env.VITE_MAPS_EMBED_URL ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5543233823714!2d77.56869527454708!3d13.0003327142487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23ce42d4c579%3A0x29bf29cf3ff19945!2sVENIRA%20LAPTOP%20CIRCLE!5e0!3m2!1sen!2sin!4v1780833842943!5m2!1sen!2sin',
  hours: {
    weekdays: import.meta.env.VITE_HOURS_MON_THU || '10:30 AM - 9:00 PM',
    sunday: import.meta.env.VITE_HOURS_SUN || '10:00 AM - 10:00 PM',
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
  { label: 'Sales', path: '/laptop-sales' },
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
