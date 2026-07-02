import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: '#1e2d3d',
      }}>
        <div style={{ color: '#C9A14A', fontSize: '0.85rem', letterSpacing: '0.12em', fontWeight: 600 }}>
          LOADING…
        </div>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
}
