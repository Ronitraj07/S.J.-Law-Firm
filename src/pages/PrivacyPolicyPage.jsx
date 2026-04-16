import { Helmet } from 'react-helmet-async';

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | S. &amp; J. Associates</title>
        <meta name="description" content="Privacy policy of S. & J. Associates — how we collect, use and protect personal information submitted through this website." />
      </Helmet>

      <div style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 4rem) 2rem', textAlign: 'center' }}>
        <p className="section-label" style={{ color: 'var(--gold)' }}>Legal</p>
        <h1 style={{ color: '#fff', marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>Last updated: April 2026</p>
      </div>

      <section className="section">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: 'clamp(1.8rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              { h: 'Information We Collect', p: 'When you use the contact form on this website, we collect the name, email address, phone number and message content you provide. We do not collect any other personal information automatically, and we do not use cookies for tracking purposes.' },
              { h: 'How We Use Your Information', p: 'The information you submit through the contact form is used solely to respond to your enquiry and to schedule a consultation if requested. We do not sell, rent or share your personal information with any third party.' },
              { h: 'Data Storage', p: 'Information submitted through our contact form is stored securely. We retain enquiry data for a reasonable period to allow follow-up and then delete it. We do not store payment information as we do not process payments through this website.' },
              { h: 'Third-Party Services', p: 'This website may use third-party services (such as email delivery providers) to transmit and store contact form submissions. These providers are bound by their own privacy policies and are not permitted to use your data for any other purpose.' },
              { h: 'Your Rights', p: 'You have the right to request access to, correction of, or deletion of any personal information we hold about you. To exercise these rights, please contact us directly at contact@sjassociates.com.' },
              { h: 'Changes to This Policy', p: 'We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated date. Your continued use of this website after any changes constitutes your acceptance of the updated policy.' },
              { h: 'Contact', p: 'For any questions about this Privacy Policy, please contact us at contact@sjassociates.com.' },
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

export default PrivacyPolicyPage;
