import { useState } from 'react';
import { supabase } from '../../../supabase';
import { useContent } from '../../../context/ContentContext';

export default function ApproachEditor() {
  const { approach: ctxApproach } = useContent();
  const [steps, setSteps] = useState(ctxApproach.map(s => ({ ...s })));
  const [status, setStatus] = useState('idle');

  const updateStep = (i, key, val) =>
    setSteps(prev => prev.map((s, j) => j === i ? { ...s, [key]: val } : s));

  const addStep = () =>
    setSteps(prev => [...prev, { step: String(prev.length + 1).padStart(2, '0'), title: '', desc: '' }]);

  const removeStep = (i) =>
    setSteps(prev => prev.filter((_, j) => j !== i));

  const handleSave = async () => {
    setStatus('saving');
    const { error } = await supabase
      .from('site_settings')
      .upsert({ key: 'approach', value: steps }, { onConflict: 'key' });
    if (error) { setStatus('error'); setTimeout(() => setStatus('idle'), 3000); return; }
    setStatus('saved');
    setTimeout(() => setStatus('idle'), 2500);
  };

  return (
    <div>
      <div className="admin-topbar">
        <h1 className="admin-page-title">Our Approach</h1>
        <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving…' : '↑ Save & Publish'}
        </button>
      </div>

      {status === 'saved' && <div className="admin-alert success">✓ Approach saved.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed.</div>}

      {steps.map((s, i) => (
        <div key={i} className="admin-item-card">
          <div className="admin-item-card-header">
            <span className="admin-item-card-label">Step {i + 1}</span>
            <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => removeStep(i)}>✕ Remove</button>
          </div>
          <div className="admin-grid-2">
            <div className="admin-field">
              <label className="admin-label">Step Number</label>
              <input className="admin-input" value={s.step} onChange={e => updateStep(i, 'step', e.target.value)} />
            </div>
            <div className="admin-field">
              <label className="admin-label">Title</label>
              <input className="admin-input" value={s.title} onChange={e => updateStep(i, 'title', e.target.value)} />
            </div>
          </div>
          <div className="admin-field">
            <label className="admin-label">Description</label>
            <textarea className="admin-textarea" rows={3} value={s.desc} onChange={e => updateStep(i, 'desc', e.target.value)} />
          </div>
        </div>
      ))}

      <button className="admin-btn admin-btn-secondary" onClick={addStep}>+ Add Step</button>
    </div>
  );
}
