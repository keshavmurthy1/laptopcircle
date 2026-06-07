import { useState, type FormEvent } from 'react';
import { sendContactEmail, isEmailJsConfigured } from '@/services/emailjs';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site.config';
import { waLink } from '@/utils/whatsapp';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await sendContactEmail({
        from_name: data.get('name') as string,
        phone: data.get('phone') as string,
        reply_to: data.get('email') as string,
        message: data.get('message') as string,
        service_type: data.get('service_type') as string,
      });
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-green-800">
          Message Sent Successfully!
        </h3>
        <p className="mt-2 text-green-700">
          We&apos;ll get back to you shortly. For urgent requests, WhatsApp us.
        </p>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6">
          WhatsApp Us
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!isEmailJsConfigured() && (
        <p className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Email form requires EmailJS keys in .env. You can still reach us at{' '}
          <a href={`tel:${siteConfig.phone}`} className="font-semibold underline">
            {siteConfig.phone}
          </a>{' '}
          or WhatsApp.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-primary">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
          Email 
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="service_type" className="mb-1.5 block text-sm font-medium text-primary">
          Service Type
        </label>
        <select
          id="service_type"
          name="service_type"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        >
          <option value="General Inquiry">General Inquiry</option>
          {services.map((s) => (
            <option key={s.slug} value={s.shortTitle}>
              {s.shortTitle}
            </option>
          ))}
          <option value="Refurbished Laptop">Refurbished Laptop</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          placeholder="Describe your laptop issue or inquiry..."
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      )}
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
