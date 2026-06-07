import { FaWhatsapp } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { waLink } from '@/utils/whatsapp';
import { newLaptops } from '@/data/newLaptops';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export function NewLaptopsSection() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="new-laptops-heading">
      <div className="container-custom">
        <SectionHeading
          title="New Laptops"
          subtitle="Brand-new laptops from leading manufacturers with official warranty. Contact us for the latest models, configurations, and availability in Bengaluru."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {newLaptops.map((laptop) => (
            <motion.article
              key={laptop.id}
              variants={fadeInUp}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-lg bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {laptop.brand}
                </span>
                <HiSparkles className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                {laptop.model}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{laptop.specs}</p>
              <p className="mt-3 text-sm text-slate-500">{laptop.highlights}</p>
              <a
                href={waLink(
                  `Hello VENIRA LAPTOP CIRCLE, I am interested in new ${laptop.brand} laptops. Please share available models and details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-5 w-full !text-sm"
              >
                <FaWhatsapp className="text-lg" />
                Inquire on WhatsApp
              </a>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-slate-600">
          Stock and configurations vary. WhatsApp us for current availability, warranty details,
          and the best offers on new laptops in Bengaluru.
        </p>
      </div>
    </section>
  );
}
