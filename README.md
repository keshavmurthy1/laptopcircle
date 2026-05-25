# VENIRA LAPTOP CIRCLE

Modern SEO-optimized React website for laptop sales and repair services in Bengaluru.

## Tech Stack

- React 18 + Vite + TypeScript
- Tailwind CSS
- React Router DOM
- Framer Motion
- React Helmet Async (SEO)
- Swiper.js
- EmailJS (contact form)
- Axios

## Quick Start

```bash
npm install
cp .env.example .env
# Edit .env with your real business details and EmailJS keys
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Description |
|----------|-------------|
| `VITE_SITE_URL` | Production domain (for canonical URLs) |
| `VITE_BUSINESS_NAME` | Business name |
| `VITE_PHONE` | Phone with country code |
| `VITE_WHATSAPP` | WhatsApp number without + (e.g. 919876543210) |
| `VITE_EMAIL` | Contact email |
| `VITE_ADDRESS` | Full address |
| `VITE_MAPS_EMBED_URL` | Google Maps embed iframe URL |
| `VITE_HOURS_MON_SAT` | Weekday hours |
| `VITE_HOURS_SUN` | Sunday hours |
| `VITE_EMAILJS_*` | EmailJS service, template, public key |

## EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service (Gmail, etc.)
3. Create a template with variables: `from_name`, `phone`, `reply_to`, `message`, `service_type`
4. Copy Service ID, Template ID, and Public Key into `.env`

## Updating Content

- **Services:** Edit `src/data/services.json`
- **Laptops:** Edit `src/data/laptops.json`
- **FAQ:** Edit `src/data/faq.json`
- **Testimonials:** Edit `src/data/testimonials.json`
- **Sitemap:** Update `public/sitemap.xml` with your `VITE_SITE_URL` domain

## SEO Checklist

- [ ] Set `VITE_SITE_URL` to production domain
- [ ] Update `public/sitemap.xml` and `public/robots.txt` URLs
- [ ] Replace `public/og-image.svg` with a 1200×630 PNG/JPG for best social previews
- [ ] Submit sitemap in Google Search Console
- [ ] Test schema at [Rich Results Test](https://search.google.com/test/rich-results)

## Build & Deploy

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to Vercel, Netlify, or Cloudflare Pages. Set all `VITE_*` env vars in your hosting dashboard.

## Project Structure

```
src/
├── components/   # UI components
├── pages/        # Route pages
├── layouts/      # Root layout
├── routes/       # Router config
├── seo/          # Meta tags & JSON-LD
├── data/         # JSON content + config
├── animations/   # Framer Motion variants
├── services/     # EmailJS, API
└── utils/        # Helpers
```

## License

Private — VENIRA LAPTOP CIRCLE
