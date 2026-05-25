import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/variants';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.header
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn(
        align === 'center' ? 'text-center mx-auto' : 'text-left',
        className,
      )}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={cn('section-subtitle', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
