import { siteConfig } from '@/data/site.config';

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

const defaultDesc =
  'VENIRA LAPTOP CIRCLE provides professional laptop repair, MacBook servicing, SSD upgrades, screen replacement, and refurbished laptop sales in Bengaluru with doorstep pickup & delivery.';

export const defaultMeta: PageMeta = {
  title: `Laptop Repair & Refurbished Laptop Sales in Bengaluru | ${siteConfig.name}`,
  description: defaultDesc,
  path: '/',
};

export const pageMeta: Record<string, PageMeta> = {
  home: defaultMeta,
  services: {
    title: `Laptop Services in Bengaluru | Repair, Upgrade & Servicing | ${siteConfig.name}`,
    description:
      'Complete laptop services in Bengaluru — repair, MacBook servicing, SSD upgrade, RAM upgrade, screen replacement, data recovery, and general servicing with pickup & delivery.',
    path: '/services',
    keywords: 'laptop service center Bengaluru, laptop repair near me',
  },
  laptopSales: {
    title: `Refurbished Laptops Bengaluru | Certified Pre-Owned | ${siteConfig.name}`,
    description:
      'Buy quality refurbished laptops in Bengaluru — Dell, HP, Lenovo, ASUS, Acer & Apple. Tested devices with warranty. WhatsApp for instant inquiry.',
    path: '/laptop-sales',
    keywords: 'refurbished laptops Bengaluru, laptop sales Bengaluru',
  },
  about: {
    title: `About Us | Trusted Laptop Experts in Bengaluru | ${siteConfig.name}`,
    description:
      'Learn about VENIRA LAPTOP CIRCLE — Bengaluru\'s trusted laptop sales and repair company. Mission, vision, and why customers choose us for quality service.',
    path: '/about',
  },
  contact: {
    title: `Contact Us | Book Laptop Repair in Bengaluru | ${siteConfig.name}`,
    description:
      'Contact VENIRA LAPTOP CIRCLE for laptop repair, MacBook service, refurbished laptop sales. Call, WhatsApp, or book online. Pickup & delivery across Bengaluru.',
    path: '/contact',
    keywords: 'laptop repair near me, laptop pickup and delivery Bengaluru',
  },
  notFound: {
    title: `Page Not Found | ${siteConfig.name}`,
    description: defaultDesc,
    path: '/404',
  },
};

export function getServiceMeta(slug: string, metaTitle: string, metaDescription: string): PageMeta {
  return {
    title: metaTitle,
    description: metaDescription,
    path: `/services/${slug}`,
  };
}
