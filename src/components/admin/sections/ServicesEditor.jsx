import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase';

const emptyService = () => ({
  slug: '', title: '', icon: '', tagline: '', short_description: '',
  description: '', details: [], display_order: 0, published: true,
});

export default function ServicesEditor() {
  const [services, setServices] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [status, setStatus] = useState('idle');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('services').select('*').order('display_order').then(({ data }) => {
      if (data) setServices(data);
      setLoading(false);
    });
  }, []);

  const update = (i, key, val) =>
    setServices(prev => prev.map((s, j) => j === i ? { ...s, [key]: val } : s));

  const addService = () => {
    setServices(prev => [...prev, emptyService()]);
    setExpanded(services.length);
  };

  const removeService = async (i) => {
    const svc = services[i];
    if (svc.id) await supabase.from('services').delete().eq('id', svc.id);
    setServices(prev => prev.filter((_, j) => j !== i));
    if (expanded === i) setExpanded(null);
  };

  const handleSave = async () => {
    setStatus('saving');
    for (const svc of services) {
      const { id, created_at, updated_at, ...rest } = svc;
      if (id) {
        await supabase.from('services').update(rest).eq('id', id);
      } else {
        await supabase.from('services').insert(rest);
      }
    }
    // Reload
    const { data } = await supabase.from('services').select('*').order('display_order');
    if (data) setServices(data);
    setStatus('saved');
    setTimeout(() => setStatus('idle'), 2500);
  };

  if (loading) return <div className="admin-loading">Loading services…</div>;

  return (
    <div>
      <div className="admin-topbar">
        <h1 className="admin-page-title">Services</h1>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="admin-btn admin-btn-secondary" onClick={addService}>+ Add Service</button>
          <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
            {status === 'saving' ? 'Saving…' : '↑ Save All'}
          </button>
        </div>
      </div>

      {status === 'saved' && <div className="admin-alert success">✓ Services saved.</div>}
      {status === 'error'  && <div className="admin-alert error">Save failed.</div>}

      {services.map((svc, i) => (
        <div key={i} className="admin-item-card">
          <div className="admin-item-card-header">
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, color: '#1e2d3d' }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {expanded === i ? '▾' : '▸'} {svc.title || '(Untitled Service)'}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.78rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <input
                  type="checkbox"
                  checked={svc.published}
                  onChange={e => update(i, 'published', e.target.checked)}
                />
                Published
              </label>
              <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => removeService(i)}>✕</button>
            </div>
          </div>

          {expanded === i && (
            <div>
              <div className="admin-grid-2">
                <div className="admin-field">
                  <label className="admin-label">Title</label>
                  <input className="admin-input" value={svc.title} onChange={e => update(i, 'title', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Slug <span>URL key</span></label>
                  <input className="admin-input" value={svc.slug} onChange={e => update(i, 'slug', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Icon <span>emoji or SVG name</span></label>
                  <input className="admin-input" value={svc.icon || ''} onChange={e => update(i, 'icon', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Display Order</label>
                  <input type="number" className="admin-input" value={svc.display_order} onChange={e => update(i, 'display_order', Number(e.target.value))} />
                </div>
              </div>
              <div className="admin-field">
                <label className="admin-label">Tagline</label>
                <input className="admin-input" value={svc.tagline || ''} onChange={e => update(i, 'tagline', e.target.value)} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Short Description <span>for cards</span></label>
                <textarea className="admin-textarea" rows={2} value={svc.short_description || ''} onChange={e => update(i, 'short_description', e.target.value)} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Full Description</label>
                <textarea className="admin-textarea" rows={5} value={svc.description || ''} onChange={e => update(i, 'description', e.target.value)} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
