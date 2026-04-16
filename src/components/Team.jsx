const team = [
  {
    name: "Adv. Rituraj Sinha",
    role: "Advocate",
    phone: "+91 82003 80901",
    spec: "Criminal and Motor accident claim specialist.",
    photo: "/team/rituraj.jpg",
  },
  {
    name: "Adv. Swati Verma",
    role: "Advocate",
    phone: "+91 88004 13165",
    spec: "Family law, consumer disputes and documentation.",
    photo: "/team/swati.jpg",
  },
  {
    name: "Adv. Abhishek Verma",
    role: "Advocate",
    phone: "+91 98710 12151",
    spec: "Corporate, commercial and data privacy matters.",
    photo: "/team/abhishek.jpg",
  },
];

function Team() {
  return (
    <section className="section" id="team">
      <div className="animate-fadeInUp">
        <p className="section-label">Our People</p>
        <h2 style={{ marginBottom: '0.5rem' }}>Meet the Team</h2>
        <div className="divider" />
        <p className="section-subtitle">
          The team at S. &amp; J. Associates combines experience across litigation, corporate and
          advisory work, enabling cohesive support on complex matters.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.8rem',
      }}>
        {team.map((m, i) => (
          <article
            key={m.name}
            className={`glass-card animate-scaleIn delay-${(i + 1) * 100}`}
            style={{ padding: '2rem 1.8rem', textAlign: 'center' }}
          >
            {m.photo ? (
              <img
                src={m.photo}
                alt={m.name}
                loading="lazy"
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2.5px solid #E5E7EB',
                  marginBottom: '1.2rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.08)';
                  e.target.style.boxShadow = '0 8px 24px rgba(201,161,74,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            ) : (
              <div style={{
                width: '96px',
                height: '96px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold-dim), var(--bg-light))',
                margin: '0 auto 1.2rem',
                border: '2px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'var(--navy)',
                fontFamily: 'var(--font-heading)',
              }}>
                {m.name.charAt(5)}
              </div>
            )}

            <h3 style={{ marginBottom: '0.25rem' }}>{m.name}</h3>
            <p style={{
              fontSize: '0.82rem',
              color: 'var(--gold)',
              marginBottom: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              {m.role}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.6rem', lineHeight: 1.6 }}>
              {m.spec}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{m.phone}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;
