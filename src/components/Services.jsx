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
      <h2 style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>Core areas of practice</h2>
      <p
        style={{
          color: "#d1d5db",
          maxWidth: "40rem",
          fontSize: "0.95rem",
          marginBottom: "2rem",
        }}
      >
        S. &amp; J. Associates supports individuals and businesses across contentious and
        non‑contentious work, with a focus on clear advice and effective dispute resolution.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "1.5rem",
        }}
      >
        {services.map((s) => (
          <article
            key={s.title}
            className="glass-card"
            style={{ padding: "1.6rem 1.5rem", borderRadius: "16px" }}
          >
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.45rem" }}>{s.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
