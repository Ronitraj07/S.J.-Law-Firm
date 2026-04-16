import { Link } from 'react-router-dom';
import { teamMembers } from '../data/team.js';

function Footer() {
  return (
    <footer style={{
      background: 'var(--navy)',
      paddingTop: '3rem',
      paddingBottom: '2rem',
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

        {/* Enrollment Numbers */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.4rem 2rem', marginTop: '0.4rem' }}>
          {teamMembers.map((m) => (
            <span key={m.slug} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.03em' }}>
              {m.name} &mdash; {m.barCouncil.name}, Enrl. No. {m.barCouncil.enrollmentNumber}
            </span>
          ))}
        </div>

        <div style={{ width: '60px', height: '1px', background: 'rgba(201,161,74,0.3)' }} />

        {/* Legal Links */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/privacy-policy" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link to="/disclaimer" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
            Disclaimer
          </Link>
          <Link to="/contact" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>

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
