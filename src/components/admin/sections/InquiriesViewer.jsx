import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase';

const STATUS_OPTIONS = ['new', 'read', 'replied', 'archived'];
const STATUS_COLORS  = {
  new:      { bg: 'rgba(201,161,74,0.12)', color: '#92400e', border: 'rgba(201,161,74,0.3)' },
  read:     { bg: 'rgba(107,114,128,0.1)', color: '#374151', border: 'rgba(107,114,128,0.2)' },
  replied:  { bg: 'rgba(22,163,74,0.1)',   color: '#15803d', border: 'rgba(22,163,74,0.2)' },
  archived: { bg: 'rgba(156,163,175,0.1)', color: '#9ca3af', border: 'rgba(156,163,175,0.2)' },
};

export default function InquiriesViewer() {
  const [inquiries, setInquiries] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInquiries();
  }, []);

  async function loadInquiries() {
    const { data } = await supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setInquiries(data);
    setLoading(false);
  }

  const updateStatus = async (id, newStatus) => {
    await supabase.from('contact_inquiries').update({ status: newStatus }).eq('id', id);
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
    if (selected?.id === id) setSelected(prev => ({ ...prev, status: newStatus }));
  };

  const openInquiry = async (inq) => {
    setSelected(inq);
    if (inq.status === 'new') await updateStatus(inq.id, 'read');
  };

  const filtered = filter === 'all' ? inquiries : inquiries.filter(i => i.status === filter);
  const counts = STATUS_OPTIONS.reduce((acc, s) => {
    acc[s] = inquiries.filter(i => i.status === s).length; return acc;
  }, {});

  if (loading) return <div className="admin-loading">Loading inquiries…</div>;

  return (
    <div>
      <div className="admin-topbar">
        <h1 className="admin-page-title">Contact Inquiries</h1>
        <span className="admin-badge live">{inquiries.filter(i => i.status === 'new').length} New</span>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {['all', ...STATUS_OPTIONS].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`admin-btn admin-btn-sm ${filter === f ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f !== 'all' && (
              <span style={{
                marginLeft: '0.3rem', background: 'rgba(255,255,255,0.2)',
                borderRadius: '20px', padding: '0 0.35rem', fontSize: '0.7rem'
              }}>{counts[f] || 0}</span>
            )}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : '1fr', gap: '1.25rem' }}>
        {/* List */}
        <div>
          {filtered.length === 0 ? (
            <div className="admin-card" style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📥</div>
              <p>No inquiries in this category.</p>
            </div>
          ) : (
            filtered.map((inq) => {
              const sc = STATUS_COLORS[inq.status];
              return (
                <div
                  key={inq.id}
                  className="admin-item-card"
                  style={{
                    cursor: 'pointer',
                    borderColor: selected?.id === inq.id ? '#1e2d3d' : undefined,
                    borderWidth: selected?.id === inq.id ? 2 : undefined,
                  }}
                  onClick={() => openInquiry(inq)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <div style={{ fontWeight: 600, color: '#1e2d3d', fontSize: '0.9rem' }}>{inq.from_name}</div>
                      <div style={{ color: '#6b7280', fontSize: '0.78rem' }}>{inq.user_email}</div>
                      {inq.case_type && <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.2rem' }}>{inq.case_type}</div>}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                      <span className="admin-status-badge" style={{ background: sc.bg, color: sc.color, border: `1px solid ${sc.border}` }}>
                        {inq.status}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>
                        {new Date(inq.created_at).toLocaleDateString('en-IN')}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#6b7280', marginTop: '0.5rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {inq.message}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Detail panel */}
        {selected && (
          <div className="admin-card" style={{ position: 'sticky', top: '1rem', alignSelf: 'start' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#1e2d3d', fontSize: '1rem' }}>
                {selected.from_name}
              </h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: '#9ca3af' }}
                onClick={() => setSelected(null)}>✕</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.82rem' }}><span style={{ color: '#9ca3af' }}>Email: </span>{selected.user_email}</div>
              {selected.case_type && <div style={{ fontSize: '0.82rem' }}><span style={{ color: '#9ca3af' }}>Case type: </span>{selected.case_type}</div>}
              <div style={{ fontSize: '0.82rem' }}><span style={{ color: '#9ca3af' }}>Received: </span>{new Date(selected.created_at).toLocaleString('en-IN')}</div>
            </div>

            <div className="admin-divider" />

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Message</div>
              <p style={{ fontSize: '0.88rem', color: '#374151', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{selected.message}</p>
            </div>

            <div className="admin-divider" />

            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>Update Status</div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {STATUS_OPTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => updateStatus(selected.id, s)}
                    className={`admin-btn admin-btn-sm ${selected.status === s ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${selected.user_email}?subject=Re: Your enquiry — S. %26 J. Associates`}
              className="admin-btn admin-btn-primary"
              style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
            >
              ✉ Reply by Email
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
