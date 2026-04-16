import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        boxShadow: scrolled ? '0 2px 20px rgba(30,45,61,0.10)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div className="nav-inner">
        {/* Logo */}
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
              background: '#fff',
            }}
          />
          <span style={{
            fontWeight: 700,
            letterSpacing: '0.1em',
            fontSize: '0.75rem',
            color: 'var(--navy)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase',
          }}>
            S. &amp; J. Associates
          </span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links nav-links--desktop">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link to="/contact" className="nav-cta nav-cta--desktop">
            Book Consultation
          </Link>
          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`hamburger-line${open ? ' open-top' : ''}`} />
            <span className={`hamburger-line${open ? ' open-mid' : ''}`} />
            <span className={`hamburger-line${open ? ' open-bot' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' nav-drawer--open' : ''}`}>
        <div className="nav-drawer-inner">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="nav-drawer-link"
              style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : undefined })}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', textAlign: 'center', marginTop: '0.5rem', display: 'block' }}>
            Book Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
