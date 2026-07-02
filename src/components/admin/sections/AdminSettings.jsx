import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase';
import { useAuth } from '../../../context/AuthContext';

export default function AdminSettings() {
  const { user } = useAuth();
  const [admins, setAdmins] = useState([]);
  const [newEmail, setNewEmail] = useState('');
  const [newName,  setNewName]  = useState('');
  const [loading,  setLoading]  = useState(true);
  const [status,   setStatus]   = useState('idle');

  useEffect(() => {
    supabase.from('admin_users').select('*').order('created_at')
      .then(({ data }) => { if (data) setAdmins(data); setLoading(false); });
  }, []);

  const addAdmin = async () => {
    if (!newEmail.trim()) return;
    setStatus('saving');
    const { data, error } = await supabase
      .from('admin_users')
      .insert({ email: newEmail.trim(), full_name: newName.trim() || null })
      .select().single();
    if (!error && data) { setAdmins(prev => [...prev, data]); setNewEmail(''); setNewName(''); }
    setStatus('idle');
  };

  const toggleActive = async (id, current) => {
    const { data } = await supabase
      .from('admin_users')
      .update({ is_active: !current })
      .eq('id', id)
      .select().single();
    if (data) setAdmins(prev => prev.map(a => a.id === id ? data : a));
  };

  const removeAdmin = async (id) => {
    await supabase.from('admin_users').delete().eq('id', id);
    setAdmins(prev => prev.filter(a => a.id !== id));
  };

  if (loading) return <div className="admin-loading">Loading settings…</div>;

  return (
    <div>
      <div className="admin-topbar">
        <h1 className="admin-page-title">Admin Settings</h1>
      </div>

      {/* Current user info */}
      <div className="admin-card">
        <div className="admin-card-title">Signed In As</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {user?.photoURL && <img src={user.photoURL} alt="" style={{ width: 40, height: 40, borderRadius: '50%' }} />}
          <div>
            <div style={{ fontWeight: 600, color: '#1e2d3d' }}>{user?.displayName}</div>
            <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>{user?.email}</div>
          </div>
        </div>
      </div>

      {/* Admin users */}
      <div className="admin-card">
        <div className="admin-card-title">Authorised Admin Users</div>
        <p style={{ fontSize: '0.82rem', color: '#6b7280', marginBottom: '1.2rem', lineHeight: 1.6 }}>
          Only Google accounts listed here can sign into the admin panel. Add a Google email address and it will be able to sign in immediately.
        </p>

        {/* Add form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '0.75rem', marginBottom: '1.5rem', alignItems: 'end' }}>
          <div className="admin-field" style={{ marginBottom: 0 }}>
            <label className="admin-label">Email Address</label>
            <input className="admin-input" type="email" placeholder="admin@gmail.com" value={newEmail} onChange={e => setNewEmail(e.target.value)} />
          </div>
          <div className="admin-field" style={{ marginBottom: 0 }}>
            <label className="admin-label">Full Name <span>optional</span></label>
            <input className="admin-input" placeholder="Display name" value={newName} onChange={e => setNewName(e.target.value)} />
          </div>
          <button className="admin-btn admin-btn-primary" onClick={addAdmin} disabled={!newEmail.trim() || status === 'saving'}>
            + Add
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Status</th><th>Added</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {admins.map(a => (
                <tr key={a.id}>
                  <td style={{ fontWeight: 500 }}>{a.full_name || '—'}</td>
                  <td>{a.email}</td>
                  <td>
                    <span className="admin-status-badge" style={{
                      background: a.is_active ? 'rgba(22,163,74,0.1)' : 'rgba(220,38,38,0.08)',
                      color: a.is_active ? '#15803d' : '#dc2626',
                      border: `1px solid ${a.is_active ? 'rgba(22,163,74,0.2)' : 'rgba(220,38,38,0.2)'}`,
                    }}>
                      {a.is_active ? '● Active' : '○ Disabled'}
                    </span>
                  </td>
                  <td style={{ color: '#9ca3af', fontSize: '0.78rem' }}>
                    {new Date(a.created_at).toLocaleDateString('en-IN')}
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <button
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={() => toggleActive(a.id, a.is_active)}
                        disabled={a.email === user?.email}
                        title={a.email === user?.email ? 'Cannot deactivate your own account' : ''}
                      >
                        {a.is_active ? 'Disable' : 'Enable'}
                      </button>
                      <button
                        className="admin-btn admin-btn-danger admin-btn-sm"
                        onClick={() => removeAdmin(a.id)}
                        disabled={a.email === user?.email}
                        title={a.email === user?.email ? 'Cannot remove your own account' : ''}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Supabase project info */}
      <div className="admin-card">
        <div className="admin-card-title">Database Info</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { label: 'Supabase Project', value: 'fyrgcdhmhwevzbaicdbs' },
            { label: 'Region', value: 'ap-south-1 (Mumbai)' },
            { label: 'Tables', value: 'site_settings, services, team_members, articles, contact_inquiries, admin_users' },
            { label: 'Dashboard', value: <a href="https://supabase.com/dashboard/project/fyrgcdhmhwevzbaicdbs" target="_blank" rel="noopener noreferrer" style={{ color: '#1e2d3d', textDecoration: 'underline' }}>Open Supabase ↗</a> },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>{label}</div>
              <div style={{ fontSize: '0.85rem', color: '#374151' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
