import emailjs from '@emailjs/browser';

export interface ContactFormData {
  from_name: string;
  phone: string;
  reply_to: string;
  message: string;
  service_type: string;
}

export function isEmailJsConfigured(): boolean {
  return !!(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'Email service is not configured. Please contact us via WhatsApp or phone.',
    );
  }

  await emailjs.send(serviceId, templateId, { ...data } as Record<string, unknown>, {
    publicKey,
  });
}
