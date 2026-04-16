import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from './ResourcesPage';

const articleContent = {
  'what-to-do-if-you-receive-a-legal-notice-in-india': {
    sections: [
      {
        heading: 'What Is a Legal Notice?',
        body: 'A legal notice is a formal written communication sent by one party to another, signalling an intention to take legal action if a particular issue is not resolved. It is typically the first step before initiating court proceedings and serves as a record that the sending party has attempted to resolve the dispute before approaching the courts. In India, legal notices are commonly sent in matters involving breach of contract, recovery of dues, property disputes, and family law.'
      },
      {
        heading: 'Is a Legal Notice a Court Summons?',
        body: 'No. A legal notice is not issued by a court and does not mean you have been sued. It is sent by the opposing party or their advocate. You are not legally compelled to respond in the same way you would be to a court summons, but ignoring it entirely is rarely advisable.'
      },
      {
        heading: 'Immediate Steps to Take',
        body: 'Read the notice carefully and note the deadline specified for a response. Do not ignore it — even if you believe the claims are entirely without merit. Gather any documents relevant to the matter: contracts, correspondence, invoices, receipts or other records. Do not respond to the notice personally without first consulting an advocate; an improperly worded reply can be used against you in subsequent proceedings.'
      },
      {
        heading: 'Should You Respond?',
        body: 'In most cases, yes. A well-drafted reply can clarify your legal position, rebut false claims, and demonstrate good faith — which courts consider favourably. It may also open a channel for negotiated settlement, avoiding the cost and time of litigation altogether. Your advocate will assess the notice, advise on the strength of the claims, and draft a reply that protects your interests.'
      },
      {
        heading: 'Time Limits Matter',
        body: "Legal notices frequently specify a response deadline of 15 to 30 days. While the deadline in the notice itself is not necessarily a legal cutoff, certain matters — such as cheque dishonour notices under Section 138 of the Negotiable Instruments Act — carry strict statutory time limits. Don't assume you have unlimited time to act."
      },
      {
        heading: 'Key Takeaway',
        body: 'Receiving a legal notice is not a reason to panic, but it does require prompt, considered action. The right response, drafted with legal guidance, can significantly affect the outcome of any dispute that follows.'
      },
    ]
  },
  'how-to-file-a-consumer-complaint-under-the-consumer-protection-act-2019': {
    sections: [
      {
        heading: 'Overview of the Consumer Protection Act 2019',
        body: 'The Consumer Protection Act 2019 replaced the 1986 Act and significantly expanded consumer rights in India. It introduced the Central Consumer Protection Authority (CCPA), recognised e-commerce transactions as covered consumer dealings, and established the concept of product liability. The Act provides consumers with multiple forums for redressal depending on the value of the claim.'
      },
      {
        heading: 'Who Is a Consumer Under the Act?',
        body: 'A consumer is a person who buys goods or hires services for personal use and not for commercial resale. This includes online purchases. If you purchased a product on an e-commerce platform and received a defective item, or paid for a service that was not delivered, you are a consumer under the Act.'
      },
      {
        heading: 'Which Forum to Approach?',
        body: 'The forum depends on the value of the goods or services and the compensation claimed. Claims up to ₹50 lakhs go to the District Consumer Disputes Redressal Commission. Claims between ₹50 lakhs and ₹2 crores go to the State Commission. Claims above ₹2 crores go to the National Consumer Disputes Redressal Commission (NCDRC).'
      },
      {
        heading: 'How to File a Complaint',
        body: 'Complaints can now be filed online through the e-DAAKHIL portal (edaakhil.nic.in) or in person at the relevant commission. You will need: proof of purchase (invoice/receipt), evidence of the defect or deficiency (photographs, communications with the seller), your written complaint stating the facts and the relief sought, and proof of payment of the prescribed filing fee.'
      },
      {
        heading: 'What Relief Can You Claim?',
        body: 'Under the Act, a consumer can claim replacement or repair of defective goods, refund of the price paid, removal of deficiency in service, compensation for loss or injury suffered, and punitive damages in appropriate cases. The CCPA can also issue product recalls and impose penalties on traders for unfair trade practices.'
      },
      {
        heading: 'Limitation Period',
        body: 'A consumer complaint must be filed within two years from the date the cause of action arose. The commission may condone delay if you provide sufficient cause, but it is advisable to act promptly.'
      },
    ]
  },
  'understanding-arbitration-clauses-in-commercial-contracts': {
    sections: [
      {
        heading: 'What Is an Arbitration Clause?',
        body: 'An arbitration clause is a provision in a contract that requires the parties to resolve any disputes through arbitration rather than through the courts. It is a private, contractual mechanism for dispute resolution, governed in India by the Arbitration and Conciliation Act, 1996 (as amended). Once an arbitration clause is agreed upon, the parties are generally bound by it and courts will typically refer disputes to arbitration when one party invokes the clause.'
      },
      {
        heading: 'Why Do Contracts Include Them?',
        body: 'Arbitration is typically faster and more confidential than court litigation. For commercial parties, this matters: a dispute resolved in arbitration avoids public court records, allows the parties to choose their arbitrator (including industry experts), and can often be resolved in months rather than years.'
      },
      {
        heading: 'What to Look For in an Arbitration Clause',
        body: 'Key elements to check include: the seat of arbitration (which determines the jurisdiction), the number of arbitrators (one or three), the institution administering the arbitration (ad hoc or institutional such as DIAC or MCIA), the governing law, and the language of proceedings. A poorly drafted clause can lead to procedural challenges before the arbitration even begins.'
      },
      {
        heading: 'Common Drafting Problems',
        body: 'Vague clauses such as “any disputes shall be settled by arbitration in India” are often unenforceable or lead to preliminary disputes about procedure. An enforceable clause should specify the seat, the rules, and the number of arbitrators at a minimum.'
      },
      {
        heading: 'Challenging an Arbitration Award',
        body: 'An arbitral award is final and binding, but can be challenged before the relevant High Court under Section 34 of the Arbitration and Conciliation Act on limited grounds — primarily procedural irregularity, incapacity of a party, or the award being contrary to public policy. Grounds for challenge are deliberately narrow to preserve the finality of arbitration.'
      },
      {
        heading: 'Practical Advice',
        body: 'Before signing any commercial contract with an arbitration clause, have it reviewed by an advocate. A well-negotiated arbitration clause can save significant time and cost if a dispute arises later. An unfair or one-sided clause — particularly one that fixes the seat in a remote location or limits your choice of arbitrator — can put you at a serious disadvantage.'
      },
    ]
  },
};

function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const content = articleContent[slug];

  if (!article || !content) return <Navigate to="/resources" replace />;

  return (
    <>
      <Helmet>
        <title>{article.title} | S. &amp; J. Associates</title>
        <meta name="description" content={article.excerpt} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.excerpt,
          "publisher": {
            "@type": "Organization",
            "name": "S. & J. Associates"
          },
          "datePublished": "2026-04-01"
        })}</script>
      </Helmet>

      <div style={{ background: 'var(--navy)', padding: 'clamp(2.5rem, 5vw, 4rem) 2rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Link to="/resources" style={{ fontSize: '0.82rem', color: 'var(--gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '2rem' }}>
            &larr; All Articles
          </Link>
          <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', background: 'rgba(201,161,74,0.15)', color: 'var(--gold)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {article.category}
            </span>
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>{article.date} &bull; {article.readTime}</span>
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', lineHeight: 1.3, marginBottom: '1rem' }}>{article.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.75 }}>{article.excerpt}</p>
        </div>
      </div>

      <section className="section">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
            {content.sections.map((s, i) => (
              <div key={i} style={{ marginBottom: i < content.sections.length - 1 ? '2rem' : 0 }}>
                <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.7rem', color: 'var(--navy)' }}>{s.heading}</h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>{s.body}</p>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '1.5rem 1.8rem', marginTop: '1.5rem', background: 'rgba(26,42,68,0.04)', borderLeft: '3px solid rgba(201,161,74,0.4)' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <strong>Disclaimer:</strong> This article is for general informational purposes only and does not constitute legal advice.
              It does not create an attorney-client relationship. For advice specific to your situation, please consult a qualified advocate.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/contact"><button className="btn-primary">Speak to an Advocate</button></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticlePage;
