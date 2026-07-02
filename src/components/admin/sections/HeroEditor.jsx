import { useState } from 'react';
import { supabase } from '../../../supabase';
import { useContent } from '../../../context/ContentContext';

export default function HeroEditor() {
  const { hero: ctxHero } = useContent();
  const [form, setForm] = useState(ctxHero);
  const [status, setStatus] = useState('idle');

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSave = async () => {
    setStatus('saving');
    const { error } = await supabase
      .from('site_settings')
      .upsert({ key: 'hero', value: form }, { onConflict: 'key' });
    if (error) { setStatus('error'); setTimeout(() => setStatus('idle'), 3000); return; }
    setStatus('saved');
    setTimeout(() => setStatus('idle'), 2500);
  };

  return (
    <div>
      <div className="admin-topbar">
        <h1 className="admin-page-title">Hero Section</h1>
        <button
          className="admin-btn admin-btn-primary"
          onClick={handleSave}
          disabled={status === 'saving'}
        >
          {status === 'saving' ? 'Saving…' : '↑ Save & Publish'}
        </button>
      </div>

      {status === 'saved' && <div className="admin-alert success">✓ Hero saved and live.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed — check console.</div>}

      <div className="admin-card">
        <div className="admin-card-title">Tagline</div>
        <div className="admin-field">
          <label className="admin-label">Tagline <span>small text above heading</span></label>
          <input className="admin-input" value={form.tagline || ''} onChange={e => set('tagline', e.target.value)} />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-title">Heading & Subheading</div>
        <div className="admin-field">
          <label className="admin-label">Main Heading</label>
          <textarea className="admin-textarea" rows={3} value={form.heading || ''} onChange={e => set('heading', e.target.value)} />
        </div>
        <div className="admin-field">
          <label className="admin-label">Subheading</label>
          <textarea className="admin-textarea" rows={3} value={form.subheading || ''} onChange={e => set('subheading', e.target.value)} />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-title">CTA Buttons</div>
        <div className="admin-grid-2">
          <div className="admin-field">
            <label className="admin-label">Primary Button</label>
            <input className="admin-input" value={form.ctaPrimary || ''} onChange={e => set('ctaPrimary', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Secondary Button</label>
            <input className="admin-input" value={form.ctaSecondary || ''} onChange={e => set('ctaSecondary', e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}
