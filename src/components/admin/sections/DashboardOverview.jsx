import { useEffect, useState } from 'react';
import { supabase } from '../../../supabase';

function StatCard({ label, value, sub, color }) {
  return (
    <div className="admin-stat-card">
      <div className="admin-stat-label">{label}</div>
      <div className="admin-stat-value" style={{ color }}>{value}</div>
      {sub && <div className="admin-stat-sub">{sub}</div>}
    </div>
  );
}

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    services: 0, team: 0, articles: 0, published_articles: 0,
    inquiries: 0, new_inquiries: 0,
  });
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [
        { count: services },
        { count: team },
        { count: articles },
        { count: published_articles },
        { count: inquiries },
        { count: new_inquiries },
        { data: recent },
      ] = await Promise.all([
        supabase.from('services').select('*', { count: 'exact', head: true }),
        supabase.from('team_members').select('*', { count: 'exact', head: true }),
        supabase.from('articles').select('*', { count: 'exact', head: true }),
        supabase.from('articles').select('*', { count: 'exact', head: true }).eq('published', true),
        supabase.from('contact_inquiries').select('*', { count: 'exact', head: true }),
        supabase.from('contact_inquiries').select('*', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('contact_inquiries').select('*').order('created_at', { ascending: false }).limit(5),
      ]);
      setStats({ services, team, articles, published_articles, inquiries, new_inquiries });
      setRecentInquiries(recent || []);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div className="admin-loading">Loading dashboard…</div>;

  const statusColor = { new: '#c9a14a', read: '#6b7280', replied: '#16a34a', archived: '#9ca3af' };

  return (
    <div>
      <div className="admin-topbar">
        <h1 className="admin-page-title">Dashboard</h1>
        <span className="admin-badge live">● Live</span>
      </div>

      {/* Stats grid */}
      <div className="admin-stats-grid">
        <StatCard label="Services" value={stats.services} sub="total" />
        <StatCard label="Team Members" value={stats.team} sub="published" />
        <StatCard
          label="Articles"
          value={stats.articles}
          sub={`${stats.published_articles} published`}
        />
        <StatCard
          label="Inquiries"
          value={stats.inquiries}
          sub={`${stats.new_inquiries} new`}
          color={stats.new_inquiries > 0 ? '#c9a14a' : undefined}
        />
      </div>

      {/* Recent inquiries */}
      <div className="admin-card">
        <div className="admin-card-title">Recent Contact Inquiries</div>
        {recentInquiries.length === 0 ? (
          <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>No inquiries yet.</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th><th>Email</th><th>Case Type</th>
                  <th>Status</th><th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentInquiries.map((inq) => (
                  <tr key={inq.id}>
                    <td>{inq.from_name}</td>
                    <td>{inq.user_email}</td>
                    <td>{inq.case_type || '—'}</td>
                    <td>
                      <span className="admin-status-badge" style={{ background: statusColor[inq.status] + '22', color: statusColor[inq.status], border: `1px solid ${statusColor[inq.status]}44` }}>
                        {inq.status}
                      </span>
                    </td>
                    <td style={{ color: '#9ca3af', fontSize: '0.78rem' }}>
                      {new Date(inq.created_at).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Quick links */}
      <div className="admin-card">
        <div className="admin-card-title">Quick Links</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {[
            { href: '/', label: '↗ View Live Site' },
            { href: '/admin/articles', label: '✎ Write Article' },
            { href: '/admin/inquiries', label: '📥 View Inquiries' },
            { href: '/admin/team', label: '👤 Edit Team' },
            { href: '/admin/services', label: '⚖ Edit Services' },
          ].map((l) => (
            <a key={l.href} href={l.href}
              target={l.href.startsWith('/admin') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="admin-btn admin-btn-secondary admin-btn-sm">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
