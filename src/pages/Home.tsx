import { SEO, JsonLd } from '@/seo/SEO';
import { defaultMeta } from '@/seo/defaultMeta';
import { faqSchema } from '@/seo/schemas';
import faqData from '@/data/faq.json';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { BrandsStrip } from '@/components/BrandsStrip';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { ProcessSteps } from '@/components/ProcessSteps';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ContactCTA } from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <SEO
        title={defaultMeta.title}
        description={defaultMeta.description}
        path={defaultMeta.path}
        keywords={[
          'laptop repair Bengaluru',
          'refurbished laptops Bengaluru',
          'MacBook repair Bengaluru',
          'laptop service center Bengaluru',
        ].join(', ')}
      />
      <JsonLd data={faqSchema(faqData)} />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <BrandsStrip />
      <TestimonialSlider />
      <ProcessSteps />
      <FAQAccordion limit={4} />
      <ContactCTA />
    </>
  );
}
