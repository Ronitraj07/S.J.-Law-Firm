import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useContent } from '../../../context/ContentContext';

function HeroEditor() {
  const { hero } = useContent();
  const [form, setForm] = useState({ ...hero });
  const [status, setStatus] = useState('idle'); // idle | saving | saved | error

  // keep in sync if context updates from another tab
  // (intentionally not using useEffect to avoid overwriting unsaved changes)

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSave = async () => {
    setStatus('saving');
    try {
      await setDoc(doc(db, 'content', 'hero'), { value: form });
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div>
      {status === 'saved' && <div className="admin-alert success">\u2713 Hero section saved and live.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed. Check Firestore permissions.</div>}

      <div className="admin-card">
        <p className="admin-card-title">Hero Content</p>

        <div className="admin-field">
          <label className="admin-label">Tagline <span>small label above heading</span></label>
          <input className="admin-input" value={form.tagline} onChange={e => set('tagline', e.target.value)} />
        </div>

        <div className="admin-field">
          <label className="admin-label">Main Heading</label>
          <textarea className="admin-textarea" value={form.heading} onChange={e => set('heading', e.target.value)} rows={3} />
        </div>

        <div className="admin-field">
          <label className="admin-label">Subheading / Description</label>
          <textarea className="admin-textarea" value={form.subheading} onChange={e => set('subheading', e.target.value)} rows={4} />
        </div>

        <div className="admin-grid-2">
          <div className="admin-field">
            <label className="admin-label">Primary CTA Button Text</label>
            <input className="admin-input" value={form.ctaPrimary} onChange={e => set('ctaPrimary', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Secondary CTA Button Text</label>
            <input className="admin-input" value={form.ctaSecondary} onChange={e => set('ctaSecondary', e.target.value)} />
          </div>
        </div>

        <button
          className="admin-btn admin-btn-primary"
          onClick={handleSave}
          disabled={status === 'saving'}
        >
          {status === 'saving' ? 'Saving\u2026' : 'Save Hero Section'}
        </button>
      </div>
    </div>
  );
}

export default HeroEditor;
