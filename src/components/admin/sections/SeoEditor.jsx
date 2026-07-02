import { useState } from 'react';
import { supabase } from '../../../supabase';
import { useContent } from '../../../context/ContentContext';

export default function SeoEditor() {
  const { seo: ctxSeo } = useContent();
  const [form, setForm] = useState(ctxSeo);
  const [status, setStatus] = useState('idle');

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSave = async () => {
    setStatus('saving');
    const { error } = await supabase
      .from('site_settings')
      .upsert({ key: 'seo', value: form }, { onConflict: 'key' });
    if (error) { setStatus('error'); setTimeout(() => setStatus('idle'), 3000); return; }
    setStatus('saved');
    setTimeout(() => setStatus('idle'), 2500);
  };

  const F = ({ label, field, note, textarea }) => (
    <div className="admin-field">
      <label className="admin-label">{label}{note && <span>{note}</span>}</label>
      {textarea
        ? <textarea className="admin-textarea" rows={3} value={form[field] || ''} onChange={e => set(field, e.target.value)} />
        : <input className="admin-input" value={form[field] || ''} onChange={e => set(field, e.target.value)} />}
    </div>
  );

  return (
    <div>
      <div className="admin-topbar">
        <h1 className="admin-page-title">SEO & Meta</h1>
        <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving…' : '↑ Save & Publish'}
        </button>
      </div>

      {status === 'saved' && <div className="admin-alert success">✓ SEO settings saved.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed.</div>}

      <div className="admin-card">
        <div className="admin-card-title">Site Identity</div>
        <div className="admin-grid-2">
          <F label="Site Name" field="siteName" />
          <F label="Site URL" field="siteUrl" note="include https://" />
          <F label="Twitter Handle" field="twitterHandle" note="optional" />
          <F label="OG Image URL" field="ogImage" note="/og-image.jpg or full URL" />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-title">Default Meta</div>
        <F label="Default Page Title" field="defaultTitle" />
        <F label="Default Meta Description" field="defaultDescription" textarea note="160 chars max" />
      </div>
    </div>
  );
}
