import { Link, useParams, Navigate } from 'react-router-dom';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { SEO, JsonLd } from '@/seo/SEO';
import { getServiceMeta } from '@/seo/defaultMeta';
import { serviceSchema } from '@/seo/schemas';
import { getServiceBySlug, services } from '@/data/services';
import { ServiceIcon } from '@/components/serviceIcons';
import { ContactCTA } from '@/components/ContactCTA';
import { waServiceInquiry } from '@/utils/whatsapp';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const meta = getServiceMeta(service.slug, service.metaTitle, service.metaDescription);
  const related = services.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      <SEO title={meta.title} description={meta.description} path={meta.path} />
      <JsonLd data={serviceSchema(service)} />

      <section className="bg-gradient-to-br from-primary to-brand/80 py-16 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <ServiceIcon name={service.icon} className="h-9 w-9 text-accent" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">{service.title}</h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-200">{service.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-primary">
              {service.keyword} — What We Offer
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">{service.description}</p>

            <h3 className="mt-10 font-display text-xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-slate-600">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-accent" />
                  {benefit}
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-xl bg-surface p-4 text-sm font-medium text-primary">
              {service.pricingNote}
            </p>

            {related.length > 0 && (
              <div className="mt-12">
                <h3 className="font-display text-xl font-semibold text-primary">
                  Related Services
                </h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {related.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand/5"
                      >
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-primary">Get a Free Quote</h3>
              <p className="mt-2 text-sm text-slate-600">
                Contact us for {service.shortTitle.toLowerCase()} in Bengaluru. Pickup &amp;
                delivery available.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={waServiceInquiry(service.shortTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Quote
                </a>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Book Repair
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
