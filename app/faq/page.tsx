import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { faqs } from '@/content/faq';
import { ArrowDownRight } from 'lucide-react';

export const metadata = {
  title: 'FAQ | CORE4 Advisory',
  description: 'Frequently asked questions about CORE4 Advisory services, engagement, and approach.',
};

export default function FAQPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="page-hero section-pad" aria-labelledby="faq-hero-title">
        <div className="page-width">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h1 id="faq-hero-title">
            Frequently Asked <em>Questions</em>
          </h1>
        </div>
      </section>

      <section className="faq-section section-pad page-width">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={index}>
              <summary>
                <span className="faq-number">0{index + 1}</span>
                <span className="faq-question">{faq.question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="faq-cta">
          <p className="eyebrow">Still have questions?</p>
          <h2>
            Share your <em>situation.</em>
          </h2>
          <a className="button button-light" href="/contact">
            Start a Conversation <ArrowDownRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
