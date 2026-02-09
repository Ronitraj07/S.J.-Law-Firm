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
      <h2 style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>Our lawyers</h2>
      <p
        style={{
          color: "#d1d5db",
          maxWidth: "40rem",
          fontSize: "0.95rem",
          marginBottom: "2rem",
        }}
      >
        The team at S. &amp; J. Associates combines experience across litigation, corporate and
        advisory work, enabling cohesive support on complex matters.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "1.5rem",
        }}
      >
        {team.map((m) => (
          <article
            key={m.name}
            className="glass-card"
            style={{ padding: "1.5rem", borderRadius: "16px" }}
          >
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(239,246,255,0.16), rgba(59,130,246,0.8))",
                marginBottom: "0.9rem",
              }}
            />
            <h3 style={{ fontSize: "1.05rem", marginBottom: "0.1rem" }}>{m.name}</h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#a5b4fc",
                marginBottom: "0.3rem",
              }}
            >
              {m.role}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#e5e7eb", marginBottom: "0.4rem" }}>
              {m.spec}
            </p>
            <p style={{ fontSize: "0.85rem", color: "#cbd5f5" }}>{m.phone}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;
