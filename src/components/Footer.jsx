function Footer() {
  return (
    <footer style={{
      background: 'var(--navy)',
      paddingTop: '3rem',
      paddingBottom: '3rem',
    }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', textAlign: 'center' }}>
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

        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '500px' }}>
          Client-focused law firm delivering practical, ethical and result-driven legal solutions.
        </p>

        <div style={{ width: '60px', height: '1px', background: 'rgba(201,161,74,0.3)' }} />

        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '600px' }}>
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
