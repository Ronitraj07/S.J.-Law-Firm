import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('sj_cookie_consent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage blocked (private browsing edge case) — just hide
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem('sj_cookie_consent', 'accepted'); } catch {}
    setVisible(false);
  };

  const decline = () => {
    try { localStorage.setItem('sj_cookie_consent', 'declined'); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99998,
        width: 'min(680px, calc(100vw - 2rem))',
        background: 'var(--navy)',
        borderRadius: '8px',
        border: '1px solid rgba(201,161,74,0.25)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
        padding: '1.1rem 1.4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.2rem',
        flexWrap: 'wrap',
        animation: 'fadeInUp 0.45s cubic-bezier(.22,.68,0,1) both',
      }}
    >
      {/* Cookie icon */}
      <span aria-hidden="true" style={{ fontSize: '1.4rem', flexShrink: 0 }}>🍪</span>

      {/* Text */}
      <p style={{
        flex: 1,
        fontSize: '0.82rem',
        color: 'rgba(255,255,255,0.78)',
        lineHeight: 1.65,
        margin: 0,
        minWidth: '180px',
      }}>
        We use essential cookies to keep your session preferences. No tracking or advertising cookies.{' '}
        <Link
          to="/disclaimer"
          style={{ color: 'var(--gold)', textDecoration: 'underline', fontWeight: 600 }}
          onClick={accept}
        >
          Cookie Policy
        </Link>
      </p>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.6rem', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            padding: '0.45rem 1rem',
            borderRadius: '4px',
            background: 'transparent',
            color: 'rgba(255,255,255,0.55)',
            border: '1px solid rgba(255,255,255,0.2)',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            padding: '0.45rem 1.1rem',
            borderRadius: '4px',
            background: 'var(--gold)',
            color: '#fff',
            border: 'none',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
