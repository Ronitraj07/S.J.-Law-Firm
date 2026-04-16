import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const articles = [
  {
    slug: 'what-to-do-if-you-receive-a-legal-notice-in-india',
    title: 'What to Do If You Receive a Legal Notice in India',
    date: 'April 2026',
    readTime: '6 min read',
    category: 'General',
    excerpt: 'Receiving a legal notice can be unsettling. This article explains what a legal notice is, what it means for you legally, and the steps you should take immediately upon receiving one.',
  },
  {
    slug: 'how-to-file-a-consumer-complaint-under-the-consumer-protection-act-2019',
    title: 'How to File a Consumer Complaint Under the Consumer Protection Act 2019',
    date: 'April 2026',
    readTime: '7 min read',
    category: 'Consumer Law',
    excerpt: 'The Consumer Protection Act 2019 significantly strengthened the rights of consumers in India. This guide walks through the process of filing a complaint before the District Consumer Disputes Redressal Commission.',
  },
  {
    slug: 'understanding-arbitration-clauses-in-commercial-contracts',
    title: 'Understanding Arbitration Clauses in Commercial Contracts',
    date: 'April 2026',
    readTime: '5 min read',
    category: 'Arbitration',
    excerpt: 'Arbitration clauses are now standard in most commercial agreements, yet many parties sign them without fully understanding their implications. This article explains what to look for and what to negotiate.',
  },
];

function ResourcesPage() {
  return (
    <>
      <Helmet>
        <title>Legal Resources | S. &amp; J. Associates</title>
        <meta name="description" content="Legal guides and articles by S. & J. Associates covering consumer law, arbitration, legal notices and more. Practical information for individuals and businesses in India." />
      </Helmet>

      <div style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <p className="section-label" style={{ color: 'var(--gold)' }}>Knowledge Base</p>
        <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Legal Resources</h1>
        <div className="divider" style={{ margin: '0 auto 1.2rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75, fontSize: '0.95rem' }}>
          Practical legal information for individuals and businesses navigating the Indian legal system.
        </p>
      </div>

      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {articles.map((a, i) => (
            <Link key={a.slug} to={`/resources/${a.slug}`} style={{ textDecoration: 'none' }}>
              <article
                className={`glass-card animate-fadeInUp delay-${(i + 1) * 100}`}
                style={{ padding: '1.8rem 2rem', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.7rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(201,161,74,0.1)', color: 'var(--gold)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(201,161,74,0.2)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {a.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{a.date} &bull; {a.readTime}</span>
                </div>
                <h2 style={{ fontSize: '1.05rem', marginBottom: '0.6rem', lineHeight: 1.4 }}>{a.title}</h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>{a.excerpt}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 600 }}>Read article &rarr;</p>
              </article>
            </Link>
          ))}
        </div>

        <div style={{ maxWidth: '800px', margin: '2.5rem auto 0', padding: '0' }}>
          <div className="glass-card" style={{ padding: '1.8rem 2rem', background: 'rgba(26,42,68,0.06)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>More articles coming soon.</p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>We regularly publish practical legal guides on matters relevant to individuals and businesses in India.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResourcesPage;
