import { Link } from 'react-router-dom';
import { SEO } from '@/seo/SEO';
import { pageMeta } from '@/seo/defaultMeta';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { ContactCTA } from '@/components/ContactCTA';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site.config';

export default function Services() {
  const meta = pageMeta.services;

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        keywords={meta.keywords}
      />
      <HeroSection compact />
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Laptop Services in Bengaluru
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            VENIRA LAPTOP CIRCLE is your trusted{' '}
            <strong>laptop service center in Bengaluru</strong>, offering affordable laptop
            repair, MacBook servicing, SSD upgrades, screen replacement, data recovery, and
            general servicing. We support Windows laptop repair and Apple devices with genuine
            parts, fast turnaround, and{' '}
            <strong>laptop pickup and delivery across Bengaluru</strong>.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <p className="mt-12 text-center text-slate-600">
            Looking for refurbished devices?{' '}
            <Link to="/laptop-sales" className="font-semibold text-brand hover:underline">
              Browse our laptop sales
            </Link>{' '}
            in {siteConfig.city}.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
