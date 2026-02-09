function Resources() {
  return (
    <section className="section" id="resources">
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>
        Legal guides &amp; resources
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
        Brief guides and FAQs give clients context about common legal issues and when to seek
        professional assistance.
      </p>
      <div className="glass-card" style={{ padding: '2rem 1.8rem', borderRadius: '16px' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#c9a961', fontFamily: 'Georgia, serif' }}>
            When should I consult a lawyer?
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#e5e7eb', lineHeight: 1.6 }}>
            You should consider consulting a lawyer when you receive court or government notices,
            sign significant contracts, face criminal allegations, or anticipate a dispute that may
            affect your rights or business.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#c9a961', fontFamily: 'Georgia, serif' }}>
            What should I bring to my first meeting?
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#e5e7eb', lineHeight: 1.6 }}>
            Carry copies of relevant agreements, notices, prior court orders and identification
            documents so your lawyer can quickly understand the facts and possible options.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resources;
