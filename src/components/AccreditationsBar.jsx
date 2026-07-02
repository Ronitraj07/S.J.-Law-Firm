export default function AccreditationsBar() {
  const items = [
    'Bar Council of Gujarat',
    'Gujarat High Court',
    'District Courts — Vadodara',
    'Arbitration & Conciliation',
    'NCLT & Consumer Forums',
  ];

  return (
    <div
      style={{
        background: 'var(--bg-light)',
        borderBottom: '1px solid rgba(30,45,61,0.08)',
        overflowX: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          marginInline: 'auto',
          padding: '0.7rem clamp(1.25rem, 4vw, 2rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {items.map((item, i) => (
          <span
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              whiteSpace: 'nowrap',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              color: 'var(--text-muted)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              flexShrink: 0,
            }}
          >
            {i > 0 && (
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.5, flexShrink: 0 }} />
            )}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
