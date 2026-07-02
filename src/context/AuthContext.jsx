/**
 * AuthContext — wraps Supabase Auth and exposes { user, loading }.
 * Also checks the admin_users table to verify the signed-in email
 * is an active admin. Non-admins are signed out automatically.
 */
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      await handleSession(session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        await handleSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  async function handleSession(session) {
    if (!session?.user) {
      setUser(null);
      setLoading(false);
      return;
    }

    const email = session.user.email;

    // Check admin_users table
    const { data } = await supabase
      .from('admin_users')
      .select('id, is_active')
      .eq('email', email)
      .maybeSingle();

    if (!data || !data.is_active) {
      await supabase.auth.signOut();
      setUser(null);
    } else {
      setUser(session.user);
    }

    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
