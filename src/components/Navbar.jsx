import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src={logo}
            alt="S. & J. Associates Logo"
            style={{
              height: 'clamp(36px, 4vw, 44px)',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '6px',
              border: '1.5px solid #E5E7EB',
              padding: '4px',
              background: '#FFFFFF'
            }}
          />
          <span style={{
            fontWeight: 700,
            letterSpacing: '0.1em',
            fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)',
            color: 'var(--navy)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase'
          }}>
            S. &amp; J. Associates
          </span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>
            Home
          </NavLink>
          <NavLink to="/services" style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>
            Services
          </NavLink>
          <NavLink to="/team" style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>
            Team
          </NavLink>
          <NavLink to="/resources" style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>
            Resources
          </NavLink>
          <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
