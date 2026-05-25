import servicesData from './services.json';

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  description: string;
  benefits: string[];
  pricingNote: string;
  relatedSlugs: string[];
}

export const services: Service[] = servicesData as Service[];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
