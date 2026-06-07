/// <reference types="vite/client" />

declare module 'swiper/css';
declare module 'swiper/css/pagination';

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_BUSINESS_NAME: string;
  readonly VITE_PHONE: string;
  readonly VITE_WHATSAPP: string;
  readonly VITE_EMAIL: string;
  readonly VITE_ADDRESS: string;
  readonly VITE_MAPS_EMBED_URL: string;
  readonly VITE_HOURS_MON_THU: string;
  readonly VITE_HOURS_FRI_SUN: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
