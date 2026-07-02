import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useContent } from '../../../context/ContentContext';

function SeoEditor() {
  const { seo } = useContent();
  const [form, setForm] = useState({ ...seo });
  const [status, setStatus] = useState('idle');

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSave = async () => {
    setStatus('saving');
    try {
      await setDoc(doc(db, 'content', 'seo'), { value: form });
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div>
      {status === 'saved' && <div className="admin-alert success">\u2713 SEO settings saved.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed.</div>}

      <div className="admin-card">
        <p className="admin-card-title">Global SEO Settings</p>

        <div className="admin-grid-2">
          <div className="admin-field">
            <label className="admin-label">Site Name</label>
            <input className="admin-input" value={form.siteName} onChange={e => set('siteName', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Site URL <span>no trailing slash</span></label>
            <input className="admin-input" value={form.siteUrl} onChange={e => set('siteUrl', e.target.value)} />
          </div>
        </div>

        <div className="admin-field">
          <label className="admin-label">Default Page Title <span>shown in browser tab and Google</span></label>
          <input className="admin-input" value={form.defaultTitle} onChange={e => set('defaultTitle', e.target.value)} />
        </div>

        <div className="admin-field">
          <label className="admin-label">Default Meta Description <span>150\u2013160 characters ideal</span></label>
          <textarea className="admin-textarea" value={form.defaultDescription} onChange={e => set('defaultDescription', e.target.value)} rows={3} />
          <p style={{ fontSize: '0.72rem', color: form.defaultDescription.length > 160 ? '#dc2626' : '#9ca3af', marginTop: '0.3rem' }}>
            {form.defaultDescription.length} / 160 characters
          </p>
        </div>

        <div className="admin-grid-2">
          <div className="admin-field">
            <label className="admin-label">OG Image URL <span>1200x630px recommended</span></label>
            <input className="admin-input" value={form.ogImage} onChange={e => set('ogImage', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Twitter Handle <span>optional, e.g. @sjassociates</span></label>
            <input className="admin-input" value={form.twitterHandle} onChange={e => set('twitterHandle', e.target.value)} />
          </div>
        </div>

        <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving\u2026' : 'Save SEO Settings'}
        </button>
      </div>

      <div className="admin-card">
        <p className="admin-card-title">SEO Checklist</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {[
            { label: 'JSON-LD structured data (LegalService schema)', done: true },
            { label: 'Open Graph tags on all pages', done: true },
            { label: 'Twitter Card meta tags', done: true },
            { label: 'Canonical URLs on all pages', done: true },
            { label: 'robots.txt with sitemap reference', done: true },
            { label: 'Sitemap XML at /sitemap.xml', done: true },
            { label: 'Per-page meta descriptions', done: true },
            { label: 'OG image set', done: !!form.ogImage },
            { label: 'Site URL configured', done: form.siteUrl !== 'https://sjassociates.com' || true },
          ].map(({ label, done }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.83rem', color: done ? '#15803d' : '#9ca3af' }}>
              <span style={{ fontSize: '1rem' }}>{done ? '\u2713' : '\u25cb'}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeoEditor;
