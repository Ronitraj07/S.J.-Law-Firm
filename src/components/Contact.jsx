import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => { setStatus("sent"); formRef.current.reset(); },
        () => { setStatus("error"); }
      );
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="animate-fadeInUp">
        <p className="section-label">Get in Touch</p>
        <h2 style={{ marginBottom: '0.5rem' }}>Contact Us</h2>
        <div className="divider" />
      </div>

      <div className="glass-card" style={{
        padding: 'clamp(1.8rem, 4vw, 3rem)',
        display: 'grid',
        gap: '3rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      }}>
        {/* Info */}
        <div className="animate-slideInLeft">
          <h3 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>
            Schedule a Confidential Consultation
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.8rem', lineHeight: 1.7 }}>
            Share a brief overview of your matter. Our team will review your request and reach out
            with available slots.
          </p>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 2.2 }}>
            <p><strong style={{ color: 'var(--navy)', fontWeight: 600 }}>Rituraj Sinha:</strong> +91 82003 80901</p>
            <p><strong style={{ color: 'var(--navy)', fontWeight: 600 }}>Swati Verma:</strong> +91 88004 13165</p>
            <p><strong style={{ color: 'var(--navy)', fontWeight: 600 }}>Abhishek Verma:</strong> +91 98710 12151</p>
            <p style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--navy)', fontWeight: 600 }}>Email:</strong> contact@sjassociates.com</p>
          </div>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="animate-slideInRight" style={{ display: 'grid', gap: '1.1rem' }}>
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
          <button type="submit" className="btn-primary" disabled={status === "sending"} style={{ marginTop: '0.5rem' }}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "sent" && (
            <p style={{ fontSize: '0.88rem', color: '#16a34a', textAlign: 'center' }}>✓ Message sent successfully.</p>
          )}
          {status === "error" && (
            <p style={{ fontSize: '0.88rem', color: '#dc2626', textAlign: 'center' }}>Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
