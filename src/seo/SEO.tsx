import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/data/site.config';
import type { PageMeta } from './defaultMeta';

interface SEOProps extends Partial<PageMeta> {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

export function SEO({
  title = siteConfig.name,
  description,
  path = '/',
  keywords,
  noindex = false,
  children,
}: SEOProps) {
  const canonical = `${siteConfig.url}${path === '/' ? '' : path}`;
  const ogImage = `${siteConfig.url}/og-image.svg`;
  const desc =
    description ||
    'VENIRA LAPTOP CIRCLE provides professional laptop repair, MacBook servicing, SSD upgrades, screen replacement, and refurbished laptop sales in Bengaluru.';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {children}
    </Helmet>
  );
}

interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
