import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { waProductInquiry } from '@/utils/whatsapp';
import type { Laptop } from '@/data/laptops';

interface ProductCardProps {
  laptop: Laptop;
  index?: number;
}

export function ProductCard({ laptop, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={laptop.image}
          alt={`${laptop.model} refurbished laptop for sale in Bengaluru`}
          width={600}
          height={400}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-lg bg-primary/90 px-2.5 py-1 text-xs font-semibold text-white">
          {laptop.brand}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-primary">{laptop.model}</h3>
        <p className="mt-2 text-sm text-slate-600">{laptop.specs}</p>
        <span className="mt-3 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
          {laptop.condition}
        </span>
        <a
          href={waProductInquiry(laptop.model)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-4 w-full !text-sm"
        >
          <FaWhatsapp className="text-lg" />
          Inquire on WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
