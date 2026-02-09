import heroBg from '../assets/images/hero-bg.jpg';  // ← Add this line at the very top

function Hero() {
  return (
    <header className="section" id="home" style={{ paddingTop: '2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${heroBg})`,  // ← Use the imported variable
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
          filter: 'grayscale(100%)'
        }} />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.92), rgba(26,26,26,0.88), rgba(0,0,0,0.90))'
        }} />
      </div>

      {/* Animated Floating Legal Icons */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        fontSize: '80px',
        opacity: 0.06,
        animation: 'float 8s ease-in-out infinite',
        pointerEvents: 'none'
      }}>
        ⚖️
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '8%',
        fontSize: '60px',
        opacity: 0.05,
        animation: 'float 10s ease-in-out infinite 2s',
        pointerEvents: 'none'
      }}>
        🏛️
      </div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '12%',
        fontSize: '50px',
        opacity: 0.04,
        animation: 'float 12s ease-in-out infinite 4s',
        pointerEvents: 'none'
      }}>
        📚
      </div>

      <div style={{
        position: 'absolute',
        top: '30%',
        right: '15%',
        fontSize: '45px',
        opacity: 0.04,
        animation: 'float 11s ease-in-out infinite 3s',
        pointerEvents: 'none'
      }}>
        📜
      </div>
      
      {/* Main Content */}
      <div
        className="glass-card animate-fadeInUp"
        style={{
          padding: '3rem 2.5rem',
          display: 'grid',
          gap: '3rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        <div className="animate-slideInLeft">
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
            ⚖️ S. &amp; J. Associates • Legal Services
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

        <div className="animate-slideInRight" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              📞 Speak with our team
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
