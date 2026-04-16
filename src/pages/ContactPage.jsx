import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { teamMembers } from '../data/team';

function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => { setStatus('sent'); formRef.current.reset(); },
        () => { setStatus('error'); }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | S. &amp; J. Associates</title>
        <meta name="description" content="Contact S. & J. Associates to schedule a confidential legal consultation. Reach out by phone, email or the contact form." />
      </Helmet>

      <div style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <p className="section-label" style={{ color: 'var(--gold)' }}>Get in Touch</p>
        <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Contact Us</h1>
        <div className="divider" style={{ margin: '0 auto 1.2rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75, fontSize: '0.95rem' }}>
          We offer an initial consultation to help you understand your legal position before you commit to any course of action.
        </p>
      </div>

      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>

          {/* Left: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1.2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Our Team</h2>
              {teamMembers.map(m => (
                <div key={m.slug} style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.15rem' }}>{m.name}</p>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{m.phone}</p>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{m.email}</p>
                </div>
              ))}
            </div>

            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1.2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Office</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                S. &amp; J. Associates<br />
                New Delhi, India
              </p>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.8rem' }}>contact@sjassociates.com</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card" style={{ padding: '1.8rem' }}>
            <h2 style={{ fontSize: '1rem', marginBottom: '1.2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Send a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.1rem' }}>
              <div>
                <label className="form-label">Full Name</label>
                <input name="from_name" required className="form-input" />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input type="email" name="user_email" required className="form-input" />
              </div>
              <div>
                <label className="form-label">Subject</label>
                <input name="subject" className="form-input" />
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea name="message" rows={5} required className="form-input" style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ marginTop: '0.3rem' }}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Submitting this form does not create an attorney-client relationship.
              </p>
              {status === 'sent' && <p style={{ fontSize: '0.88rem', color: '#16a34a', textAlign: 'center' }}>✓ Message sent successfully.</p>}
              {status === 'error' && <p style={{ fontSize: '0.88rem', color: '#dc2626', textAlign: 'center' }}>Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
