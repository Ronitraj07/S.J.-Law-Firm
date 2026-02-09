from pathlib import Path

# ---------- helpers ----------

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"
COMP = SRC / "components"
STYLES = SRC / "styles"

def write_file(path: Path, content: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.strip() + "\n", encoding="utf-8")
    print(f"Wrote: {path.relative_to(ROOT)}")

# ---------- contents ----------

APP_JSX = r"""
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Resources />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
"""

MAIN_JSX = r"""
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/glass.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""

GLASS_CSS = r"""
:root {
  --primary: #1a94ff;
  --accent: #ffb703;
  --bg1: #020617;
  --bg2: #0f172a;
  --text-main: #f9fafb;
  --text-muted: #d1d5db;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
  background: radial-gradient(circle at top left, #22d3ee, #020617 40%, #1d3557 80%);
  color: var(--text-main);
}

.section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.glass-card {
  background: rgba(15, 23, 42, 0.55);
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.55);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.btn-primary {
  background: linear-gradient(135deg, #1a94ff, #4f46e5);
  color: var(--text-main);
  border-radius: 999px;
  padding: 0.7rem 1.5rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
}

.btn-primary:hover {
  opacity: 0.92;
}

.btn-outline {
  background: transparent;
  color: var(--text-main);
  border-radius: 999px;
  padding: 0.7rem 1.5rem;
  border: 1px solid rgba(226, 232, 240, 0.8);
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
}

.btn-outline:hover {
  background: rgba(15, 23, 42, 0.6);
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0.9),
    rgba(15, 23, 42, 0.4)
  );
  border-bottom: 1px solid rgba(148, 163, 184, 0.4);
}

.nav-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.7rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  display: flex;
  gap: 1.25rem;
  font-size: 0.9rem;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--text-main);
}

@media (max-width: 768px) {
  .nav-inner {
    flex-direction: column;
    gap: 0.6rem;
  }
}
"""

NAVBAR = r"""
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div style={{ fontWeight: 700, letterSpacing: "0.08em", fontSize: "0.95rem" }}>
          S. &amp; J. ASSOCIATES
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#team">Our Team</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
"""

HERO = r"""
function Hero() {
  return (
    <header className="section" id="home">
      <div
        className="glass-card"
        style={{
          padding: "3rem 2.2rem",
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "minmax(0,2fr) minmax(0,1.2fr)",
        }}
      >
        <div>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontSize: "0.78rem",
              color: "#bfdbfe",
            }}
          >
            S. &amp; J. Associates • Legal Services
          </p>
          <h1
            style={{
              fontSize: "2.4rem",
              lineHeight: 1.2,
              margin: "0.8rem 0 1rem",
            }}
          >
            Client‑focused, practical and result‑driven legal solutions.
          </h1>
          <p
            style={{
              color: "#e5e7eb",
              maxWidth: "32rem",
              fontSize: "0.98rem",
            }}
          >
            S. &amp; J. Associates is a client‑focused law firm delivering practical, ethical and
            result‑driven legal solutions. We assist individuals and businesses with clear advice,
            strong representation and reliable legal support in contentious and non‑contentious
            matters.
          </p>
          <div
            style={{
              marginTop: "1.8rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a href="#contact">
              <button className="btn-primary">Book a consultation</button>
            </a>
            <a href="#services">
              <button className="btn-outline">View core areas</button>
            </a>
          </div>
        </div>

        <div style={{ alignSelf: "center", justifySelf: "center" }}>
          <div
            className="glass-card"
            style={{
              padding: "1.7rem 1.5rem",
              borderRadius: "22px",
              width: "100%",
              maxWidth: "320px",
              background:
                "radial-gradient(circle at top, rgba(56,189,248,0.18), rgba(15,23,42,0.9))",
            }}
          >
            <p style={{ fontSize: "0.78rem", color: "#a5b4fc", marginBottom: "0.3rem" }}>
              Speak with our team
            </p>
            <p style={{ fontWeight: 600, fontSize: "1.05rem" }}>
              Professional. Practical. Reliable.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#e5e7eb", marginTop: "0.6rem" }}>
              Rituraj Sinha: +91 82003 80901
              <br />
              Swati Verma: +91 88004 13165
              <br />
              Abhishek Verma: +91 98710 12151
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
"""

SERVICES = r"""
const services = [
  {
    title: "Litigation",
    desc: "Comprehensive representation in civil and commercial litigation before courts and tribunals, from pre‑litigation strategy to final resolution.",
  },
  {
    title: "Corporate & Commercial Matters",
    desc: "Advisory and drafting support on commercial contracts, corporate transactions and day‑to‑day business legal needs.",
  },
  {
    title: "Arbitration",
    desc: "Assistance in domestic arbitration, including drafting of arbitration agreements, representation in arbitral proceedings and enforcement of awards.",
  },
  {
    title: "Data Privacy Compliance",
    desc: "Data privacy compliance support, policies and documentation for businesses seeking to align with applicable privacy regulations.",
  },
  {
    title: "Legal Documentation",
    desc: "Drafting and vetting of agreements, deeds, policies and other legal documentation tailored to your commercial and personal requirements.",
  },
  {
    title: "Family & Consumer Disputes",
    desc: "Representation in family law and consumer disputes, focused on practical outcomes and dignified resolution of conflicts.",
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <h2 style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>Core areas of practice</h2>
      <p
        style={{
          color: "#d1d5db",
          maxWidth: "40rem",
          fontSize: "0.95rem",
          marginBottom: "2rem",
        }}
      >
        S. &amp; J. Associates supports individuals and businesses across contentious and
        non‑contentious work, with a focus on clear advice and effective dispute resolution.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "1.5rem",
        }}
      >
        {services.map((s) => (
          <article
            key={s.title}
            className="glass-card"
            style={{ padding: "1.6rem 1.5rem", borderRadius: "16px" }}
          >
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.45rem" }}>{s.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
"""

TEAM = r"""
const team = [
  {
    name: "Adv. Rituraj Sinha",
    role: "Advocate",
    phone: "+91 82003 80901",
    spec: "Litigation and dispute resolution.",
  },
  {
    name: "Adv. Swati Verma",
    role: "Advocate",
    phone: "+91 88004 13165",
    spec: "Corporate, commercial and data privacy matters.",
  },
  {
    name: "Adv. Abhishek Verma",
    role: "Advocate",
    phone: "+91 98710 12151",
    spec: "Family law, consumer disputes and documentation.",
  },
];

function Team() {
  return (
    <section className="section" id="team">
      <h2 style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>Our lawyers</h2>
      <p
        style={{
          color: "#d1d5db",
          maxWidth: "40rem",
          fontSize: "0.95rem",
          marginBottom: "2rem",
        }}
      >
        The team at S. &amp; J. Associates combines experience across litigation, corporate and
        advisory work, enabling cohesive support on complex matters.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "1.5rem",
        }}
      >
        {team.map((m) => (
          <article
            key={m.name}
            className="glass-card"
            style={{ padding: "1.5rem", borderRadius: "16px" }}
          >
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(239,246,255,0.16), rgba(59,130,246,0.8))",
                marginBottom: "0.9rem",
              }}
            />
            <h3 style={{ fontSize: "1.05rem", marginBottom: "0.1rem" }}>{m.name}</h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#a5b4fc",
                marginBottom: "0.3rem",
              }}
            >
              {m.role}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#e5e7eb", marginBottom: "0.4rem" }}>
              {m.spec}
            </p>
            <p style={{ fontSize: "0.85rem", color: "#cbd5f5" }}>{m.phone}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;
"""

RESOURCES = r"""
function Resources() {
  return (
    <section className="section" id="resources">
      <h2 style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>Legal guides &amp; resources</h2>
      <p
        style={{
          color: "#d1d5db",
          maxWidth: "42rem",
          fontSize: "0.95rem",
          marginBottom: "2rem",
        }}
      >
        Brief guides and FAQs give clients context about common legal issues and when to seek
        professional assistance.
      </p>
      <div className="glass-card" style={{ padding: "1.7rem", borderRadius: "18px" }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "0.3rem" }}>
            When should I consult a lawyer?
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>
            You should consider consulting a lawyer when you receive court or government notices,
            sign significant contracts, face criminal allegations, or anticipate a dispute that may
            affect your rights or business.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "0.3rem" }}>
            What should I bring to my first meeting?
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>
            Carry copies of relevant agreements, notices, prior court orders and identification
            documents so your lawyer can quickly understand the facts and possible options.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resources;
"""

CONTACT = r"""
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
"""

FOOTER = r"""
function Footer() {
  return (
    <footer className="section" style={{ paddingTop: "2rem", paddingBottom: "2.5rem" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontSize: "0.85rem",
          color: "#9ca3af",
        }}
      >
        <span>© {new Date().getFullYear()} S. &amp; J. Associates. All rights reserved.</span>
        <span>
          Disclaimer: This website is for informational purposes only and does not constitute legal
          advice.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
"""

# ---------- write files ----------

write_file(SRC / "App.jsx", APP_JSX)
write_file(SRC / "main.jsx", MAIN_JSX)
write_file(STYLES / "glass.css", GLASS_CSS)

write_file(COMP / "Navbar.jsx", NAVBAR)
write_file(COMP / "Hero.jsx", HERO)
write_file(COMP / "Services.jsx", SERVICES)
write_file(COMP / "Team.jsx", TEAM)
write_file(COMP / "Resources.jsx", RESOURCES)
write_file(COMP / "Contact.jsx", CONTACT)
write_file(COMP / "Footer.jsx", FOOTER)

# ---------- cleanup unused defaults ----------

# Remove App.css if exists
app_css = SRC / "App.css"
if app_css.exists():
  app_css.unlink()
  print(f"Removed: {app_css.relative_to(ROOT)}")

# Remove default logo and assets/react.svg if they exist
assets_dir = SRC / "assets"
react_svg = assets_dir / "react.svg"
if react_svg.exists():
  react_svg.unlink()
  print(f"Removed: {react_svg.relative_to(ROOT)}")

# Remove assets dir if empty
if assets_dir.exists() and not any(assets_dir.iterdir()):
  assets_dir.rmdir()
  print(f"Removed empty dir: {assets_dir.relative_to(ROOT)}")

print("Done. Now run:  npm install  (if not done) and npm run dev")
