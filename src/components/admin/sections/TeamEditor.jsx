import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useContent } from '../../../context/ContentContext';

const emptyMember = () => ({
  slug: '',
  name: '',
  role: 'Advocate',
  phone: '',
  email: '',
  photo: '',
  yearsOfPractice: 0,
  barCouncil: { name: '', enrollmentNumber: '' },
  education: [{ degree: '', institution: '', year: '' }],
  courts: [''],
  practiceAreas: [''],
  bio: '',
});

function TeamEditor() {
  const { team } = useContent();
  const [members, setMembers] = useState(team.map(m => ({
    ...m,
    courts: [...(m.courts || [])],
    practiceAreas: [...(m.practiceAreas || [])],
    education: (m.education || []).map(e => ({ ...e })),
    barCouncil: { ...(m.barCouncil || {}) },
  })));
  const [expanded, setExpanded] = useState(0);
  const [status, setStatus] = useState('idle');

  const updateMember = (mi, key, val) => {
    setMembers(prev => prev.map((m, i) => i === mi ? { ...m, [key]: val } : m));
  };

  const updateNested = (mi, key, subKey, val) => {
    setMembers(prev => prev.map((m, i) => i === mi ? { ...m, [key]: { ...m[key], [subKey]: val } } : m));
  };

  const updateArrayItem = (mi, key, index, val) => {
    setMembers(prev => prev.map((m, i) => {
      if (i !== mi) return m;
      const arr = [...m[key]];
      arr[index] = val;
      return { ...m, [key]: arr };
    }));
  };

  const addArrayItem = (mi, key, emptyVal) => {
    setMembers(prev => prev.map((m, i) => i === mi ? { ...m, [key]: [...m[key], emptyVal] } : m));
  };

  const removeArrayItem = (mi, key, index) => {
    setMembers(prev => prev.map((m, i) => i === mi ? { ...m, [key]: m[key].filter((_, j) => j !== index) } : m));
  };

  const updateEdu = (mi, ei, key, val) => {
    setMembers(prev => prev.map((m, i) => {
      if (i !== mi) return m;
      const edu = m.education.map((e, j) => j === ei ? { ...e, [key]: val } : e);
      return { ...m, education: edu };
    }));
  };

  const handleSave = async () => {
    setStatus('saving');
    try {
      await setDoc(doc(db, 'content', 'team'), { value: members });
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div>
      {status === 'saved' && <div className="admin-alert success">\u2713 Team saved and live.</div>}
      {status === 'error' && <div className="admin-alert error">Save failed.</div>}

      {members.map((m, mi) => (
        <div key={mi} className="admin-item-card">
          <div className="admin-item-card-header">
            <button
              style={{ cursor: 'pointer', background: 'none', border: 'none', textAlign: 'left', font: 'inherit', color: 'var(--navy)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              onClick={() => setExpanded(expanded === mi ? null : mi)}
            >
              {expanded === mi ? '\u25bc' : '\u25ba'} {m.name || `Member ${mi + 1}`}
            </button>
            <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setMembers(prev => prev.filter((_, i) => i !== mi))}>Remove</button>
          </div>

          {expanded === mi && (
            <>
              <div className="admin-grid-2">
                <div className="admin-field">
                  <label className="admin-label">Full Name</label>
                  <input className="admin-input" value={m.name} onChange={e => updateMember(mi, 'name', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Slug</label>
                  <input className="admin-input" value={m.slug} onChange={e => updateMember(mi, 'slug', e.target.value.toLowerCase().replace(/\s+/g, '-'))} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Role</label>
                  <input className="admin-input" value={m.role} onChange={e => updateMember(mi, 'role', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Years of Practice</label>
                  <input className="admin-input" type="number" value={m.yearsOfPractice} onChange={e => updateMember(mi, 'yearsOfPractice', Number(e.target.value))} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Phone</label>
                  <input className="admin-input" value={m.phone} onChange={e => updateMember(mi, 'phone', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Email</label>
                  <input className="admin-input" type="email" value={m.email} onChange={e => updateMember(mi, 'email', e.target.value)} />
                </div>
                <div className="admin-field" style={{ gridColumn: '1 / -1' }}>
                  <label className="admin-label">Photo URL <span>/team/filename.jpg or full URL</span></label>
                  <input className="admin-input" value={m.photo} onChange={e => updateMember(mi, 'photo', e.target.value)} />
                </div>
              </div>

              <div className="admin-field">
                <label className="admin-label">Bio</label>
                <textarea className="admin-textarea" value={m.bio} onChange={e => updateMember(mi, 'bio', e.target.value)} rows={4} />
              </div>

              <div className="admin-divider" />
              <p className="admin-card-title" style={{ marginBottom: '0.8rem' }}>Bar Council</p>
              <div className="admin-grid-2">
                <div className="admin-field">
                  <label className="admin-label">Bar Council Name</label>
                  <input className="admin-input" value={m.barCouncil.name} onChange={e => updateNested(mi, 'barCouncil', 'name', e.target.value)} />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Enrollment Number</label>
                  <input className="admin-input" value={m.barCouncil.enrollmentNumber} onChange={e => updateNested(mi, 'barCouncil', 'enrollmentNumber', e.target.value)} />
                </div>
              </div>

              <div className="admin-divider" />
              <p className="admin-card-title" style={{ marginBottom: '0.8rem' }}>Education</p>
              {m.education.map((edu, ei) => (
                <div key={ei} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '0.5rem', marginBottom: '0.6rem', alignItems: 'end' }}>
                  <div>
                    <label className="admin-label">Degree</label>
                    <input className="admin-input" value={edu.degree} onChange={e => updateEdu(mi, ei, 'degree', e.target.value)} />
                  </div>
                  <div>
                    <label className="admin-label">Institution</label>
                    <input className="admin-input" value={edu.institution} onChange={e => updateEdu(mi, ei, 'institution', e.target.value)} />
                  </div>
                  <button className="admin-btn-icon" onClick={() => removeArrayItem(mi, 'education', ei)}>\u2715</button>
                </div>
              ))}
              <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => addArrayItem(mi, 'education', { degree: '', institution: '', year: '' })}>+ Add Degree</button>

              <div className="admin-divider" />
              <div className="admin-field">
                <label className="admin-label">Practice Areas</label>
                {m.practiceAreas.map((pa, pi) => (
                  <div key={pi} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <input className="admin-input" value={pa} onChange={e => updateArrayItem(mi, 'practiceAreas', pi, e.target.value)} />
                    <button className="admin-btn-icon" onClick={() => removeArrayItem(mi, 'practiceAreas', pi)}>\u2715</button>
                  </div>
                ))}
                <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => addArrayItem(mi, 'practiceAreas', '')}>+ Add Area</button>
              </div>

              <div className="admin-field">
                <label className="admin-label">Courts</label>
                {m.courts.map((c, ci) => (
                  <div key={ci} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <input className="admin-input" value={c} onChange={e => updateArrayItem(mi, 'courts', ci, e.target.value)} />
                    <button className="admin-btn-icon" onClick={() => removeArrayItem(mi, 'courts', ci)}>\u2715</button>
                  </div>
                ))}
                <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => addArrayItem(mi, 'courts', '')}>+ Add Court</button>
              </div>
            </>
          )}
        </div>
      ))}

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button className="admin-btn admin-btn-secondary" onClick={() => { setMembers(prev => [...prev, emptyMember()]); setExpanded(members.length); }}>+ Add Team Member</button>
      </div>

      <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={status === 'saving'}>
        {status === 'saving' ? 'Saving\u2026' : 'Save All Team Members'}
      </button>
    </div>
  );
}

export default TeamEditor;
