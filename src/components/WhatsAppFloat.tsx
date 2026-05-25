import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { waLink } from '@/utils/whatsapp';

export function WhatsAppFloat() {
  const [pulse, setPulse] = useState(true);

  return (
    <AnimatePresence>
      <motion.a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260 }}
        onClick={() => setPulse(false)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
        aria-label="Chat on WhatsApp"
      >
        {pulse && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        )}
        <FaWhatsapp className="relative text-3xl sm:text-4xl" />
      </motion.a>
    </AnimatePresence>
  );
}
