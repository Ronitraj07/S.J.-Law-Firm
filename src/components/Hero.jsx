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
