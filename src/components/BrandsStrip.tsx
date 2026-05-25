import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { brands } from '@/data/site.config';

export function BrandsStrip() {
  return (
    <section className="section-padding" aria-labelledby="brands-heading">
      <div className="container-custom">
        <SectionHeading
          title="Brands We Service & Sell"
          subtitle="Expert repair and quality refurbished laptops from all major brands."
        />
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {brands.map((brand, i) => (
            <motion.li
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white px-8 py-4 font-display text-lg font-semibold text-primary shadow-sm transition-shadow hover:shadow-card"
            >
              {brand}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
