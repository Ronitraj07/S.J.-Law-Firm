import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', paddingTop: '3.5rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 2rem' }}>

        {/* 3-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>

          {/* Col 1 — Identity */}
          <div>
            <p style={{
              fontWeight: 700,
              letterSpacing: '0.12em',
              fontSize: '0.82rem',
              color: 'var(--gold)',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              marginBottom: '0.9rem',
            }}>
              S. &amp; J. Associates
            </p>
            <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '240px' }}>
              Client-focused law firm delivering practical, ethical and result-driven legal solutions in Vadodara.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: '1rem',
              fontFamily: 'var(--font-body)',
            }}>
              Pages
            </p>
            <nav aria-label="Footer navigation" style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { to: '/services', label: 'Services' },
                { to: '/team', label: 'Our Team' },
                { to: '/resources', label: 'Resources' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/disclaimer', label: 'Disclaimer' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.58)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.58)'}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: '1rem',
              fontFamily: 'var(--font-body)',
            }}>
              Contact
            </p>
            <address style={{ fontStyle: 'normal', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9 }}>
              325 Broadway Empire,<br />
              Vasan Bhayli Main Road,<br />
              Near Nilamber Circle,<br />
              Vadodara &mdash; 391410, Gujarat<br />
              <a
                href="mailto:contact@sjassociates.com"
                style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.83rem' }}
              >
                contact@sjassociates.com
              </a>
            </address>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.4rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.28)' }}>
            &copy; {new Date().getFullYear()} S. &amp; J. Associates. All rights reserved.
          </p>
          <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.28)' }}>
            Advocates &amp; Legal Consultants &mdash; Vadodara, Gujarat
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
