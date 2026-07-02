import { useState } from 'react';
import { supabase } from '../../../supabase';
import { useContent } from '../../../context/ContentContext';

export default function ContactEditor() {
  const { contact: ctxContact } = useContent();
  const [form, setForm] = useState(ctxContact);
  const [status, setStatus] = useState('idle');

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSave = async () => {
    setStatus('saving');
    const { error } = await supabase
      .from('site_settings')
      .upsert({ key: 'contact', value: form }, { onConflict: 'key' });
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
        <h1 className="admin-page-title">Contact Info</h1>
        <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving…' : '↑ Save & Publish'}
        </button>
      </div>

      {status === 'saved' && <div className="admin-alert success">✓ Contact info saved.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed.</div>}

      <div className="admin-card">
        <div className="admin-card-title">Section Copy</div>
        <F label="Heading" field="heading" />
        <F label="Subheading" field="subheading" textarea />
      </div>

      <div className="admin-card">
        <div className="admin-card-title">Contact Details</div>
        <div className="admin-grid-2">
          <F label="Email" field="email" />
          <F label="Address" field="address" />
          <F label="Phone — Rituraj" field="phone_rituraj" />
          <F label="Phone — Swati" field="phone_swati" />
          <F label="Phone — Abhishek" field="phone_abhishek" />
          <F label="WhatsApp Number" field="whatsapp_number" note="digits only, no +" />
        </div>
      </div>
    </div>
  );
}
