function Hero() {
  return (
    <header className="section" id="home" style={{ paddingTop: '2rem' }}>
      <div
        className="glass-card"
        style={{
          padding: '3rem 2.5rem',
          display: 'grid',
          gap: '3rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        <div>
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.8rem',
              color: '#c9a961',
              marginBottom: '1rem',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 600,
            }}
          >
            S. &amp; J. Associates • Legal Services
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              lineHeight: 1.2,
              margin: '0 0 1.2rem',
              fontFamily: 'Georgia, serif',
            }}
          >
            Client‑focused, practical and result‑driven legal solutions.
          </h1>
          <p
            style={{
              color: '#e5e7eb',
              maxWidth: '38rem',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: 1.6,
            }}
          >
            S. &amp; J. Associates is a client‑focused law firm delivering practical, ethical and
            result‑driven legal solutions. We assist individuals and businesses with clear advice,
            strong representation and reliable legal support in contentious and non‑contentious
            matters.
          </p>
          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
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

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            className="glass-card"
            style={{
              padding: '2rem 1.8rem',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '350px',
              background: 'radial-gradient(circle at top, rgba(201,169,97,0.15), rgba(13,13,13,0.95))',
              border: '1px solid rgba(201,169,97,0.4)',
            }}
          >
            <p style={{ fontSize: '0.85rem', color: '#c9a961', marginBottom: '0.5rem', fontWeight: 600 }}>
              Speak with our team
            </p>
            <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem', color: '#f9fafb' }}>
              Professional. Practical. Reliable.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#e5e7eb', lineHeight: 1.8 }}>
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
