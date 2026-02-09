const team = [
  {
    name: "Adv. Rituraj Sinha",
    role: "Advocate",
    phone: "+91 82003 80901",
    spec: "Litigation and dispute resolution.",
  },
  {
    name: "Adv. Swati Verma",
    role: "Advocate",
    phone: "+91 88004 13165",
    spec: "Corporate, commercial and data privacy matters.",
  },
  {
    name: "Adv. Abhishek Verma",
    role: "Advocate",
    phone: "+91 98710 12151",
    spec: "Family law, consumer disputes and documentation.",
  },
];

function Team() {
  return (
    <section className="section" id="team">
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>
        Our lawyers
      </h2>
      <p
        style={{
          color: '#a8a8a8',
          maxWidth: '45rem',
          fontSize: 'clamp(0.9rem, 2vw, 0.98rem)',
          marginBottom: '2.5rem',
          lineHeight: 1.6,
        }}
      >
        The team at S. &amp; J. Associates combines experience across litigation, corporate and
        advisory work, enabling cohesive support on complex matters.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.8rem',
        }}
      >
        {team.map((m) => (
          <article
            key={m.name}
            className="glass-card"
            style={{ padding: '1.8rem 1.6rem', borderRadius: '14px' }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(201,169,97,0.3), rgba(26,26,26,0.9))',
                marginBottom: '1.2rem',
                border: '2px solid rgba(201,169,97,0.5)',
              }}
            />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', fontFamily: 'Georgia, serif' }}>
              {m.name}
            </h3>
            <p
              style={{
                fontSize: '0.88rem',
                color: '#c9a961',
                marginBottom: '0.6rem',
                fontWeight: 600,
              }}
            >
              {m.role}
            </p>
            <p style={{ fontSize: '0.92rem', color: '#e5e7eb', marginBottom: '0.6rem', lineHeight: 1.5 }}>
              {m.spec}
            </p>
            <p style={{ fontSize: '0.88rem', color: '#a8a8a8' }}>{m.phone}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;
