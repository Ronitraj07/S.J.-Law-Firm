import { Link } from 'react-router-dom';
import heroBg from '../assets/images/hero-bg.jpg';

const AREAS = [
  'Civil & Commercial Litigation',
  'Corporate & Commercial Law',
  'Arbitration',
  'Data Privacy & Compliance',
  'Legal Documentation',
  'Family & Consumer Disputes',
];

function Hero() {
  return (
    <header style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
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
          background: 'linear-gradient(180deg, rgba(30,45,61,0.93) 0%, rgba(30,45,61,0.98) 100%)',
        }} />
      </div>

      <div className="section" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div style={{
          display: 'grid',
          gap: '3.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
        }}>

          {/* Left — headline + CTAs */}
          <div className="animate-slideInLeft">
            <p className="section-label" style={{ color: 'var(--gold)' }}>S. &amp; J. Associates &bull; Vadodara</p>
            <h1 style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>
              Client&#8209;focused, practical &amp; result&#8209;driven legal solutions.
            </h1>
            <div className="divider" />
            <p style={{
              color: 'rgba(255,255,255,0.70)',
              maxWidth: '36rem',
              fontSize: 'clamp(0.92rem, 2vw, 1.02rem)',
              lineHeight: 1.8,
            }}>
              We assist individuals and businesses with clear advice, strong representation and
              reliable legal support in contentious and non&#8209;contentious matters.
            </p>
            <div style={{ marginTop: '2.2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                Book a Consultation
              </Link>
              <Link
                to="/services"
                className="btn-outline"
                style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.35)' }}
              >
                Our Practice Areas
              </Link>
            </div>
          </div>

          {/* Right — practice areas card */}
          <div className="animate-slideInRight" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              padding: '2rem 2rem 1.8rem',
              width: '100%',
              maxWidth: '360px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(18px)',
            }}>
              <p style={{
                fontSize: '0.68rem',
                color: 'var(--gold)',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(201,161,74,0.25)',
              }}>
                Practice Areas
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
                {AREAS.map((area, i) => (
                  <li
                    key={area}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.62rem 0',
                      borderBottom: i < AREAS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                      color: 'rgba(255,255,255,0.78)',
                      fontSize: '0.88rem',
                      lineHeight: 1.4,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <span style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'var(--gold)',
                      flexShrink: 0,
                      opacity: 0.8,
                    }} />
                    {area}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                style={{
                  display: 'block',
                  marginTop: '1.2rem',
                  fontSize: '0.78rem',
                  color: 'var(--gold)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                }}
              >
                View all practice areas &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Hero;
