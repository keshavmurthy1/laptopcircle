import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { siteConfig, navLinks } from '@/data/site.config';
import { services } from '@/data/services';
import { waLink } from '@/utils/whatsapp';

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="container-custom section-padding !pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <span className="font-display text-xl font-bold text-white">VENIRA</span>
              <span className="block text-xs tracking-widest text-accent">LAPTOP CIRCLE</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{siteConfig.tagline}</p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 !text-sm"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <HiLocationMarker className="mt-0.5 shrink-0 text-accent" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <HiPhone className="text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <HiMail className="text-accent" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="rounded-lg bg-primary-light p-2 transition-colors hover:bg-brand"
              >
                <FaFacebookF />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="rounded-lg bg-primary-light p-2 transition-colors hover:bg-brand"
              >
                <FaInstagram />
              </a>
              <a
                href={siteConfig.social.youtube}
                aria-label="YouTube"
                className="rounded-lg bg-primary-light p-2 transition-colors hover:bg-brand"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
