import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a 
          href="#home" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.8rem',
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <img 
            src={logo}
            alt="S. & J. Associates Logo"
            style={{ 
              height: 'clamp(40px, 5vw, 50px)', 
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '8px',
              border: '2px solid rgba(201,169,97,0.4)',
              boxShadow: '0 4px 12px rgba(201,169,97,0.2), 0 2px 4px rgba(0,0,0,0.8)',
              padding: '6px',
              background: 'rgba(13,13,13,0.8)'
            }} 
          />
          <div style={{ 
            fontWeight: 700, 
            letterSpacing: "0.08em", 
            fontSize: "clamp(0.8rem, 2vw, 0.95rem)", 
            color: "#c9a961",
            fontFamily: 'Georgia, serif'
          }}>
            S. &amp; J. ASSOCIATES
          </div>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#team">Our Team</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
