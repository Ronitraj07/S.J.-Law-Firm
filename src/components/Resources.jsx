import { useState } from 'react';

const faqs = [
  {
    question: "When should I consult a lawyer?",
    answer: "You should consider consulting a lawyer when you receive court or government notices, sign significant contracts, face criminal allegations, or anticipate a dispute that may affect your rights or business.",
  },
  {
    question: "What should I bring to my first meeting?",
    answer: "Carry copies of relevant agreements, notices, prior court orders and identification documents so your lawyer can quickly understand the facts and possible options.",
  },
  {
    question: "How are your fees structured?",
    answer: "Fee structures vary based on the nature and complexity of the matter. We discuss all fees transparently before engagement so there are no surprises.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes. We offer consultations via video call and phone for clients who are unable to visit our office in person.",
  },
];

function Resources() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" id="resources">
      <div className="animate-fadeInUp">
        <p className="section-label">Knowledge Base</p>
        <h2 style={{ marginBottom: '0.5rem' }}>Legal Guides &amp; Resources</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Brief guides and FAQs give clients context about common legal issues and when to seek
          professional assistance.
        </p>
      </div>

      <div style={{ maxWidth: '720px' }}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`animate-fadeInUp delay-${(i + 1) * 100}`}
              style={{
                borderBottom: '1px solid var(--gold-border)',
                padding: '1.2rem 0',
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '1rem',
                }}
              >
                <h3 style={{ color: isOpen ? 'var(--gold)' : 'var(--text-primary)', transition: 'color 0.25s ease', margin: 0 }}>
                  {faq.question}
                </h3>
                <span style={{
                  color: 'var(--gold)',
                  fontSize: '1.3rem',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  +
                </span>
              </button>
              <div style={{
                maxHeight: isOpen ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease, opacity 0.3s ease',
                opacity: isOpen ? 1 : 0,
              }}>
                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  paddingTop: '0.8rem',
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Resources;
