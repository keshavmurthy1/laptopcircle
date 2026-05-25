import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { ServiceCard } from './ServiceCard';
import { services } from '@/data/services';

export function ServicesSection() {
  return (
    <section className="section-padding" aria-labelledby="services-heading">
      <div className="container-custom">
        <SectionHeading
          title="Our Laptop Services"
          subtitle="Complete repair, upgrade, and servicing solutions for Windows laptops and MacBooks in Bengaluru."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
