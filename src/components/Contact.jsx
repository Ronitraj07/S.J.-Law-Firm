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
        () => {
          setStatus("sent");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="section" id="contact">
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>
        Contact us
      </h2>
      <div
        className="glass-card"
        style={{
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          borderRadius: '18px',
          display: 'grid',
          gap: '2.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem', color: '#c9a961', fontFamily: 'Georgia, serif' }}>
            Schedule a confidential consultation
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#e5e7eb', marginBottom: '1.2rem', lineHeight: 1.6 }}>
            Share a brief overview of your matter. Our team will review your request and reach out
            with available slots.
          </p>
          <div style={{ fontSize: '0.92rem', color: '#a8a8a8', lineHeight: 1.9 }}>
            <p style={{ marginBottom: '0.3rem' }}><strong style={{ color: '#c9a961' }}>Phone (Rituraj Sinha):</strong> +91 82003 80901</p>
            <p style={{ marginBottom: '0.3rem' }}><strong style={{ color: '#c9a961' }}>Phone (Swati Verma):</strong> +91 88004 13165</p>
            <p style={{ marginBottom: '0.3rem' }}><strong style={{ color: '#c9a961' }}>Phone (Abhishek Verma):</strong> +91 98710 12151</p>
            <p style={{ marginBottom: '0.3rem' }}><strong style={{ color: '#c9a961' }}>Email:</strong> contact@sjassociates.com</p>
            <p><strong style={{ color: '#c9a961' }}>Address:</strong> [Add office address / city here]</p>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.1rem' }}>
          <div>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#c9a961', display: 'block', marginBottom: '0.4rem' }}>
              Full name
            </label>
            <input
              name="from_name"
              required
              style={{
                width: '100%',
                borderRadius: '10px',
                border: '1px solid rgba(201,169,97,0.4)',
                padding: '0.75rem 1rem',
                background: 'rgba(13,13,13,0.9)',
                color: '#e5e7eb',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#c9a961'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(201,169,97,0.4)'}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#c9a961', display: 'block', marginBottom: '0.4rem' }}>
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              style={{
                width: '100%',
                borderRadius: '10px',
                border: '1px solid rgba(201,169,97,0.4)',
                padding: '0.75rem 1rem',
                background: 'rgba(13,13,13,0.9)',
                color: '#e5e7eb',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#c9a961'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(201,169,97,0.4)'}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#c9a961', display: 'block', marginBottom: '0.4rem' }}>
              Subject
            </label>
            <input
              name="subject"
              style={{
                width: '100%',
                borderRadius: '10px',
                border: '1px solid rgba(201,169,97,0.4)',
                padding: '0.75rem 1rem',
                background: 'rgba(13,13,13,0.9)',
                color: '#e5e7eb',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#c9a961'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(201,169,97,0.4)'}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#c9a961', display: 'block', marginBottom: '0.4rem' }}>
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              style={{
                width: '100%',
                borderRadius: '10px',
                border: '1px solid rgba(201,169,97,0.4)',
                padding: '0.75rem 1rem',
                background: 'rgba(13,13,13,0.9)',
                color: '#e5e7eb',
                fontSize: '0.95rem',
                resize: 'vertical',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#c9a961'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(13,13,13,0.9)'}
            />
          </div>
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={status === "sending"}
            style={{ marginTop: '0.5rem' }}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p style={{ fontSize: '0.88rem', color: '#86efac', textAlign: 'center' }}>
              ✓ Message sent successfully.
            </p>
          )}
          {status === "error" && (
            <p style={{ fontSize: '0.88rem', color: '#fca5a5', textAlign: 'center' }}>
              ✗ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
