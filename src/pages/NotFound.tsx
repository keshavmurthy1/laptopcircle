import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { SEO } from '@/seo/SEO';
import { pageMeta } from '@/seo/defaultMeta';
import { waLink } from '@/utils/whatsapp';

export default function NotFound() {
  const meta = pageMeta.notFound;

  return (
    <>
      <SEO title={meta.title} description={meta.description} path={meta.path} noindex />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="font-display text-6xl font-bold text-brand">404</h1>
        <p className="mt-4 text-xl text-slate-600">Page not found</p>
        <p className="mt-2 max-w-md text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist. Explore our services or contact
          us for laptop help in Bengaluru.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
          <Link to="/services" className="btn-secondary">
            Our Services
          </Link>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
