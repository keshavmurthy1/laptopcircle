import { useMemo, useState } from 'react';
import { SEO } from '@/seo/SEO';
import { pageMeta } from '@/seo/defaultMeta';
import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { ContactCTA } from '@/components/ContactCTA';
import { laptops, laptopBrands, conditionFilters } from '@/data/laptops';
import { cn } from '@/utils/cn';

export default function LaptopSales() {
  const meta = pageMeta.laptopSales;
  const [brand, setBrand] = useState<string>('All');
  const [condition, setCondition] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(60000);

  const filtered = useMemo(() => {
    return laptops.filter((l) => {
      const brandMatch = brand === 'All' || l.brand === brand;
      const conditionMatch = condition === 'All' || l.condition === condition;
      const priceMatch = l.price <= maxPrice;
      return brandMatch && conditionMatch && priceMatch;
    });
  }, [brand, condition, maxPrice]);

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        path={meta.path}
        keywords={meta.keywords}
      />
      <HeroSection compact />
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Refurbished Laptops in Bengaluru
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Quality <strong>refurbished laptops in Bengaluru</strong> from Dell, HP, Lenovo,
            ASUS, Acer, and Apple. Every device is tested and backed by warranty. Use filters
            below or inquire instantly on WhatsApp.
          </p>

          <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-surface p-6 lg:flex-row lg:items-end">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium text-primary">Brand</label>
              <div className="flex flex-wrap gap-2">
                {laptopBrands.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBrand(b)}
                    className={cn(
                      'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                      brand === b
                        ? 'bg-brand text-white'
                        : 'bg-white text-slate-600 hover:bg-brand/10',
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Condition</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm lg:min-w-[160px]"
              >
                {conditionFilters.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="lg:min-w-[200px]">
              <label htmlFor="maxPrice" className="mb-2 block text-sm font-medium text-primary">
                Max Price: ₹{maxPrice.toLocaleString('en-IN')}
              </label>
              <input
                id="maxPrice"
                type="range"
                min={15000}
                max={60000}
                step={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-brand"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-slate-600">
              No laptops match your filters. Try adjusting filters or contact us for custom
              requirements.
            </p>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((laptop, i) => (
                <ProductCard key={laptop.id} laptop={laptop} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
