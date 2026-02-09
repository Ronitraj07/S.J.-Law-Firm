function Resources() {
  return (
    <section className="section" id="resources">
      <h2 style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>Legal guides &amp; resources</h2>
      <p
        style={{
          color: "#d1d5db",
          maxWidth: "42rem",
          fontSize: "0.95rem",
          marginBottom: "2rem",
        }}
      >
        Brief guides and FAQs give clients context about common legal issues and when to seek
        professional assistance.
      </p>
      <div className="glass-card" style={{ padding: "1.7rem", borderRadius: "18px" }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "0.3rem" }}>
            When should I consult a lawyer?
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>
            You should consider consulting a lawyer when you receive court or government notices,
            sign significant contracts, face criminal allegations, or anticipate a dispute that may
            affect your rights or business.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "0.3rem" }}>
            What should I bring to my first meeting?
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>
            Carry copies of relevant agreements, notices, prior court orders and identification
            documents so your lawyer can quickly understand the facts and possible options.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resources;
