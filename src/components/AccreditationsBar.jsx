function AccreditationsBar() {
  const accreditations = [
    { label: 'Bar Council of India', abbr: 'BCI' },
    { label: 'Bar Council of Gujarat', abbr: 'BCG' },
    { label: 'Bar Council of Delhi', abbr: 'BCD' },
    { label: 'Gujarat High Court', abbr: 'GHC' },
    { label: 'Delhi High Court', abbr: 'DHC' },
  ];

  return (
    <section
      style={{
        background: 'var(--navy)',
        borderTop: '1px solid rgba(201,161,74,0.15)',
        borderBottom: '1px solid rgba(201,161,74,0.15)',
        padding: '1.2rem 2rem',
        overflow: 'hidden',
      }}
      aria-label="Accreditations and affiliations"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginRight: '0.5rem', whiteSpace: 'nowrap' }}>
            Registered with
          </span>
          {accreditations.map((item, i) => (
            <span key={item.abbr} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
              }}>
                {item.label}
              </span>
              {i < accreditations.length - 1 && (
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(201,161,74,0.4)', display: 'inline-block' }} />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccreditationsBar;
