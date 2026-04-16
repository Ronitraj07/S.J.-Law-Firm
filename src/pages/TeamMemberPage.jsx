import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { teamMembers } from '../data/team';

function TeamMemberPage() {
  const { slug } = useParams();
  const member = teamMembers.find(m => m.slug === slug);

  if (!member) return <Navigate to="/team" replace />;

  return (
    <>
      <Helmet>
        <title>{member.name} | S. &amp; J. Associates</title>
        <meta name="description" content={`${member.name} — ${member.practiceAreas.join(', ')}. ${member.barCouncil.name}, Enrolment No. ${member.barCouncil.enrollmentNumber}.`} />
      </Helmet>

      {/* Page Header */}
      <div style={{ background: 'var(--navy)', padding: 'clamp(2.5rem, 5vw, 4rem) 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/team" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '2rem' }}>
            &larr; Back to Team
          </Link>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(201,161,74,0.5)', flexShrink: 0 }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Advocate</p>
              <h1 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>{member.name}</h1>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem' }}>
                {member.yearsOfPractice} years of practice &nbsp;&bull;&nbsp; {member.barCouncil.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Bio */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>About</h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{member.bio}</p>
            </div>

            {/* Practice Areas */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Areas of Practice</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {member.practiceAreas.map(area => (
                  <li key={area} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, display: 'inline-block' }} />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Education */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Education</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {member.education.map((edu, i) => (
                  <div key={i}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{edu.degree}</p>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{edu.institution}</p>
                    {edu.year !== 'XXXX' && <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{edu.year}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Bar Enrolment */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Bar Enrolment</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>{member.barCouncil.name}</p>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Enrolment No. {member.barCouncil.enrollmentNumber}</p>
            </div>

            {/* Courts */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Practices Before</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {member.courts.map(court => (
                  <li key={court} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, display: 'inline-block' }} />
                    {court}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Get in Touch</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{member.phone}</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>{member.email}</p>
              <Link to="/contact"><button className="btn-primary" style={{ width: '100%' }}>Book a Consultation</button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamMemberPage;
