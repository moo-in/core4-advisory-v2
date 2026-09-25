import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { framework, principles } from '@/content/site';
import { leadership, specialistNetwork } from '@/content/team';
import { howWeThink } from '@/content/approach';
import { ArrowRight, ArrowDownRight } from 'lucide-react';

export const metadata = {
  title: 'About | CORE4 Advisory',
  description:
    'CORE4 Advisory LLP is a healthcare advisory and implementation firm supporting healthcare organisations and professionals.',
};

export default function AboutPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="page-hero section-pad" aria-labelledby="about-hero-title">
        <div className="page-width">
          <p className="eyebrow">About CORE4</p>
          <h1 id="about-hero-title">
            Healthcare expertise,<br />
            <em>approached from four directions.</em>
          </h1>
        </div>
      </section>

      <section className="intro section-pad page-width">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2>Who <em>We Are</em></h2>
          </div>
          <div className="intro-copy">
            <p className="lead">
              CORE4 Advisory LLP is a healthcare advisory and implementation firm supporting healthcare organisations and professionals with operational, quality, regulatory, strategic, and growth-related priorities.
            </p>
            <p>
              Healthcare decisions rarely exist in isolation. An operational change can affect quality. Quality systems can influence regulatory requirements. Growth needs to be supported by practical execution.
            </p>
            <p>
              CORE4 brings these perspectives together — clinical, operational, regulatory, strategic, and professional — into one integrated approach.
            </p>
          </div>
        </div>
      </section>

      <section className="why section-pad">
        <div className="page-width why-inner">
          <div>
            <p className="eyebrow eyebrow-light">Why CORE4</p>
            <h2>
              Different perspectives.<br />
              <em>One integrated approach to healthcare.</em>
            </h2>
          </div>
          <div className="principles">
            {principles.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
            <p className="why-objective">
              The objective is straightforward:<br />
              Clear thinking. Practical action. Sustainable progress.
            </p>
          </div>
        </div>
      </section>

      <section id="framework" className="framework section-pad">
        <div className="page-width">
          <p className="eyebrow">The CORE4 Perspective</p>
          <div className="framework-heading">
            <h2>
              Four perspectives.<br />
              <em>One integrated approach.</em>
            </h2>
          </div>
          <div className="framework-static-grid">
            {framework.map((item) => (
              <div className="framework-static-card" key={item.letter}>
                <span className="framework-static-letter">{item.letter}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="approach section-pad page-width">
        <p className="eyebrow">How We Think</p>
        <div className="approach-head">
          <h2>
            How <em>We Think</em>
          </h2>
        </div>
        <div className="process-list">
          {howWeThink.map((item) => (
            <div className="process-row" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ArrowRight size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="team section-pad page-width">
        <p className="eyebrow">Leadership</p>
        <div className="team-head">
          <h2>
            People who understand<br />
            <em>healthcare from within.</em>
          </h2>
          <p>
            CORE4 Advisory LLP is led by managing partners working across healthcare advisory, strategy, operations, professional services, and implementation.
          </p>
        </div>
        <div className="team-list">
          {leadership.map((member, index) => (
            <div className="team-row" key={member.name}>
              <span>0{index + 1}</span>
              <div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <p>{member.focus}</p>
              <span className="team-placeholder" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section className="team section-pad" style={{ background: 'var(--sand)' }}>
        <div className="page-width">
          <p className="eyebrow">Specialist Advisory &amp; Professional Network</p>
          <div className="team-head">
            <h2>
              Specialist expertise,<br />
              <em>when the situation requires it.</em>
            </h2>
            <p>
              CORE4 draws on a network of specialist advisors and professionals across strategy, finance, legal, human resources, and professional healthcare services.
            </p>
          </div>
          <div className="team-list">
            {specialistNetwork.map((member, index) => (
              <div className="team-row" key={member.name}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
                <p>{member.focus}</p>
                <span className="team-placeholder" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="statement section-pad">
        <div className="page-width statement-inner">
          <p className="eyebrow">Our Commitment</p>
          <h2>
            Building better healthcare<br />
            <em>through practical thinking and purposeful execution.</em>
          </h2>
          <div className="statement-notes">
            <p><span>01</span>We approach every engagement with clarity, purpose, and practicality.</p>
            <p><span>02</span>We aim for sustainable progress — systems and practices that endure.</p>
            <p><span>03</span>We work with integrity, confidentiality, and respect for context.</p>
          </div>
          <div className="contact-cta-row">
            <a className="button button-light" href="/contact">
              Start a Conversation <ArrowDownRight size={16} />
            </a>
            <a className="arrow-link" href="/contact">
              <span>Meet the CORE4 Team</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
