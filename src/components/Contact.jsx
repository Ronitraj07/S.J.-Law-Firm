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
      <h2 style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>Contact us</h2>
      <div
        className="glass-card"
        style={{
          padding: "2rem 1.8rem",
          borderRadius: "18px",
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
        }}
      >
        <div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.6rem" }}>
            Schedule a confidential consultation
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#e5e7eb", marginBottom: "0.8rem" }}>
            Share a brief overview of your matter. Our team will review your request and reach out
            with available slots.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#cbd5f5", marginBottom: "0.6rem" }}>
            Phone (Rituraj Sinha): +91 82003 80901
            <br />
            Phone (Swati Verma): +91 88004 13165
            <br />
            Phone (Abhishek Verma): +91 98710 12151
            <br />
            Email: contact@sjassociates.com
            <br />
            Address: [Add office address / city here]
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} style={{ display: "grid", gap: "0.9rem" }}>
          <div>
            <label style={{ fontSize: "0.85rem" }}>Full name</label>
            <input
              name="from_name"
              required
              style={{
                width: "100%",
                marginTop: "0.25rem",
                borderRadius: "12px",
                border: "1px solid rgba(148,163,184,0.6)",
                padding: "0.6rem 0.8rem",
                background: "rgba(15,23,42,0.7)",
                color: "#e5e7eb",
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: "0.85rem" }}>Email</label>
            <input
              type="email"
              name="user_email"
              required
              style={{
                width: "100%",
                marginTop: "0.25rem",
                borderRadius: "12px",
                border: "1px solid rgba(148,163,184,0.6)",
                padding: "0.6rem 0.8rem",
                background: "rgba(15,23,42,0.7)",
                color: "#e5e7eb",
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: "0.85rem" }}>Subject</label>
            <input
              name="subject"
              style={{
                width: "100%",
                marginTop: "0.25rem",
                borderRadius: "12px",
                border: "1px solid rgba(148,163,184,0.6)",
                padding: "0.6rem 0.8rem",
                background: "rgba(15,23,42,0.7)",
                color: "#e5e7eb",
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: "0.85rem" }}>Message</label>
            <textarea
              name="message"
              rows={4}
              required
              style={{
                width: "100%",
                marginTop: "0.25rem",
                borderRadius: "12px",
                border: "1px solid rgba(148,163,184,0.6)",
                padding: "0.6rem 0.8rem",
                background: "rgba(15,23,42,0.7)",
                color: "#e5e7eb",
                resize: "vertical",
              }}
            />
          </div>
          <button type="submit" className="btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p style={{ fontSize: "0.8rem", color: "#bbf7d0" }}>Message sent successfully.</p>
          )}
          {status === "error" && (
            <p style={{ fontSize: "0.8rem", color: "#fecaca" }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
