'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { site } from '@/content/site';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isHome = pathname === '/';
  const showOverlay = isHome && !scrolled;

  return (
    <header className={scrolled ? 'site-nav site-nav-scrolled' : 'site-nav'}>
      <div className="nav-inner">
        <a href="/" className="wordmark" aria-label="CORE4 Advisory home">
          <img
            src="/CORE4_logo.svg"
            alt="CORE4 Advisory"
            className={showOverlay ? 'wordmark-logo wordmark-logo-light' : 'wordmark-logo'}
          />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {site.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={isActive ? 'is-active' : ''}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className="nav-cta">
          Start a conversation <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            {site.nav.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
                <ArrowRight size={18} />
              </Link>
            ))}
            <Link className="mobile-menu-cta" href="/contact">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
