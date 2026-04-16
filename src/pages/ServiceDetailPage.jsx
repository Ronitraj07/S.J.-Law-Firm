import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { teamMembers } from '../data/team';

function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const attorneys = service.attorneys.map(s => teamMembers.find(m => m.slug === s)).filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{service.title} | S. &amp; J. Associates</title>
        <meta name="description" content={service.metaDescription} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `${service.title} — S. & J. Associates`,
          "description": service.shortDesc,
          "provider": {
            "@type": "LegalService",
            "name": "S. & J. Associates"
          }
        })}</script>
      </Helmet>

      <div style={{ background: 'var(--navy)', padding: 'clamp(2.5rem, 5vw, 4rem) 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/services" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '2rem' }}>
            &larr; All Practice Areas
          </Link>
          <p className="section-label" style={{ color: 'var(--gold)' }}>Practice Area</p>
          <h1 style={{ color: '#fff', marginBottom: '0.8rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>{service.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.75, fontSize: '0.95rem' }}>{service.shortDesc}</p>
        </div>
      </div>

      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Overview</h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>{service.fullDesc}</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>What We Cover</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {service.practicePoints.map(pt => (
                  <li key={pt} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.5 }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '0.45rem', display: 'inline-block' }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {attorneys.length > 0 && (
              <div className="glass-card" style={{ padding: '1.8rem' }}>
                <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Advocates in this Area</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {attorneys.map(m => (
                    <Link key={m.slug} to={`/team/${m.slug}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <img src={m.photo} alt={m.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #E5E7EB', flexShrink: 0 }} onError={e => { e.target.style.display = 'none'; }} />
                      <div>
                        <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.15rem' }}>{m.name}</p>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.yearsOfPractice} years of practice</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="glass-card" style={{ padding: '1.8rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', lineHeight: 1.65 }}>Have a matter in this area?</p>
              <Link to="/contact"><button className="btn-primary" style={{ width: '100%' }}>Book a Consultation</button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetailPage;
