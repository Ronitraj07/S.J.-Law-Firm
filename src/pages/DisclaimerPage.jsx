import { Helmet } from 'react-helmet-async';

function DisclaimerPage() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | S. &amp; J. Associates</title>
        <meta name="description" content="Legal disclaimer for S. & J. Associates — this website is for informational purposes only and does not constitute legal advice." />
      </Helmet>

      <div style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 4rem) 2rem', textAlign: 'center' }}>
        <p className="section-label" style={{ color: 'var(--gold)' }}>Legal</p>
        <h1 style={{ color: '#fff', marginBottom: '0.5rem' }}>Disclaimer</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>Last updated: April 2026</p>
      </div>

      <section className="section">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: 'clamp(1.8rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              { h: 'No Legal Advice', p: 'The information contained on this website is provided for general informational purposes only. Nothing on this website constitutes legal advice, and no attorney-client relationship is created by your use of this website or by submitting the contact form.' },
              { h: 'No Solicitation', p: 'The Bar Council of India Rules prohibit advocates from advertising or soliciting work in any manner. This website has been created solely to provide general information about S. & J. Associates and is not intended as a solicitation or advertisement. By accessing this website, you acknowledge that you are seeking this information of your own accord and free will.' },
              { h: 'Accuracy of Information', p: 'While we endeavour to keep the information on this website accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy or suitability of the information. Legal information on this website may not reflect the most recent legal developments and should not be relied upon as legal advice.' },
              { h: 'No Liability', p: 'To the fullest extent permitted by law, S. & J. Associates excludes all liability for any loss or damage (including, without limitation, indirect or consequential loss) arising from your use of this website or reliance on any information contained on it.' },
              { h: 'External Links', p: 'This website may contain links to external websites. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage arising from your use of them.' },
              { h: 'Jurisdiction', p: 'This website is governed by the laws of India. Any disputes relating to the use of this website are subject to the exclusive jurisdiction of the courts of New Delhi, India.' },
            ].map(({ h, p }) => (
              <div key={h}>
                <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--navy)' }}>{h}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DisclaimerPage;
