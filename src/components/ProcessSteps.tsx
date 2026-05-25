import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { processSteps } from '@/data/site.config';
import { staggerContainer, fadeInUp } from '@/animations/variants';

export function ProcessSteps() {
  return (
    <section className="section-padding bg-primary text-white" aria-labelledby="process-heading">
      <div className="container-custom">
        <SectionHeading
          title="Our Repair Process"
          subtitle="Simple, transparent, and hassle-free laptop service from start to finish."
          className="[&_.section-title]:text-white [&_.section-subtitle]:text-slate-300"
        />
        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step) => (
            <motion.li
              key={step.step}
              variants={fadeInUp}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="font-display text-4xl font-bold text-accent">{step.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
