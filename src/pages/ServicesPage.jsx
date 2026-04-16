import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { teamMembers } from '../data/team';

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Practice Areas | S. &amp; J. Associates</title>
        <meta name="description" content="S. & J. Associates offers legal services across litigation, corporate law, arbitration, data privacy compliance, legal documentation and family & consumer disputes." />
      </Helmet>

      <div style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <p className="section-label" style={{ color: 'var(--gold)' }}>What We Do</p>
        <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Practice Areas</h1>
        <div className="divider" style={{ margin: '0 auto 1.2rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75, fontSize: '0.95rem' }}>
          We assist individuals and businesses across a focused range of legal matters, providing clear advice and reliable representation.
        </p>
      </div>

      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
          {services.map((s, i) => (
            <Link key={s.slug} to={`/services/${s.slug}`} style={{ textDecoration: 'none' }}>
              <article
                className={`glass-card animate-scaleIn delay-${(i % 3 + 1) * 100}`}
                style={{ padding: '2rem', height: '100%', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h2 style={{ fontSize: '1.05rem', marginBottom: '0.7rem' }}>{s.title}</h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.2rem' }}>{s.shortDesc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                  {s.practicePoints.slice(0, 3).map(pt => (
                    <span key={pt} style={{ fontSize: '0.75rem', background: 'rgba(201,161,74,0.1)', color: 'var(--gold)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(201,161,74,0.2)' }}>
                      {pt}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {s.attorneys.map(slug => {
                    const m = teamMembers.find(t => t.slug === slug);
                    return m ? (
                      <span key={slug} style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.name}</span>
                    ) : null;
                  })}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 600 }}>View practice area &rarr;</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
