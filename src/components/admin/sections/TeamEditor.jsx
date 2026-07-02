import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase';

const emptyMember = () => ({
  slug: '', name: '', role: 'Advocate', phone: '', email: '',
  photo_url: '', bio: '', long_bio: '',
  specialties: [], qualifications: [],
  display_order: 0, published: true,
});

export default function TeamEditor() {
  const [members, setMembers] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [status, setStatus] = useState('idle');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('team_members').select('*').order('display_order').then(({ data }) => {
      if (data) setMembers(data);
      setLoading(false);
    });
  }, []);

  const update = (i, key, val) =>
    setMembers(prev => prev.map((m, j) => j === i ? { ...m, [key]: val } : m));

  const addMember = () => {
    setMembers(prev => [...prev, emptyMember()]);
    setExpanded(members.length);
  };

  const removeMember = async (i) => {
    const m = members[i];
    if (m.id) await supabase.from('team_members').delete().eq('id', m.id);
    setMembers(prev => prev.filter((_, j) => j !== i));
    if (expanded === i) setExpanded(null);
  };

  const handleSave = async () => {
    setStatus('saving');
    for (const m of members) {
      const { id, created_at, updated_at, ...rest } = m;
      if (id) {
        await supabase.from('team_members').update(rest).eq('id', id);
      } else {
        await supabase.from('team_members').insert(rest);
      }
    }
    const { data } = await supabase.from('team_members').select('*').order('display_order');
    if (data) setMembers(data);
    setStatus('saved');
    setTimeout(() => setStatus('idle'), 2500);
  };

  const ArrayField = ({ mi, field, label, placeholder }) => {
    const arr = members[mi][field] || [];
    return (
      <div className="admin-field">
        <label className="admin-label">{label}</label>
        {arr.map((val, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <input className="admin-input" value={val} placeholder={placeholder}
              onChange={e => {
                const next = [...arr]; next[idx] = e.target.value;
                update(mi, field, next);
              }} />
            <button className="admin-btn-icon" onClick={() => update(mi, field, arr.filter((_, j) => j !== idx))}>✕</button>
          </div>
        ))}
        <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => update(mi, field, [...arr, ''])}>+ Add</button>
      </div>
    );
  };

  if (loading) return <div className="admin-loading">Loading team…</div>;

  return (
    <div>
      <div className="admin-topbar">
        <h1 className="admin-page-title">Team Members</h1>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="admin-btn admin-btn-secondary" onClick={addMember}>+ Add Member</button>
          <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
            {status === 'saving' ? 'Saving…' : '↑ Save All'}
          </button>
        </div>
      </div>

      {status === 'saved' && <div className="admin-alert success">✓ Team saved.</div>}
      {status === 'error'  && <div className="admin-alert error">Save failed.</div>}

      {members.map((m, mi) => (
        <div key={mi} className="admin-item-card">
          <div className="admin-item-card-header">
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, color: '#1e2d3d' }}
              onClick={() => setExpanded(expanded === mi ? null : mi)}
            >
              {expanded === mi ? '▾' : '▸'} {m.name || '(Unnamed Member)'}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.78rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <input type="checkbox" checked={m.published}
                  onChange={e => update(mi, 'published', e.target.checked)} />
                Published
              </label>
              <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => removeMember(mi)}>✕</button>
            </div>
          </div>

          {expanded === mi && (
            <div>
              <div className="admin-grid-2">
                <div className="admin-field">
                  <label className="admin-label">Name</label>
                  <input className="admin-input" value={m.name} onChange={e => update(mi, 'name', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Slug</label>
                  <input className="admin-input" value={m.slug} onChange={e => update(mi, 'slug', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Role / Title</label>
                  <input className="admin-input" value={m.role || ''} onChange={e => update(mi, 'role', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Display Order</label>
                  <input type="number" className="admin-input" value={m.display_order}
                    onChange={e => update(mi, 'display_order', Number(e.target.value))} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Phone</label>
                  <input className="admin-input" value={m.phone || ''} onChange={e => update(mi, 'phone', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Email</label>
                  <input className="admin-input" value={m.email || ''} onChange={e => update(mi, 'email', e.target.value)} />
                </div>
              </div>
              <div className="admin-field">
                <label className="admin-label">Photo URL</label>
                <input className="admin-input" value={m.photo_url || ''} onChange={e => update(mi, 'photo_url', e.target.value)} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Short Bio <span>shown on team card</span></label>
                <textarea className="admin-textarea" rows={2} value={m.bio || ''} onChange={e => update(mi, 'bio', e.target.value)} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Long Bio <span>shown on profile page</span></label>
                <textarea className="admin-textarea" rows={5} value={m.long_bio || ''} onChange={e => update(mi, 'long_bio', e.target.value)} />
              </div>
              <ArrayField mi={mi} field="specialties" label="Specialties" placeholder="e.g. Corporate Law" />
              <ArrayField mi={mi} field="qualifications" label="Qualifications" placeholder="e.g. LLB, Gujarat University" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
