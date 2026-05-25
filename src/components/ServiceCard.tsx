import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { ServiceIcon } from './serviceIcons';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Pick<Service, 'slug' | 'shortTitle' | 'excerpt' | 'icon'>;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-primary">
        {service.shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.excerpt}</p>
      <Link
        to={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-gap group-hover:gap-2"
      >
        Learn More
        <HiArrowRight />
      </Link>
    </motion.article>
  );
}
