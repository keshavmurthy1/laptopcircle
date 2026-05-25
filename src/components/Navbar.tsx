import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig, navLinks } from '@/data/site.config';
import { waLink } from '@/utils/whatsapp';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-white',
      )}
    >
      <nav
        className="container-custom flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex flex-col" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-bold text-primary sm:text-xl">
            VENIRA
          </span>
          <span className="text-[10px] font-medium tracking-widest text-brand sm:text-xs">
            LAPTOP CIRCLE
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors hover:text-brand',
                    isActive ? 'text-brand' : 'text-slate-600',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${siteConfig.phone}`} className="btn-secondary !py-2.5 !px-4 text-xs">
            <HiPhone className="text-lg" />
            Call
          </a>
          <Link to="/contact" className="btn-primary !py-2.5 !px-4 text-xs">
            Book Repair
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-primary lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiX className="h-7 w-7" /> : <HiMenuAlt3 className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[60px] z-40 bg-white lg:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-xl px-4 py-3 text-base font-medium',
                      isActive ? 'bg-brand/10 text-brand' : 'text-slate-700',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <Link to="/contact" className="btn-primary w-full" onClick={() => setOpen(false)}>
                Book Repair
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </a>
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary w-full">
                <HiPhone />
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
