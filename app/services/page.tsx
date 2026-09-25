import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { organisationalServices, professionalServices } from '@/content/services';
import { ArrowRight, ArrowDownRight } from 'lucide-react';

export const metadata = {
  title: 'Services | CORE4 Advisory',
  description:
    'Healthcare advisory, implementation, and professional support services from CORE4 Advisory.',
};

export default function ServicesPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="page-hero section-pad" aria-labelledby="services-hero-title">
        <div className="page-width">
          <p className="eyebrow">Our Services</p>
          <h1 id="services-hero-title">
            Our <em>Services</em>
          </h1>
          <p className="page-hero-copy">
            Healthcare advisory. Implementation. Professional support.<br />
            Support shaped around the situation, with the perspective to see across the whole.
          </p>
        </div>
      </section>

      <section className="intro section-pad page-width">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">Healthcare Advisory &amp; Organisational Services</p>
            <h2>
              Healthcare advisory.<br />
              <em>Implementation. Professional support.</em>
            </h2>
          </div>
          <div className="intro-copy">
            <p className="lead">
              Support shaped around the situation.
            </p>
            <p>
              CORE4 provides advisory and implementation support across operational, quality, regulatory, strategic, and growth-related priorities — shaped around the specific context, not a predefined package.
            </p>
          </div>
        </div>
      </section>

      <section className="services section-pad">
        <div className="page-width">
          <p className="eyebrow">Organisational Services</p>
          <div className="services-editorial">
            {organisationalServices.map((service) => (
              <div className="service-editorial-item" key={service.number}>
                <span className="service-editorial-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services section-pad" style={{ background: 'var(--linen)' }}>
        <div className="page-width">
          <p className="eyebrow">Professional Healthcare Services</p>
          <div className="services-editorial">
            {professionalServices.map((service) => (
              <div className="service-editorial-item" key={service.number}>
                <span className="service-editorial-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why section-pad">
        <div className="page-width">
          <p className="eyebrow eyebrow-light">Have a specific need?</p>
          <h2>
            You do not need to identify<br />
            <em>the exact service before speaking with us.</em>
          </h2>
          <p className="why-copy">
            Share your situation and we can explore the appropriate direction together.
          </p>
          <a className="button button-light" href="/contact">
            Discuss Your Requirement <ArrowDownRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
