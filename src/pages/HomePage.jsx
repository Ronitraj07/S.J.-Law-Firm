import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AccreditationsBar from '../components/AccreditationsBar';
import { services } from '../data/services';
import { teamMembers } from '../data/team';
import heroBg from '../assets/images/hero-bg.jpg';

function StatCounter({ value, label }) {
  return (
    <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
      <p style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        color: 'var(--gold)',
        fontFamily: 'var(--font-heading)',
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>{value}</p>
      <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</p>
    </div>
  );
}

function HomePage() {
  const combinedYears = teamMembers.reduce((sum, m) => sum + m.yearsOfPractice, 0);

  return (
    <>
      <Helmet>
        <title>S. &amp; J. Associates — Legal Services</title>
        <meta name="description" content="S. & J. Associates is a client-focused law firm offering practical, ethical legal solutions in litigation, corporate law, arbitration, data privacy, documentation and family matters." />
        <meta property="og:title" content="S. & J. Associates — Legal Services" />
        <meta property="og:description" content="Practical, ethical and result-driven legal solutions across litigation, corporate, arbitration and family law." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />
      <AccreditationsBar />

      {/* Stats Counter */}
      <section style={{ background: 'var(--navy)', borderBottom: '1px solid rgba(201,161,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <StatCounter value={`${combinedYears}+`} label="Combined Years of Practice" />
          <StatCounter value={`${services.length}`} label="Practice Areas" />
          <StatCounter value="3" label="Courts of Enrollment" />
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section">
        <div className="animate-fadeInUp">
          <p className="section-label">What We Do</p>
          <h2 style={{ marginBottom: '0.5rem' }}>Practice Areas</h2>
          <div className="divider" />
          <p className="section-subtitle">
            We assist individuals and businesses across a focused range of practice areas,
            providing clear advice and reliable representation.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <article
                className={`glass-card animate-scaleIn delay-${(i % 3 + 1) * 100}`}
                style={{ padding: '1.8rem', height: '100%', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ marginBottom: '0.6rem', fontSize: '1.05rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{s.shortDesc}</p>
                <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 600 }}>Learn more &rarr;</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p className="section-label" style={{ color: 'var(--gold)' }}>How We Work</p>
          <h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>Our Approach</h2>
          <div className="divider" />
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '3rem', maxWidth: '560px', lineHeight: 1.75, fontSize: '0.95rem' }}>
            Every matter we take on follows a consistent process designed to keep you informed and in control.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Initial Consultation', desc: 'We listen to your matter in full, ask clarifying questions and give you an honest initial assessment of your legal position.' },
              { step: '02', title: 'Written Case Assessment', desc: 'You receive a clear written summary of the legal position, options available and our recommended course of action.' },
              { step: '03', title: 'Engagement & Strategy', desc: 'We agree on a fee structure upfront, then execute the agreed strategy with regular updates at every stage.' },
            ].map(item => (
              <div key={item.step} style={{ borderTop: '2px solid rgba(201,161,74,0.4)', paddingTop: '1.5rem' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '0.6rem' }}>{item.step}</p>
                <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section">
        <div className="animate-fadeInUp">
          <p className="section-label">Our People</p>
          <h2 style={{ marginBottom: '0.5rem' }}>Meet the Team</h2>
          <div className="divider" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.8rem' }}>
          {teamMembers.map((m, i) => (
            <Link key={m.slug} to={`/team/${m.slug}`} style={{ textDecoration: 'none' }}>
              <article
                className={`glass-card animate-scaleIn delay-${(i + 1) * 100}`}
                style={{ padding: '2rem 1.8rem', textAlign: 'center', cursor: 'pointer' }}
              >
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  style={{ width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', border: '2.5px solid #E5E7EB', marginBottom: '1rem' }}
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <h3 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>{m.name}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{m.role}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{m.practiceAreas.slice(0, 2).join(' · ')}</p>
                <p style={{ marginTop: '0.8rem', fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600 }}>View profile &rarr;</p>
              </article>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link
            to="/team"
            className="btn-outline"
            style={{ textDecoration: 'none' }}
          >
            View All Advocates
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(3rem, 6vw, 5rem) 2rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(26,42,68,0.97) 0%, rgba(26,42,68,1) 100%)',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={heroBg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.06 }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <p className="section-label" style={{ color: 'var(--gold)' }}>Get in Touch</p>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Have a legal matter to discuss?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.75, fontSize: '0.95rem' }}>
            We offer an initial consultation to help you understand your legal position before you commit to any course of action.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
