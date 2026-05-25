import { motion } from 'framer-motion';
import { HiShieldCheck, HiClock, HiCurrencyRupee, HiTruck, HiUserGroup, HiDesktopComputer } from 'react-icons/hi';
import { FaApple } from 'react-icons/fa';
import { SectionHeading } from './SectionHeading';
import { features } from '@/data/site.config';
import { staggerContainer, fadeInUp } from '@/animations/variants';

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  parts: HiShieldCheck,
  speed: HiClock,
  price: HiCurrencyRupee,
  delivery: HiTruck,
  expert: HiUserGroup,
  brands: FaApple,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="why-choose-heading">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose VENIRA LAPTOP CIRCLE?"
          subtitle="We combine expertise, transparency, and convenience to deliver the best laptop experience in Bengaluru."
        />
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon] || HiDesktopComputer;
            return (
              <motion.li
                key={feature.title}
                variants={fadeInUp}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
