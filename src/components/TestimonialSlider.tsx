import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { HiStar } from 'react-icons/hi';
import { SectionHeading } from './SectionHeading';
import testimonials from '@/data/testimonials.json';
import 'swiper/css';
import 'swiper/css/pagination';

export function TestimonialSlider() {
  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Trusted by hundreds of laptop owners across Bengaluru."
        />
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-slate-200 bg-surface p-6">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <HiStar key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-slate-700">&ldquo;{t.text}&rdquo;</p>
                  <footer className="mt-6 border-t border-slate-200 pt-4">
                    <cite className="not-italic">
                      <span className="font-semibold text-primary">{t.name}</span>
                      <span className="mt-1 block text-sm text-slate-500">{t.location}</span>
                    </cite>
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
