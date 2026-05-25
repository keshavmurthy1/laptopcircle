import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiShieldCheck, HiHeart, HiEye } from 'react-icons/hi';
import { SEO } from '@/seo/SEO';
import { pageMeta } from '@/seo/defaultMeta';
import { HeroSection } from '@/components/HeroSection';
import { ContactCTA } from '@/components/ContactCTA';
import { fadeInUp } from '@/animations/variants';
import { waLink } from '@/utils/whatsapp';
import { siteConfig } from '@/data/site.config';

const pillars = [
  {
    icon: HiShieldCheck,
    title: 'Quality You Can Trust',
    text: 'Every repair uses genuine or premium-grade parts. Every refurbished laptop passes rigorous testing.',
  },
  {
    icon: HiHeart,
    title: 'Customer-First Approach',
    text: 'Transparent pricing, honest diagnostics, and clear communication at every step.',
  },
  {
    icon: HiEye,
    title: 'Long-Term Vision',
    text: 'Building Bengaluru\'s most reliable laptop service brand through consistent excellence.',
  },
];

export default function About() {
  const meta = pageMeta.about;

  return (
    <>
      <SEO title={meta.title} description={meta.description} path={meta.path} />
      <HeroSection compact />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            About {siteConfig.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            {siteConfig.name} is a Bengaluru-based laptop sales and service company dedicated
            to helping individuals and businesses keep their devices running at peak
            performance. From affordable laptop repair to premium refurbished laptop sales, we
            deliver professional, transparent, and fast support.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl bg-surface p-8">
              <h2 className="font-display text-xl font-semibold text-primary">Our Mission</h2>
              <p className="mt-4 text-slate-600">
                To provide accessible, high-quality laptop repair and refurbished laptop
                solutions that empower our customers to work without interruption.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl bg-brand/5 p-8">
              <h2 className="font-display text-xl font-semibold text-primary">Our Vision</h2>
              <p className="mt-4 text-slate-600">
                To become Bengaluru&apos;s most trusted name in laptop servicing and sales —
                known for expertise, integrity, and exceptional customer experience.
              </p>
            </motion.div>
          </div>

          <h2 className="mt-16 font-display text-2xl font-semibold text-primary">
            Why Customers Trust Us
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.title} className="rounded-2xl border border-slate-200 p-6">
                <p.icon className="h-8 w-8 text-brand" />
                <h3 className="mt-4 font-display font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-2xl bg-primary p-8 text-white">
            <h2 className="font-display text-xl font-semibold">Experience &amp; Support</h2>
            <p className="mt-4 text-slate-300">
              Our technicians bring years of hands-on experience with Windows laptops and
              MacBooks. We offer doorstep pickup and delivery, same-day repairs for common
              issues, and dedicated post-service support. Whether you need a quick SSD upgrade
              or a complete MacBook overhaul, we&apos;re here for you.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
