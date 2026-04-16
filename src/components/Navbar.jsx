import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src={logo}
            alt="S. & J. Associates Logo"
            style={{
              height: 'clamp(36px, 4vw, 44px)',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '6px',
              border: '1.5px solid var(--gold-border)',
              padding: '4px',
              background: 'var(--bg-card)'
            }}
          />
          <span style={{
            fontWeight: 700,
            letterSpacing: '0.1em',
            fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)',
            color: 'var(--gold)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase'
          }}>
            S. &amp; J. Associates
          </span>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
