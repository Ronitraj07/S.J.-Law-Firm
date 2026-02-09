const services = [
  {
    title: "Litigation",
    desc: "Comprehensive representation in civil and commercial litigation before courts and tribunals, from pre‑litigation strategy to final resolution.",
    icon: "⚖️"
  },
  {
    title: "Corporate & Commercial Matters",
    desc: "Advisory and drafting support on commercial contracts, corporate transactions and day‑to‑day business legal needs.",
    icon: "🏛️"
  },
  {
    title: "Arbitration",
    desc: "Assistance in domestic arbitration, including drafting of arbitration agreements, representation in arbitral proceedings and enforcement of awards.",
    icon: "🤝"
  },
  {
    title: "Data Privacy Compliance",
    desc: "Data privacy compliance support, policies and documentation for businesses seeking to align with applicable privacy regulations.",
    icon: "🔒"
  },
  {
    title: "Legal Documentation",
    desc: "Drafting and vetting of agreements, deeds, policies and other legal documentation tailored to your commercial and personal requirements.",
    icon: "📄"
  },
  {
    title: "Family & Consumer Disputes",
    desc: "Representation in family law and consumer disputes, focused on practical outcomes and dignified resolution of conflicts.",
    icon: "👨‍👩‍👧"
  },
];

function Services() {
  return (
    <section className="section" id="services" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/services-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Parallax effect
          opacity: 0.08,
          filter: 'grayscale(100%)'
        }} />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.85), rgba(13,13,13,0.90))'
        }} />
      </div>

      {/* Floating decorative icons */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        fontSize: '60px',
        opacity: 0.04,
        animation: 'float 10s ease-in-out infinite',
        pointerEvents: 'none'
      }}>
        📚
      </div>

      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        fontSize: '70px',
        opacity: 0.03,
        animation: 'float 12s ease-in-out infinite 3s',
        pointerEvents: 'none'
      }}>
        🏛️
      </div>

      <h2 className="animate-fadeInUp" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>
        Core areas of practice
      </h2>
      <p
        className="animate-fadeInUp delay-100"
        style={{
          color: '#a8a8a8',
          maxWidth: '45rem',
          fontSize: 'clamp(0.9rem, 2vw, 0.98rem)',
          marginBottom: '2.5rem',
          lineHeight: 1.6,
        }}
      >
        S. &amp; J. Associates supports individuals and businesses across contentious and
        non‑contentious work, with a focus on clear advice and effective dispute resolution.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {services.map((s, index) => (
          <article
            key={s.title}
            className={`glass-card animate-scaleIn delay-${(index + 1) * 100}`}
            style={{ 
              padding: '1.8rem 1.6rem', 
              borderRadius: '14px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'rgba(201,169,97,0.6)';
              e.currentTarget.querySelector('.service-icon').style.transform = 'scale(1.1) rotate(5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(201,169,97,0.35)';
              e.currentTarget.querySelector('.service-icon').style.transform = 'scale(1) rotate(0deg)';
            }}
          >
            <div 
              className="service-icon"
              style={{ 
                fontSize: '2.5rem', 
                marginBottom: '0.8rem',
                opacity: 0.7,
                transition: 'transform 0.3s ease'
              }}
            >
              {s.icon}
            </div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: '#c9a961', fontFamily: 'Georgia, serif' }}>
              {s.title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#e5e7eb', lineHeight: 1.6 }}>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
