import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { SectionHeading } from './SectionHeading';
import faqData from '@/data/faq.json';
import { cn } from '@/utils/cn';

interface FAQAccordionProps {
  limit?: number;
  showHeading?: boolean;
}

export function FAQAccordion({ limit, showHeading = true }: FAQAccordionProps) {
  const items = limit ? faqData.slice(0, limit) : faqData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-surface" aria-labelledby="faq-heading">
      <div className="container-custom max-w-3xl">
        {showHeading && (
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about laptop repair and sales in Bengaluru."
          />
        )}
        <ul className={cn(showHeading && 'mt-12', 'space-y-3')}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li
                key={item.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-primary"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <HiChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-brand transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="border-t border-slate-100 px-5 pb-4 pt-2 text-sm text-slate-600">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
