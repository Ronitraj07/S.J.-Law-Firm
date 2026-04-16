import { Link } from 'react-router-dom';
import heroBg from '../assets/images/hero-bg.jpg';

function Hero() {
  return (
    <header style={{ position: 'relative', overflow: 'hidden' }}>
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
            opacity: 0.12,
            filter: 'grayscale(40%)',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(26,42,68,0.92) 0%, rgba(26,42,68,0.97) 100%)',
        }} />
      </div>

      <div className="section" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div style={{
          display: 'grid',
          gap: '3.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
        }}>
          <div className="animate-slideInLeft">
            <p className="section-label" style={{ color: 'var(--gold)' }}>S. &amp; J. Associates • Legal Services</p>
            <h1 style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>
              Client&#8209;focused, practical &amp; result&#8209;driven legal solutions.
            </h1>
            <div className="divider" />
            <p style={{
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '36rem',
              fontSize: 'clamp(0.92rem, 2vw, 1.02rem)',
              lineHeight: 1.75,
            }}>
              We assist individuals and businesses with clear advice, strong representation and
              reliable legal support in contentious and non&#8209;contentious matters.
            </p>
            <div style={{ marginTop: '2.2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                Book a Consultation
              </Link>
              <Link to="/services" className="btn-outline" style={{ textDecoration: 'none', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)' }}>
                Our Practice Areas
              </Link>
            </div>
          </div>

          <div className="animate-slideInRight" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              padding: '2.2rem 2rem',
              width: '100%',
              maxWidth: '360px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(16px)',
            }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--gold)', marginBottom: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
                Speak with our team
              </p>
              <p style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: '1.2rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                Professional. Practical. Reliable.
              </p>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 2 }}>
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
