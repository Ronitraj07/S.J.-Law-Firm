import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useContent } from '../../../context/ContentContext';

function ApproachEditor() {
  const { approach } = useContent();
  const [steps, setSteps] = useState(approach.map(s => ({ ...s })));
  const [status, setStatus] = useState('idle');

  const update = (index, key, val) => {
    setSteps(prev => prev.map((s, i) => i === index ? { ...s, [key]: val } : s));
  };

  const addStep = () => {
    const next = String(steps.length + 1).padStart(2, '0');
    setSteps(prev => [...prev, { step: next, title: '', desc: '' }]);
  };

  const removeStep = (index) => {
    setSteps(prev => prev.filter((_, i) => i !== index).map((s, i) => ({ ...s, step: String(i + 1).padStart(2, '0') })));
  };

  const handleSave = async () => {
    setStatus('saving');
    try {
      await setDoc(doc(db, 'content', 'approach'), { value: steps });
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div>
      {status === 'saved' && <div className="admin-alert success">\u2713 Approach section saved.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed.</div>}

      {steps.map((step, i) => (
        <div key={i} className="admin-item-card">
          <div className="admin-item-card-header">
            <span className="admin-item-card-label">Step {step.step}</span>
            <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => removeStep(i)}>Remove</button>
          </div>
          <div className="admin-field">
            <label className="admin-label">Title</label>
            <input className="admin-input" value={step.title} onChange={e => update(i, 'title', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Description</label>
            <textarea className="admin-textarea" value={step.desc} onChange={e => update(i, 'desc', e.target.value)} rows={3} />
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button className="admin-btn admin-btn-secondary" onClick={addStep}>+ Add Step</button>
      </div>

      <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
        {status === 'saving' ? 'Saving\u2026' : 'Save Approach Section'}
      </button>
    </div>
  );
}

export default ApproachEditor;
