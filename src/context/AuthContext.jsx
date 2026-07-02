/**
 * AuthContext — wraps Firebase Auth and exposes { user, loading }.
 * Also checks the Supabase admin_users table to verify the signed-in email
 * is an active admin. Non-admins are signed out automatically.
 */
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { supabase } from '../supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]     = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      // Check Supabase admin_users table
      const { data } = await supabase
        .from('admin_users')
        .select('id, is_active')
        .eq('email', firebaseUser.email)
        .maybeSingle();

      if (!data || !data.is_active) {
        // Not an active admin — boot them out
        await signOut(auth);
        setUser(null);
      } else {
        setUser(firebaseUser);
      }

      setLoading(false);
    });

    return unsub;
  }, []);

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
