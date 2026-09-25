import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { process, engagementTypes } from '@/content/approach';
import { ArrowRight, ArrowDownRight } from 'lucide-react';

export const metadata = {
  title: 'Approach | CORE4 Advisory',
  description:
    'Understand. Design. Implement. Improve. The CORE4 approach to healthcare advisory and implementation.',
};

export default function ApproachPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="page-hero section-pad" aria-labelledby="approach-hero-title">
        <div className="page-width">
          <p className="eyebrow">Our Approach</p>
          <h1 id="approach-hero-title">
            Our <em>Approach</em>
          </h1>
          <p className="page-hero-copy">
            Understand. Design. Implement. Improve.
          </p>
        </div>
      </section>

      <section className="intro section-pad page-width">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">How We Work</p>
            <h2>
              Understand.<br />
              Design. Implement.<br />
              <em>Improve.</em>
            </h2>
          </div>
          <div className="intro-copy">
            <p className="lead">
              The engagement is shaped around the situation, not a predefined package.
            </p>
            <p>
              CORE4 does not begin with a predefined package. We begin by understanding the situation, then develop an appropriate direction and level of support.
            </p>
          </div>
        </div>
      </section>

      <section className="approach section-pad page-width">
        <p className="eyebrow">Four Stages</p>
        <div className="process-list">
          {process.map((item) => (
            <div className="process-row" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ArrowRight size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="statement section-pad">
        <div className="page-width statement-inner">
          <p className="eyebrow">Flexible Engagement</p>
          <h2>
            Flexible engagement,<br />
            <em>shaped around the situation.</em>
          </h2>
          <div className="engagement-grid">
            {engagementTypes.map((item) => (
              <div className="engagement-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="statement-close">
            Scope, deliverables, and engagement structure are determined after understanding the specific situation.
          </p>
        </div>
      </section>

      <section className="why section-pad">
        <div className="page-width">
          <p className="eyebrow eyebrow-light">Ready to begin?</p>
          <h2>
            Share your situation.<br />
            <em>We will explore the direction together.</em>
          </h2>
          <a className="button button-light" href="/contact">
            Discuss Your Requirement <ArrowDownRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
