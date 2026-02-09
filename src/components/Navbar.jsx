function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img 
            src="/logo.jfif" 
            alt="S. & J. Associates Logo" 
            style={{ 
              height: '40px', 
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '4px'
            }} 
          />
          <div style={{ 
            fontWeight: 700, 
            letterSpacing: "0.08em", 
            fontSize: "0.95rem", 
            color: "#c9a961" 
          }}>
            S. &amp; J. ASSOCIATES
          </div>
        </div>
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
