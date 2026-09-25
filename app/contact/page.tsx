'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { ArrowDownRight, Check } from 'lucide-react';
import { requirementAreas } from '@/content/services';
import { site } from '@/content/site';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    designation: '',
    organisation: '',
    whatsapp_number: '',
    email: '',
    requirement_area: '',
    requirement_details: '',
    privacy_acknowledged: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Please enter your full name.';
    if (!formData.designation.trim()) newErrors.designation = 'Please enter your designation.';
    if (!formData.organisation.trim()) newErrors.organisation = 'Please enter your organisation or individual status.';
    if (!formData.whatsapp_number.trim()) newErrors.whatsapp_number = 'Please enter your WhatsApp number.';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.requirement_area) newErrors.requirement_area = 'Please select a requirement area.';
    if (!formData.requirement_details.trim()) newErrors.requirement_details = 'Please describe your requirement.';
    if (!formData.privacy_acknowledged) newErrors.privacy_acknowledged = 'Please acknowledge the Privacy Policy to continue.';
    return newErrors;
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    try {
      const { error } = await supabase.from('contact_enquiries').insert({
        full_name: formData.full_name.trim(),
        designation: formData.designation.trim(),
        organisation: formData.organisation.trim(),
        whatsapp_number: formData.whatsapp_number.trim(),
        email: formData.email.trim(),
        requirement_area: formData.requirement_area,
        requirement_details: formData.requirement_details.trim(),
        privacy_acknowledged: formData.privacy_acknowledged,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong while submitting your enquiry. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="site-shell">
      <Navbar />

      <section className="page-hero section-pad" aria-labelledby="contact-hero-title">
        <div className="page-width">
          <p className="eyebrow">Contact CORE4</p>
          <h1 id="contact-hero-title">
            Contact <em>CORE4</em>
          </h1>
          <p className="page-hero-copy">Start with the situation.</p>
        </div>
      </section>

      <section className="intro section-pad page-width">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>
              Start with what<br />
              <em>you want to achieve.</em>
            </h2>
          </div>
          <div className="intro-copy">
            <p className="lead">
              You do not need to know exactly which CORE4 service you need.
            </p>
            <p>
              Share your situation, priority, or objective and begin the conversation with our team. We will explore the appropriate direction together.
            </p>
            <div className="contact-direct">
              <p className="footer-label">Email</p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section section-pad page-width">
        {submitted ? (
          <div className="form-success" role="status">
            <Check size={32} />
            <h2>Thank you. Your enquiry has been received.</h2>
            <p>We will review your requirement and respond to you shortly.</p>
            <button
              type="button"
              className="button button-light"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  full_name: '',
                  designation: '',
                  organisation: '',
                  whatsapp_number: '',
                  email: '',
                  requirement_area: '',
                  requirement_details: '',
                  privacy_acknowledged: false,
                });
              }}
            >
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <p className="eyebrow">Enquiry Form</p>
            <h2 style={{ marginTop: '20px', marginBottom: '40px' }}>
              Share your <em>situation.</em>
            </h2>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="full_name">Full Name <span className="form-required">*</span></label>
                <input
                  type="text"
                  id="full_name"
                  value={formData.full_name}
                  onChange={(e) => handleChange('full_name', e.target.value)}
                  aria-invalid={!!errors.full_name}
                  aria-describedby={errors.full_name ? 'full_name-error' : undefined}
                />
                {errors.full_name && <p className="form-error" id="full_name-error">{errors.full_name}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="designation">Designation <span className="form-required">*</span></label>
                <input
                  type="text"
                  id="designation"
                  value={formData.designation}
                  onChange={(e) => handleChange('designation', e.target.value)}
                  aria-invalid={!!errors.designation}
                  aria-describedby={errors.designation ? 'designation-error' : undefined}
                />
                {errors.designation && <p className="form-error" id="designation-error">{errors.designation}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="organisation">Organisation / Individual <span className="form-required">*</span></label>
                <input
                  type="text"
                  id="organisation"
                  value={formData.organisation}
                  onChange={(e) => handleChange('organisation', e.target.value)}
                  aria-invalid={!!errors.organisation}
                  aria-describedby={errors.organisation ? 'organisation-error' : undefined}
                />
                {errors.organisation && <p className="form-error" id="organisation-error">{errors.organisation}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="whatsapp_number">WhatsApp Number <span className="form-required">*</span></label>
                <input
                  type="tel"
                  id="whatsapp_number"
                  value={formData.whatsapp_number}
                  onChange={(e) => handleChange('whatsapp_number', e.target.value)}
                  aria-invalid={!!errors.whatsapp_number}
                  aria-describedby={errors.whatsapp_number ? 'whatsapp-error' : undefined}
                />
                {errors.whatsapp_number && <p className="form-error" id="whatsapp-error">{errors.whatsapp_number}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address <span className="form-required">*</span></label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p className="form-error" id="email-error">{errors.email}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="requirement_area">Requirement Area <span className="form-required">*</span></label>
                <select
                  id="requirement_area"
                  value={formData.requirement_area}
                  onChange={(e) => handleChange('requirement_area', e.target.value)}
                  aria-invalid={!!errors.requirement_area}
                  aria-describedby={errors.requirement_area ? 'requirement_area-error' : undefined}
                >
                  <option value="">Select an area…</option>
                  {requirementAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
                {errors.requirement_area && <p className="form-error" id="requirement_area-error">{errors.requirement_area}</p>}
              </div>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="requirement_details">Requirement Details <span className="form-required">*</span></label>
              <textarea
                id="requirement_details"
                rows={5}
                value={formData.requirement_details}
                onChange={(e) => handleChange('requirement_details', e.target.value)}
                aria-invalid={!!errors.requirement_details}
                aria-describedby={errors.requirement_details ? 'details-error' : undefined}
              />
              {errors.requirement_details && <p className="form-error" id="details-error">{errors.requirement_details}</p>}
            </div>

            <div className="form-notice">
              <p>
                Please do not submit patient records, medical identifiers, financial information, passwords, or other sensitive personal information through this form.
              </p>
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="privacy_acknowledged"
                checked={formData.privacy_acknowledged}
                onChange={(e) => handleChange('privacy_acknowledged', e.target.checked)}
                aria-invalid={!!errors.privacy_acknowledged}
                aria-describedby={errors.privacy_acknowledged ? 'privacy-error' : undefined}
              />
              <label htmlFor="privacy_acknowledged">
                I have read and understood the Privacy Policy and agree to the processing of the information I have provided for the purpose of responding to my enquiry.
              </label>
            </div>
            {errors.privacy_acknowledged && <p className="form-error" id="privacy-error">{errors.privacy_acknowledged}</p>}

            {submitError && <p className="form-error form-error-general">{submitError}</p>}

            <button type="submit" className="button button-light form-submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Submit Enquiry'} <ArrowDownRight size={16} />
            </button>
          </form>
        )}
      </section>

      <Footer />
    </main>
  );
}
