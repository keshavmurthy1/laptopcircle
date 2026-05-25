import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { fadeInUp } from '@/animations/variants';
import { waLink } from '@/utils/whatsapp';

interface HeroSectionProps {
  compact?: boolean;
}

export function HeroSection({ compact = false }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-brand/90 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className={compact ? 'section-padding !py-16' : 'section-padding'}>
        <div className="container-custom relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              Bengaluru&apos;s Trusted Laptop Experts
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Trusted Laptop Sales &amp; Repair Services in Bengaluru
            </h1>
            <p className="mt-6 text-lg text-slate-300 sm:text-xl">
              Professional laptop repair, MacBook servicing, upgrades, and refurbished
              laptop sales with doorstep pickup &amp; delivery.
            </p>
            {!compact && (
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Book Repair
                  <HiArrowRight />
                </Link>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Us
                </a>
                <Link to="/laptop-sales" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 hover:!text-white">
                  Browse Laptops
                </Link>
              </div>
            )}
          </motion.div>

          {!compact && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl bg-white/10 p-2 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop"
                  alt="Professional laptop repair and refurbished laptop sales in Bengaluru"
                  width={800}
                  height={600}
                  className="rounded-xl object-cover shadow-2xl"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-card">
                <p className="text-2xl font-bold text-brand">500+</p>
                <p className="text-sm text-slate-600">Happy Customers</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
