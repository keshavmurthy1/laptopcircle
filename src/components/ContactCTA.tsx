import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { fadeInUp } from '@/animations/variants';
import { waLink } from '@/utils/whatsapp';

export function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand to-accent px-8 py-12 text-center text-white sm:px-12 sm:py-16"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to Fix or Upgrade Your Laptop?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Get a free quote today. Pickup and delivery available across Bengaluru.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="rounded-xl bg-white px-8 py-3 font-semibold text-brand transition-colors hover:bg-surface">
              Get Free Quote
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !bg-white/20 !text-white hover:!bg-white/30"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
