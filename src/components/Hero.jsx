import heroBg from '../assets/images/hero-bg.jpg';

function Hero() {
  return (
    <header id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Full-bleed background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.18,
            filter: 'grayscale(60%) brightness(0.6)',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(6,8,10,0.88) 0%, rgba(6,8,10,0.96) 100%)',
        }} />
      </div>

      <div className="section" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div style={{
          display: 'grid',
          gap: '3.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
        }}>
          {/* Left content */}
          <div className="animate-slideInLeft">
            <p className="section-label">S. &amp; J. Associates • Legal Services</p>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Client‑focused, practical &amp; result‑driven legal solutions.
            </h1>
            <div className="divider" />
            <p style={{
              color: 'var(--text-secondary)',
              maxWidth: '36rem',
              fontSize: 'clamp(0.92rem, 2vw, 1.02rem)',
              lineHeight: 1.75,
            }}>
              We assist individuals and businesses with clear advice, strong representation and
              reliable legal support in contentious and non‑contentious matters.
            </p>
            <div style={{ marginTop: '2.2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact"><button className="btn-primary">Book a Consultation</button></a>
              <a href="#services"><button className="btn-outline">Our Practice Areas</button></a>
            </div>
          </div>

          {/* Right card */}
          <div className="animate-slideInRight" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{
              padding: '2.2rem 2rem',
              width: '100%',
              maxWidth: '360px',
              background: 'radial-gradient(ellipse at top left, rgba(201,169,97,0.08), var(--bg-card))',
            }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--gold)', marginBottom: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
                Speak with our team
              </p>
              <p style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: '1.2rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                Professional. Practical. Reliable.
              </p>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 2 }}>
                <p>Rituraj Sinha — +91 82003 80901</p>
                <p>Swati Verma — +91 88004 13165</p>
                <p>Abhishek Verma — +91 98710 12151</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
