import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useContent } from '../../../context/ContentContext';

function ContactEditor() {
  const { contact } = useContent();
  const [form, setForm] = useState({ ...contact });
  const [status, setStatus] = useState('idle');

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSave = async () => {
    setStatus('saving');
    try {
      await setDoc(doc(db, 'content', 'contact'), { value: form });
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div>
      {status === 'saved' && <div className="admin-alert success">\u2713 Contact section saved.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed.</div>}

      <div className="admin-card">
        <p className="admin-card-title">Contact Info</p>

        <div className="admin-field">
          <label className="admin-label">Section Heading</label>
          <input className="admin-input" value={form.heading} onChange={e => set('heading', e.target.value)} />
        </div>
        <div className="admin-field">
          <label className="admin-label">Section Subheading</label>
          <textarea className="admin-textarea" value={form.subheading} onChange={e => set('subheading', e.target.value)} rows={3} />
        </div>

        <div className="admin-divider" />

        <div className="admin-grid-2">
          <div className="admin-field">
            <label className="admin-label">Email</label>
            <input className="admin-input" type="email" value={form.email} onChange={e => set('email', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Address</label>
            <input className="admin-input" value={form.address} onChange={e => set('address', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Phone \u2014 Rituraj Sinha</label>
            <input className="admin-input" value={form.phone_rituraj} onChange={e => set('phone_rituraj', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Phone \u2014 Swati Verma</label>
            <input className="admin-input" value={form.phone_swati} onChange={e => set('phone_swati', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Phone \u2014 Abhishek Verma</label>
            <input className="admin-input" value={form.phone_abhishek} onChange={e => set('phone_abhishek', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">WhatsApp Number <span>digits only, e.g. 918200380901</span></label>
            <input className="admin-input" value={form.whatsapp_number} onChange={e => set('whatsapp_number', e.target.value)} />
          </div>
        </div>

        <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving\u2026' : 'Save Contact Info'}
        </button>
      </div>
    </div>
  );
}

export default ContactEditor;
