import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../../supabase';

const emptyArticle = () => ({
  slug: '', title: '', category: '', summary: '',
  content: '', cover_url: '', published: false, published_at: null,
});

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ArticlesEditor({ newMode }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // List mode when no id and not newMode
  const isListMode = !id && !newMode;

  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState(emptyArticle());
  const [status, setStatus] = useState('idle');
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (isListMode) {
      supabase.from('articles').select('id, slug, title, category, published, created_at').order('created_at', { ascending: false })
        .then(({ data }) => { if (data) setArticles(data); setLoading(false); });
    } else if (id) {
      supabase.from('articles').select('*').eq('id', id).maybeSingle()
        .then(({ data }) => { if (data) setForm(data); setLoading(false); });
    } else {
      setLoading(false);
    }
  }, [isListMode, id]);

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSave = async (publish = false) => {
    setStatus('saving');
    const payload = {
      ...form,
      published: publish ? true : form.published,
      published_at: publish && !form.published_at ? new Date().toISOString() : form.published_at,
    };
    const { id: fid, created_at, updated_at, ...rest } = payload;
    let error;
    if (fid) {
      ({ error } = await supabase.from('articles').update(rest).eq('id', fid));
    } else {
      const { error: e, data } = await supabase.from('articles').insert(rest).select().single();
      error = e;
      if (data) navigate(`/admin/articles/${data.id}`, { replace: true });
    }
    if (error) { setStatus('error'); setTimeout(() => setStatus('idle'), 3000); return; }
    setStatus('saved');
    setTimeout(() => setStatus('idle'), 2500);
  };

  const handleDelete = async (artId) => {
    await supabase.from('articles').delete().eq('id', artId);
    setArticles(prev => prev.filter(a => a.id !== artId));
    setDeleteId(null);
  };

  // ── List mode ──
  if (isListMode) {
    if (loading) return <div className="admin-loading">Loading articles…</div>;
    return (
      <div>
        <div className="admin-topbar">
          <h1 className="admin-page-title">Articles / Blog</h1>
          <a href="/admin/articles/new" className="admin-btn admin-btn-primary">+ New Article</a>
        </div>

        {articles.length === 0 ? (
          <div className="admin-card" style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📄</div>
            <p>No articles yet. Create your first one.</p>
          </div>
        ) : (
          <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Title</th><th>Category</th><th>Status</th><th>Date</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((a) => (
                    <tr key={a.id}>
                      <td style={{ fontWeight: 500 }}>{a.title}</td>
                      <td>{a.category || '—'}</td>
                      <td>
                        <span className="admin-status-badge" style={{
                          background: a.published ? 'rgba(22,163,74,0.1)' : 'rgba(107,114,128,0.1)',
                          color: a.published ? '#16a34a' : '#6b7280',
                          border: `1px solid ${a.published ? 'rgba(22,163,74,0.2)' : 'rgba(107,114,128,0.2)'}`,
                        }}>
                          {a.published ? '● Published' : '○ Draft'}
                        </span>
                      </td>
                      <td style={{ color: '#9ca3af', fontSize: '0.78rem' }}>
                        {new Date(a.created_at).toLocaleDateString('en-IN')}
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <a href={`/admin/articles/${a.id}`} className="admin-btn admin-btn-secondary admin-btn-sm">Edit</a>
                          {deleteId === a.id ? (
                            <>
                              <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => handleDelete(a.id)}>Confirm</button>
                              <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => setDeleteId(null)}>Cancel</button>
                            </>
                          ) : (
                            <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setDeleteId(a.id)}>Delete</button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── Editor mode ──
  if (loading) return <div className="admin-loading">Loading…</div>;

  return (
    <div>
      <div className="admin-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="/admin/articles" className="admin-btn admin-btn-secondary admin-btn-sm">← Back</a>
          <h1 className="admin-page-title">{form.id ? 'Edit Article' : 'New Article'}</h1>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="admin-btn admin-btn-secondary" onClick={() => handleSave(false)} disabled={status === 'saving'}>
            {status === 'saving' ? 'Saving…' : '💾 Save Draft'}
          </button>
          <button className="admin-btn admin-btn-primary" onClick={() => handleSave(true)} disabled={status === 'saving'}>
            {status === 'saving' ? 'Publishing…' : '↑ Publish'}
          </button>
        </div>
      </div>

      {status === 'saved' && <div className="admin-alert success">✓ Saved.</div>}
      {status === 'error'  && <div className="admin-alert error">Save failed.</div>}

      <div className="admin-card">
        <div className="admin-card-title">Article Details</div>
        <div className="admin-field">
          <label className="admin-label">Title</label>
          <input className="admin-input" value={form.title} onChange={e => {
            set('title', e.target.value);
            if (!form.id) set('slug', slugify(e.target.value));
          }} />
        </div>
        <div className="admin-grid-2">
          <div className="admin-field">
            <label className="admin-label">Slug <span>auto-generated from title</span></label>
            <input className="admin-input" value={form.slug} onChange={e => set('slug', e.target.value)} />
          </div>
          <div className="admin-field">
            <label className="admin-label">Category</label>
            <input className="admin-input" placeholder="e.g. Corporate Law, Family Law" value={form.category || ''} onChange={e => set('category', e.target.value)} />
          </div>
        </div>
        <div className="admin-field">
          <label className="admin-label">Cover Image URL</label>
          <input className="admin-input" placeholder="https://… or /images/…" value={form.cover_url || ''} onChange={e => set('cover_url', e.target.value)} />
        </div>
        <div className="admin-field">
          <label className="admin-label">Summary <span>shown on article card</span></label>
          <textarea className="admin-textarea" rows={2} value={form.summary || ''} onChange={e => set('summary', e.target.value)} />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-title">Content <span style={{ fontWeight: 400, fontSize: '0.75rem', color: '#9ca3af' }}>Markdown supported</span></div>
        <textarea
          className="admin-textarea"
          rows={24}
          style={{ fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 1.7 }}
          value={form.content}
          onChange={e => set('content', e.target.value)}
          placeholder="Write your article in Markdown…"
        />
      </div>
    </div>
  );
}
