const services = [
  {
    title: "Litigation",
    desc: "Comprehensive representation in civil and commercial litigation before courts and tribunals, from pre‑litigation strategy to final resolution.",
  },
  {
    title: "Corporate & Commercial Matters",
    desc: "Advisory and drafting support on commercial contracts, corporate transactions and day‑to‑day business legal needs.",
  },
  {
    title: "Arbitration",
    desc: "Assistance in domestic arbitration, including drafting of arbitration agreements, representation in arbitral proceedings and enforcement of awards.",
  },
  {
    title: "Data Privacy Compliance",
    desc: "Data privacy compliance support, policies and documentation for businesses seeking to align with applicable privacy regulations.",
  },
  {
    title: "Legal Documentation",
    desc: "Drafting and vetting of agreements, deeds, policies and other legal documentation tailored to your commercial and personal requirements.",
  },
  {
    title: "Family & Consumer Disputes",
    desc: "Representation in family law and consumer disputes, focused on practical outcomes and dignified resolution of conflicts.",
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>
        Core areas of practice
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
        {services.map((s) => (
          <article
            key={s.title}
            className="glass-card"
            style={{ padding: '1.8rem 1.6rem', borderRadius: '14px' }}
          >
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
