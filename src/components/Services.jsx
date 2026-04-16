const services = [
  {
    title: "Litigation",
    desc: "Comprehensive representation in civil and commercial litigation before courts and tribunals, from pre‑litigation strategy to final resolution.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Corporate & Commercial",
    desc: "Advisory and drafting support on commercial contracts, corporate transactions and day‑to‑day business legal needs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
  },
  {
    title: "Arbitration",
    desc: "Assistance in domestic arbitration, including drafting of arbitration agreements, representation in arbitral proceedings and enforcement of awards.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
  },
  {
    title: "Data Privacy Compliance",
    desc: "Data privacy compliance support, policies and documentation for businesses seeking to align with applicable privacy regulations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: "Legal Documentation",
    desc: "Drafting and vetting of agreements, deeds, policies and other legal documentation tailored to your commercial and personal requirements.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    title: "Family & Consumer Disputes",
    desc: "Representation in family law and consumer disputes, focused on practical outcomes and dignified resolution of conflicts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="animate-fadeInUp">
        <p className="section-label">What We Do</p>
        <h2 style={{ marginBottom: '0.5rem' }}>Core Areas of Practice</h2>
        <div className="divider" />
        <p className="section-subtitle">
          S. &amp; J. Associates supports individuals and businesses across contentious and
          non‑contentious work, with a focus on clear advice and effective dispute resolution.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {services.map((s, i) => (
          <article
            key={s.title}
            className={`glass-card animate-scaleIn delay-${(i + 1) * 100}`}
            style={{ padding: '2rem 1.8rem' }}
          >
            <div style={{
              color: 'var(--gold)',
              marginBottom: '1rem',
            }}>
              {s.icon}
            </div>
            <h3 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>{s.title}</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
