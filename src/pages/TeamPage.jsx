import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/team';

function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team | S. &amp; J. Associates</title>
        <meta name="description" content="Meet the advocates at S. & J. Associates — experienced in litigation, corporate law, arbitration, data privacy, family law and consumer disputes." />
      </Helmet>

      {/* Page Header */}
      <div style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <p className="section-label" style={{ color: 'var(--gold)' }}>Our People</p>
        <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Meet the Team</h1>
        <div className="divider" style={{ margin: '0 auto 1.2rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75, fontSize: '0.95rem' }}>
          The team at S. &amp; J. Associates combines experience across litigation, corporate and advisory work,
          enabling cohesive support on complex matters.
        </p>
      </div>

      {/* Team Grid */}
      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {teamMembers.map((m, i) => (
            <Link key={m.slug} to={`/team/${m.slug}`} style={{ textDecoration: 'none' }}>
              <article
                className={`glass-card animate-scaleIn delay-${(i + 1) * 100}`}
                style={{ padding: '2.2rem 1.8rem', textAlign: 'center', cursor: 'pointer', height: '100%' }}
              >
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '2.5px solid #E5E7EB', marginBottom: '1.2rem' }}
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <h2 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{m.name}</h2>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>{m.role}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  {m.practiceAreas.join(' · ')}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  {m.barCouncil.name}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600, marginTop: '1rem' }}>View full profile &rarr;</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default TeamPage;
