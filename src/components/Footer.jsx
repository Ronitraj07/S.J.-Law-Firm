function Footer() {
  return (
    <footer 
      className="section" 
      style={{ 
        paddingTop: '3rem', 
        paddingBottom: '3rem',
        borderTop: '1px solid rgba(201,169,97,0.3)',
        marginTop: '2rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center'
        }}
      >
        <div style={{ 
          fontWeight: 700, 
          letterSpacing: "0.08em", 
          fontSize: "1rem", 
          color: "#c9a961",
          fontFamily: 'Georgia, serif'
        }}>
          S. &amp; J. ASSOCIATES
        </div>
        
        <div style={{
          fontSize: '0.9rem',
          color: '#a8a8a8',
          lineHeight: 1.6,
          maxWidth: '600px'
        }}>
          Client-focused law firm delivering practical, ethical and result-driven legal solutions.
        </div>

        <div style={{
          width: '100%',
          height: '1px',
          background: 'rgba(201,169,97,0.2)',
          maxWidth: '800px'
        }}></div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          alignItems: 'center',
          fontSize: '0.85rem',
          color: '#808080',
        }}>
          <span>© {new Date().getFullYear()} S. &amp; J. Associates. All rights reserved.</span>
          <span style={{ maxWidth: '700px', lineHeight: 1.5 }}>
            Disclaimer: This website is for informational purposes only and does not constitute legal advice.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
