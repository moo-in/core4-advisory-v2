'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, Check, Minus } from 'lucide-react';
import { framework, principles, supportAreas } from '@/content/site';
import { process } from '@/content/approach';
import { leadership } from '@/content/team';
import { allServices } from '@/content/services';

function ArrowLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return (
    <a className="arrow-link" href={href}>
      <span>{children}</span>
      <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFramework, setActiveFramework] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
      const frameworkSection = document.getElementById('framework');
      if (!frameworkSection) return;
      const progress = (window.scrollY - frameworkSection.offsetTop + window.innerHeight * 0.45) / frameworkSection.offsetHeight;
      const nextIndex = Math.min(3, Math.max(0, Math.floor(progress * 4)));
      setActiveFramework(nextIndex);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main id="top" className="site-shell">
      <Navbar />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image hero-image-placeholder" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <p className="eyebrow eyebrow-light">CORE4 ADVISORY</p>
          <h1 id="hero-title">Healthcare Advisory<br /><em>&amp; Implementation</em></h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-tagline">Building Better Healthcare.<br />Enabling Better Outcomes.</p>
              <p className="hero-copy">CORE4 Advisory works with healthcare organisations and professionals to strengthen operations, quality, regulatory alignment, and sustainable growth through practical advisory and implementation support.</p>
            </div>
            <div className="hero-actions">
              <a className="button button-light" href="/contact">Start a Conversation <ArrowDownRight size={16} /></a>
              <a className="text-link-light" href="/services">Explore Our Services <ArrowDownRight size={17} /></a>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true"><span>Scroll to explore</span><Minus size={28} /></div>
      </section>

      <section id="about" className="intro section-pad page-width">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">Healthcare, with purpose.</p>
            <h2>Healthcare,<br /><em>with purpose.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="lead">Healthcare is complex.</p>
            <p>Organisations and professionals navigate operational challenges, quality expectations, regulatory considerations, changing needs, and the pursuit of sustainable growth.</p>
            <p>CORE4 begins by understanding the situation, priorities, and desired outcome, then develops an appropriate direction and level of support.</p>
          </div>
        </div>
      </section>

      <section className="statement section-pad">
        <div className="page-width statement-inner">
          <p className="eyebrow">A connected view</p>
          <h2>Healthcare decisions<br /><em>rarely exist in isolation.</em></h2>
          <div className="statement-notes">
            <p><span>01</span>An operational change can affect quality.</p>
            <p><span>02</span>Quality systems can influence regulatory requirements.</p>
            <p><span>03</span>Growth needs to be supported by practical execution.</p>
          </div>
          <p className="statement-close">CORE4 brings these perspectives together.</p>
        </div>
      </section>

      <section id="framework" className="framework section-pad">
        <div className="page-width">
          <p className="eyebrow">The CORE4 Perspective</p>
          <div className="framework-heading"><h2>Four perspectives.<br /><em>One integrated approach.</em></h2><span className="framework-progress">0{activeFramework + 1} / 04</span></div>
          <div className="framework-story">
            <div className="framework-letters" aria-hidden="true">
              {framework.map((item, index) => <span key={item.letter} className={activeFramework === index ? 'is-active' : ''}>{item.letter}</span>)}
            </div>
            <div className="framework-detail">
              <div className="framework-number">0{activeFramework + 1}</div>
              <h3>{framework[activeFramework].title}</h3>
              <p>{framework[activeFramework].text}</p>
              <div className="framework-track"><span style={{ width: `${(activeFramework + 1) * 25}%` }} /></div>
              <div className="framework-controls" aria-label="Choose CORE4 perspective">
                {framework.map((item, index) => <button key={item.letter} type="button" aria-label={`Show ${item.title}`} aria-pressed={activeFramework === index} onClick={() => setActiveFramework(index)}>{item.letter}</button>)}
              </div>
            </div>
            <div className="framework-aside"><p>Different perspectives.<br /><em>One integrated approach</em><br />to healthcare.</p><ArrowLink href="/approach">Explore the CORE4 Approach</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="support section-pad page-width">
        <div className="support-grid">
          <div className="support-image-wrap support-image-placeholder" aria-hidden="true" />
          <div className="support-content"><p className="eyebrow">Who We Support</p><h2>Healthcare organisations and professionals <em>navigating change, growth, and improvement.</em></h2><ul>{supportAreas.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <div className="page-width">
          <p className="eyebrow">Our Services</p>
          <div className="services-head"><h2>Healthcare advisory.<br /><em>Implementation. Professional support.</em></h2><p>Support shaped around the situation, with the perspective to see across the whole.</p></div>
          <div className="services-grid">
            <div className="service-list"><p className="service-group">Healthcare Advisory &amp; Organisational Services</p>{allServices.slice(0, 6).map((service, index) => <button key={service.title} type="button" className={activeService === index ? 'service-item is-active' : 'service-item'} onClick={() => setActiveService(index)} onMouseEnter={() => setActiveService(index)}><span>0{index + 1}</span>{service.title}<ArrowRight size={17} /></button>)}<p className="service-group service-group-second">Professional Healthcare Services</p>{allServices.slice(6).map((service, index) => <button key={service.title} type="button" className={activeService === index + 6 ? 'service-item is-active' : 'service-item'} onClick={() => setActiveService(index + 6)} onMouseEnter={() => setActiveService(index + 6)}><span>0{index + 7}</span>{service.title}<ArrowRight size={17} /></button>)}</div>
            <div className="service-feature"><div className="service-feature-mark">{String(activeService + 1).padStart(2, '0')}</div><p>CORE4 Advisory</p><h3>{allServices[activeService].title}</h3><div className="service-feature-line" /></div>
          </div>
        </div>
      </section>

      <section id="approach" className="approach section-pad page-width">
        <p className="eyebrow">How We Work</p><div className="approach-head"><h2>Understand.<br />Design. Implement.<br /><em>Improve.</em></h2><div><p className="lead">The engagement is shaped around the situation, not a predefined package.</p><ArrowLink href="/approach">Understand Our Approach</ArrowLink></div></div>
        <div className="process-list">{process.map((item) => <div className="process-row" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowRight size={18} /></div>)}</div>
      </section>

      <section className="why section-pad"><div className="page-width why-inner"><div><p className="eyebrow eyebrow-light">Why CORE4</p><h2>Healthcare-specific thinking.<br /><em>Practical execution.</em></h2></div><div className="principles">{principles.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}<ArrowLink href="/about">Explore CORE4</ArrowLink></div></div></section>

      <section className="team section-pad page-width"><p className="eyebrow">Leadership</p><div className="team-head"><h2>People who understand<br /><em>healthcare from within.</em></h2><p>CORE4 Advisory LLP is led by managing partners working across healthcare advisory, strategy, operations, professional services, and implementation.</p></div><div className="team-list">{leadership.map((member, index) => <div className="team-row" key={member.name}><span>0{index + 1}</span><div><h3>{member.name}</h3><p>{member.role}</p></div><p>{member.focus}</p><ArrowRight size={18} /></div>)}</div></section>

      <section id="contact" className="contact"><div className="page-width contact-inner"><p className="eyebrow eyebrow-light">Start a conversation</p><h2>Start with what<br /><em>you want to achieve.</em></h2><div className="contact-bottom"><p>You do not need to know exactly which CORE4 service you need.<br />Share your situation, priority, or objective and begin the conversation with our team.</p><a className="button button-light" href="/contact">Start a Conversation <ArrowDownRight size={16} /></a></div></div></section>

      <Footer />
    </main>
  );
}
