import { FaWhatsapp } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { SEO } from '@/seo/SEO';
import { pageMeta } from '@/seo/defaultMeta';
import { HeroSection } from '@/components/HeroSection';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/data/site.config';
import { waLink } from '@/utils/whatsapp';

export default function Contact() {
  const meta = pageMeta.contact;

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
            Contact Us — Book Laptop Repair in Bengaluru
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Reach out for laptop repair, MacBook service, refurbished laptop inquiries, or a
            free quote. We offer pickup and delivery across Bengaluru.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-primary">Send a Message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="font-display text-lg font-semibold text-primary">Get in Touch</h2>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-3 text-slate-600 transition-colors hover:text-brand"
                    >
                      <HiPhone className="h-5 w-5 text-brand" />
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-slate-600 transition-colors hover:text-brand"
                    >
                      <HiMail className="h-5 w-5 text-brand" />
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <HiLocationMarker className="h-5 w-5 shrink-0 text-brand" />
                    {siteConfig.address}
                  </li>
                </ul>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-6 w-full"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Us
                </a>
              </div>

              <div className="rounded-2xl bg-surface p-6">
                <h3 className="flex items-center gap-2 font-display font-semibold text-primary">
                  <HiClock className="text-brand" />
                  Business Hours
                </h3>
                <dl className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <dt>Mon – Sat</dt>
                    <dd className="font-medium text-primary">{siteConfig.hours.weekdays}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunday</dt>
                    <dd className="font-medium text-primary">{siteConfig.hours.sunday}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
                <h3 className="font-display font-semibold text-primary">Pickup &amp; Delivery</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Free doorstep pickup and delivery for laptop repair and servicing across
                  Bengaluru. Schedule via WhatsApp or the contact form above.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="VENIRA LAPTOP CIRCLE location on Google Maps"
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
