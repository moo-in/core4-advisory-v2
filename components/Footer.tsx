import Link from 'next/link';
import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-width footer-top">
        <div>
          <a href="/" className="wordmark" aria-label="CORE4 Advisory home">
            <img src="/CORE4_logo.svg" alt="CORE4 Advisory" className="wordmark-logo" />
          </a>
          <p className="footer-tagline">
            {site.tagline}
            <br />
            {site.subtitle}
          </p>
          <p className="footer-tagline" style={{ marginTop: '12px' }}>
            Healthcare Advisory · Implementation · Operations · Growth
          </p>
        </div>
        <div className="footer-nav">
          <p className="footer-label">Navigate</p>
          {site.footerNav.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <p className="footer-label">Contact</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>Phone: {site.phone}</p>
          <p>Address: {site.address}</p>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>© {site.legalName}. All rights reserved.</span>
        <div>
          {site.legal.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
