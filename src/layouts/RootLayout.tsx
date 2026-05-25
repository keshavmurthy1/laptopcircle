import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PageLoader } from '@/components/PageLoader';
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { JsonLd } from '@/seo/SEO';
import { localBusinessSchema } from '@/seo/schemas';
import { pageTransition } from '@/animations/variants';

export function RootLayout() {
  const location = useLocation();

  return (
    <LazyMotion features={domAnimation}>
      <JsonLd data={localBusinessSchema()} />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <m.div
              key={location.pathname}
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
            >
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </m.div>
          </AnimatePresence>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LazyMotion>
  );
}
