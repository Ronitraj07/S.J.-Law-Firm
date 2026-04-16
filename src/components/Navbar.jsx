import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <img
            src={logo}
            alt="S. & J. Associates Logo"
            style={{
              height: '28px',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '4px',
              border: '1px solid rgba(30,45,61,0.15)',
              padding: '3px',
              background: '#fff'
            }}
          />
          <span style={{
            fontWeight: 700,
            letterSpacing: '0.1em',
            fontSize: '0.75rem',
            color: 'var(--navy)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase'
          }}>
            S. &amp; J. Associates
          </span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>Home</NavLink>
          <NavLink to="/services" style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>Services</NavLink>
          <NavLink to="/team" style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>Team</NavLink>
          <NavLink to="/resources" style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>Resources</NavLink>
          <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>Contact</NavLink>
        </div>

        <Link to="/contact" className="nav-cta">
          Book Consultation
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
