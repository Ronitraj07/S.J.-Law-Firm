import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { teamMembers } from '../data/team';

const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  width: '100%',
  padding: '0.6rem 1.2rem',
  borderRadius: '4px',
  fontSize: '0.88rem',
  fontWeight: 600,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s, border-color 0.2s',
};

function TeamMemberPage() {
  const { slug } = useParams();
  const member = teamMembers.find(m => m.slug === slug);

  if (!member) return <Navigate to="/team" replace />;

  const phoneRaw = member.phone.replace(/\s+/g, '');
  const waNumber = phoneRaw.replace('+', '');
  const waMessage = encodeURIComponent(`Hello ${member.name}, I would like to schedule a consultation.`);
  const waHref = `https://wa.me/${waNumber}?text=${waMessage}`;
  const callHref = `tel:${phoneRaw}`;

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
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
                {member.yearsOfPractice} years of practice &nbsp;&bull;&nbsp; {member.barCouncil.name}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={callHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 1rem', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.82rem', textDecoration: 'none' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                  Call
                </a>
                <a href={waHref} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 1rem', borderRadius: '4px', background: '#25D366', border: '1px solid #25D366', color: '#fff', fontSize: '0.82rem', textDecoration: 'none' }}>
                  <svg width="14" height="14" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C8.82 3 3 8.82 3 16c0 2.36.63 4.58 1.73 6.5L3 29l6.72-1.7A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm5.5 15.9c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H12c-.17 0-.45.07-.69.32-.24.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.08 1.51-.62 1.72-1.22.21-.6.21-1.11.15-1.22-.07-.1-.27-.17-.57-.32Z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>About</h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{member.bio}</p>
            </div>
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
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Bar Enrolment</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>{member.barCouncil.name}</p>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Enrolment No. {member.barCouncil.enrollmentNumber}</p>
            </div>
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
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.6rem' }}>Get in Touch</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>{member.phone}</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>{member.email}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href={callHref} style={{ ...btnBase, background: 'transparent', border: '1px solid var(--navy)', color: 'var(--navy)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                  Call Now
                </a>
                <a href={waHref} target="_blank" rel="noopener noreferrer" style={{ ...btnBase, background: '#25D366', border: '1px solid #25D366', color: '#fff' }}>
                  <svg width="14" height="14" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C8.82 3 3 8.82 3 16c0 2.36.63 4.58 1.73 6.5L3 29l6.72-1.7A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm5.5 15.9c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H12c-.17 0-.45.07-.69.32-.24.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.08 1.51-.62 1.72-1.22.21-.6.21-1.11.15-1.22-.07-.1-.27-.17-.57-.32Z"/></svg>
                  WhatsApp
                </a>
                <Link to="/contact" style={{ ...btnBase, background: 'var(--navy)', color: '#fff', border: '1px solid var(--navy)' }}>Book a Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamMemberPage;
