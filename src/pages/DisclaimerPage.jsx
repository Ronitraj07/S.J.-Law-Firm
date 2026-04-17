import { Helmet } from 'react-helmet-async';

const sections = [
  {
    num: '01',
    h: 'No Legal Advice',
    p: 'The information contained on this website is provided for general informational purposes only. Nothing on this website constitutes legal advice, and no attorney-client relationship is created by your use of this website or by submitting the contact form.',
  },
  {
    num: '02',
    h: 'No Solicitation',
    p: 'The Bar Council of India Rules prohibit advocates from advertising or soliciting work in any manner. This website has been created solely to provide general information about S. & J. Associates and is not intended as a solicitation or advertisement. By accessing this website, you acknowledge that you are seeking this information of your own accord and free will.',
  },
  {
    num: '03',
    h: 'Accuracy of Information',
    p: 'While we endeavour to keep the information on this website accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy or suitability of the information. Legal information on this website may not reflect the most recent legal developments and should not be relied upon as legal advice.',
  },
  {
    num: '04',
    h: 'No Liability',
    p: 'To the fullest extent permitted by law, S. & J. Associates excludes all liability for any loss or damage (including, without limitation, indirect or consequential loss) arising from your use of this website or reliance on any information contained on it.',
  },
  {
    num: '05',
    h: 'External Links',
    p: 'This website may contain links to external websites. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage arising from your use of them.',
  },
  {
    num: '06',
    h: 'Jurisdiction',
    p: 'This website is governed by the laws of India. Any disputes relating to the use of this website are subject to the exclusive jurisdiction of the courts of Vadodara, Gujarat, India.',
  },
];

function DisclaimerPage() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | S. &amp; J. Associates</title>
        <meta name="description" content="Legal disclaimer for S. & J. Associates — this website is for informational purposes only and does not constitute legal advice." />
      </Helmet>

      {/* Page Header */}
      <div style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 4.5rem) 2rem', textAlign: 'center', borderBottom: '3px solid var(--gold)' }}>
        <p style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Legal</p>
        <h1 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '0.6rem' }}>Disclaimer</h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', letterSpacing: '0.04em' }}>Last updated: April 2026</p>
      </div>

      {/* Content */}
      <section style={{ background: '#F7F5F0', padding: 'clamp(2.5rem, 5vw, 4rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {sections.map(({ num, h, p }) => (
            <div
              key={num}
              style={{
                background: '#fff',
                borderLeft: '4px solid var(--gold)',
                borderRadius: '4px',
                padding: '1.6rem 1.8rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                display: 'flex',
                gap: '1.4rem',
                alignItems: 'flex-start',
              }}
            >
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                color: 'var(--gold)',
                letterSpacing: '0.1em',
                minWidth: '28px',
                paddingTop: '3px',
                fontFamily: 'var(--font-heading)',
              }}>{num}</span>
              <div>
                <h2 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{h}</h2>
                <p style={{ fontSize: '0.88rem', color: '#555E6A', lineHeight: 1.85, margin: 0 }}>{p}</p>
              </div>
            </div>
          ))}

          {/* Footer note */}
          <p style={{ fontSize: '0.8rem', color: '#888', textAlign: 'center', marginTop: '0.8rem', lineHeight: 1.7 }}>
            For any queries regarding this disclaimer, please{' '}
            <a href="/contact" style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline' }}>contact us</a>.
          </p>
        </div>
      </section>
    </>
  );
}

export default DisclaimerPage;
