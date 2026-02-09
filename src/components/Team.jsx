const team = [
  {
    name: "Adv. Rituraj Sinha",
    role: "Advocate",
    phone: "+91 82003 80901",
    spec: "Criminal and Motor accident claim specialist.",
    photo: "/team/rituraj.jpg" // Your photo path
  },
  {
    name: "Adv. Swati Verma",
    role: "Advocate",
    phone: "+91 88004 13165",
    spec: "Family law, consumer disputes and documentation.",
    photo: "/team/swati.jpg" // Your photo path
  },
  {
    name: "Adv. Abhishek Verma",
    role: "Advocate",
    phone: "+91 98710 12151",
    spec: "Corporate, commercial and data privacy matters. ",
    photo: "/team/abhishek.jpg" // Your photo path
  },
];

function Team() {
  return (
    <section className="section" id="team">
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>
        Our Team
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
            {/* THIS IS WHERE THE HOVER EFFECT IS */}
            {m.photo ? (
              <img
                src={m.photo}
                alt={m.name}
                style={{
                  width: '90px',                    // Size of photo
                  height: '90px',                   // Size of photo
                  borderRadius: '50%',              // Makes it circular
                  objectFit: 'cover',               // Crops photo to fit circle
                  border: '3px solid rgba(201,169,97,0.5)',  // Gold border
                  boxShadow: '0 4px 12px rgba(0,0,0,0.6)',   // Initial shadow
                  marginBottom: '1.2rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',  // Smooth animation
                  cursor: 'pointer'
                }}
                // WHEN MOUSE ENTERS (hovers over photo)
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';  // Grow by 10%
                  e.target.style.boxShadow = '0 6px 20px rgba(201,169,97,0.4)';  // Gold glow
                }}
                // WHEN MOUSE LEAVES (moves away from photo)
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';  // Back to normal size
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.6)';  // Back to normal shadow
                }}
              />
            ) : (
              // Fallback if no photo exists
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(201,169,97,0.3), rgba(26,26,26,0.9))',
                  marginBottom: '1.2rem',
                  border: '2px solid rgba(201,169,97,0.5)',
                }}
              />
            )}
            
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
