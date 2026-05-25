const DEFAULT_MSG =
  'Hello VENIRA LAPTOP CIRCLE, I need assistance regarding laptop sales/service.';

export function waLink(customMsg?: string): string {
  const phone = import.meta.env.VITE_WHATSAPP || '';
  const text = encodeURIComponent(customMsg ?? DEFAULT_MSG);
  return `https://wa.me/${phone}?text=${text}`;
}

export function waProductInquiry(model: string): string {
  return waLink(
    `Hello VENIRA LAPTOP CIRCLE, I am interested in the ${model}. Please share availability and price details.`,
  );
}

export function waServiceInquiry(service: string): string {
  return waLink(
    `Hello VENIRA LAPTOP CIRCLE, I need help with ${service} in Bengaluru. Please share a quote.`,
  );
}
