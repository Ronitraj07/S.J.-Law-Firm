import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      background: 'var(--navy)',
      paddingTop: '3rem',
      paddingBottom: '2rem',
    }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', textAlign: 'center' }}>

        {/* Firm Name */}
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

        {/* Office Address */}
        <address style={{ fontStyle: 'normal', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.9 }}>
          325 Broadway Empire, Vasan Bhayli Main Road,<br />
          Near Nilamber Circle, Vadodara &mdash; 391410, Gujarat, India<br />
          <a href="mailto:contact@sjassociates.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            contact@sjassociates.com
          </a>
        </address>

        <div style={{ width: '60px', height: '1px', background: 'rgba(201,161,74,0.3)' }} />

        {/* Nav Links */}
        <nav aria-label="Footer navigation" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { to: '/services', label: 'Services' },
            { to: '/team', label: 'Our Team' },
            { to: '/resources', label: 'Resources' },
            { to: '/contact', label: 'Contact' },
            { to: '/privacy-policy', label: 'Privacy Policy' },
            { to: '/disclaimer', label: 'Disclaimer' },
          ].map(({ to, label }) => (
            <Link key={to} to={to} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </nav>

        {/* BCI Mandatory Disclaimer */}
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, maxWidth: '680px', marginTop: '0.4rem' }}>
          This website is for informational purposes only and does not constitute legal advice. No attorney-client
          relationship is established by use of this site or by submitting the contact form. The rules of the Bar
          Council of India prohibit law firms from soliciting work or advertising in any manner. By accessing this
          website, you acknowledge that you are seeking information of your own accord and free will.
        </p>

        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.2rem' }}>
          &copy; {new Date().getFullYear()} S. &amp; J. Associates. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
