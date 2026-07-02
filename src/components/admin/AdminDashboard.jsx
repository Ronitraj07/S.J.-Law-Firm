import { useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import { useAuth } from '../../context/AuthContext';
import '../../styles/admin.css';

import DashboardOverview from './sections/DashboardOverview';
import HeroEditor        from './sections/HeroEditor';
import ApproachEditor   from './sections/ApproachEditor';
import ServicesEditor   from './sections/ServicesEditor';
import TeamEditor       from './sections/TeamEditor';
import ContactEditor    from './sections/ContactEditor';
import SeoEditor        from './sections/SeoEditor';
import ArticlesEditor   from './sections/ArticlesEditor';
import InquiriesViewer  from './sections/InquiriesViewer';
import AdminSettings    from './sections/AdminSettings';

const NAV_GROUPS = [
  {
    label: 'Overview',
    items: [{ path: '', label: 'Dashboard', icon: '▦' }],
  },
  {
    label: 'Website Content',
    items: [
      { path: 'hero',     label: 'Hero Section', icon: '⬛' },
      { path: 'approach', label: 'Our Approach',  icon: '≡'  },
      { path: 'services', label: 'Services',      icon: '⚖'  },
      { path: 'team',     label: 'Team Members',  icon: '👤' },
      { path: 'contact',  label: 'Contact Info',  icon: '✉'  },
      { path: 'seo',      label: 'SEO & Meta',    icon: '🔍' },
    ],
  },
  {
    label: 'Database',
    items: [
      { path: 'articles',  label: 'Articles / Blog',  icon: '📄' },
      { path: 'inquiries', label: 'Contact Inquiries', icon: '📥' },
    ],
  },
  {
    label: 'System',
    items: [{ path: 'settings', label: 'Admin Settings', icon: '⚙' }],
  },
];

export default function AdminDashboard() {
  const { user }   = useAuth();
  const navigate   = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  // Supabase user metadata (from Google OAuth)
  const displayName = user?.user_metadata?.full_name || user?.email;
  const photoURL    = user?.user_metadata?.avatar_url;
  const email       = user?.email;

  return (
    <div className="admin-wrap">
      {mobileOpen && (
        <div
          className="admin-mobile-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`admin-sidebar${mobileOpen ? ' open' : ''}`}>
        <div className="admin-sidebar-header">
          <span className="admin-sidebar-logo">S.J. Law Firm</span>
          <span className="admin-sidebar-title">Admin Panel</span>
        </div>

        <nav className="admin-nav">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <div className="admin-nav-label">{group.label}</div>
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={`/admin/${item.path}`}
                  end={item.path === ''}
                  className={({ isActive }) =>
                    `admin-nav-btn${isActive ? ' active' : ''}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user">
            {photoURL && (
              <img
                src={photoURL}
                alt={displayName || 'Admin'}
                className="admin-user-avatar"
              />
            )}
            <div className="admin-user-info">
              <div className="admin-user-name">{displayName}</div>
              <div className="admin-user-email">{email}</div>
            </div>
          </div>
          <button onClick={handleSignOut} className="admin-signout-btn">
            ⏻ Sign Out
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-mobile-topbar">
          <button
            className="admin-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
          <span style={{ fontWeight: 600, color: '#1e2d3d', fontSize: '0.9rem' }}>
            Admin Panel
          </span>
          <div />
        </div>

        <Routes>
          <Route index              element={<DashboardOverview />} />
          <Route path="hero"        element={<HeroEditor />} />
          <Route path="approach"    element={<ApproachEditor />} />
          <Route path="services"    element={<ServicesEditor />} />
          <Route path="team"        element={<TeamEditor />} />
          <Route path="contact"     element={<ContactEditor />} />
          <Route path="seo"         element={<SeoEditor />} />
          <Route path="articles"    element={<ArticlesEditor />} />
          <Route path="articles/new"  element={<ArticlesEditor newMode />} />
          <Route path="articles/:id"  element={<ArticlesEditor />} />
          <Route path="inquiries"   element={<InquiriesViewer />} />
          <Route path="settings"    element={<AdminSettings />} />
        </Routes>
      </main>
    </div>
  );
}
