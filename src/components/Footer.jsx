function Footer() {
  return (
    <footer className="section" style={{
      paddingTop: '3rem',
      paddingBottom: '3rem',
      borderTop: '1px solid var(--gold-border)',
      marginTop: '2rem',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', textAlign: 'center' }}>
        <span style={{
          fontWeight: 700,
          letterSpacing: '0.12em',
          fontSize: '0.9rem',
          color: 'var(--gold)',
          fontFamily: 'var(--font-heading)',
          textTransform: 'uppercase',
        }}>
          S. &amp; J. Associates
        </span>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '500px' }}>
          Client-focused law firm delivering practical, ethical and result-driven legal solutions.
        </p>

        <div style={{ width: '60px', height: '1px', background: 'var(--gold-border)' }} />

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '600px' }}>
          <p>© {new Date().getFullYear()} S. &amp; J. Associates. All rights reserved.</p>
          <p style={{ marginTop: '0.3rem', opacity: 0.7 }}>
            Disclaimer: This website is for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
