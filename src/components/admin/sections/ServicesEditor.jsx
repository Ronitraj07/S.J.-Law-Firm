import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useContent } from '../../../context/ContentContext';

const emptyService = () => ({
  slug: '',
  title: '',
  shortDesc: '',
  fullDesc: '',
  icon: 'document',
  practicePoints: [''],
  attorneys: [],
  metaDescription: '',
});

function ServicesEditor() {
  const { services } = useContent();
  const [items, setItems] = useState(services.map(s => ({ ...s, practicePoints: [...s.practicePoints] })));
  const [expanded, setExpanded] = useState(0);
  const [status, setStatus] = useState('idle');

  const updateItem = (index, key, val) => {
    setItems(prev => prev.map((s, i) => i === index ? { ...s, [key]: val } : s));
  };

  const updatePoint = (si, pi, val) => {
    setItems(prev => prev.map((s, i) => {
      if (i !== si) return s;
      const pts = [...s.practicePoints];
      pts[pi] = val;
      return { ...s, practicePoints: pts };
    }));
  };

  const addPoint = (si) => {
    setItems(prev => prev.map((s, i) => i === si ? { ...s, practicePoints: [...s.practicePoints, ''] } : s));
  };

  const removePoint = (si, pi) => {
    setItems(prev => prev.map((s, i) => i === si ? { ...s, practicePoints: s.practicePoints.filter((_, j) => j !== pi) } : s));
  };

  const addService = () => {
    setItems(prev => [...prev, emptyService()]);
    setExpanded(items.length);
  };

  const removeService = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
    setExpanded(Math.max(0, index - 1));
  };

  const handleSave = async () => {
    setStatus('saving');
    try {
      await setDoc(doc(db, 'content', 'services'), { value: items });
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div>
      {status === 'saved' && <div className="admin-alert success">\u2713 Services saved and live.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed.</div>}

      {items.map((service, si) => (
        <div key={si} className="admin-item-card">
          <div className="admin-item-card-header">
            <button
              className="admin-item-card-label"
              style={{ cursor: 'pointer', background: 'none', border: 'none', textAlign: 'left', font: 'inherit', color: 'var(--navy)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              onClick={() => setExpanded(expanded === si ? null : si)}
            >
              {expanded === si ? '\u25bc' : '\u25ba'} {service.title || `Service ${si + 1}`}
            </button>
            <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => removeService(si)}>Remove</button>
          </div>

          {expanded === si && (
            <>
              <div className="admin-grid-2">
                <div className="admin-field">
                  <label className="admin-label">Title</label>
                  <input className="admin-input" value={service.title} onChange={e => updateItem(si, 'title', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Slug <span>url-friendly, no spaces</span></label>
                  <input className="admin-input" value={service.slug} onChange={e => updateItem(si, 'slug', e.target.value.toLowerCase().replace(/\s+/g, '-'))} />
                </div>
              </div>
              <div className="admin-field">
                <label className="admin-label">Short Description <span>shown on cards</span></label>
                <textarea className="admin-textarea" value={service.shortDesc} onChange={e => updateItem(si, 'shortDesc', e.target.value)} rows={3} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Full Description <span>service detail page</span></label>
                <textarea className="admin-textarea" value={service.fullDesc} onChange={e => updateItem(si, 'fullDesc', e.target.value)} rows={5} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Meta Description <span>for SEO</span></label>
                <textarea className="admin-textarea" value={service.metaDescription} onChange={e => updateItem(si, 'metaDescription', e.target.value)} rows={2} />
              </div>

              <div className="admin-field">
                <label className="admin-label">Practice Points</label>
                {service.practicePoints.map((pt, pi) => (
                  <div key={pi} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <input className="admin-input" value={pt} onChange={e => updatePoint(si, pi, e.target.value)} />
                    <button className="admin-btn-icon" onClick={() => removePoint(si, pi)} title="Remove">\u2715</button>
                  </div>
                ))}
                <button className="admin-btn admin-btn-secondary admin-btn-sm" style={{ marginTop: '0.4rem' }} onClick={() => addPoint(si)}>+ Add Point</button>
              </div>
            </>
          )}
        </div>
      ))}

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button className="admin-btn admin-btn-secondary" onClick={addService}>+ Add Service</button>
      </div>

      <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
        {status === 'saving' ? 'Saving\u2026' : 'Save All Services'}
      </button>
    </div>
  );
}

export default ServicesEditor;
