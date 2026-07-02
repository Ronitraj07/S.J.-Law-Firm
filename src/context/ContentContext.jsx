/**
 * ContentContext — loads all site content from Supabase (site_settings,
 * services, team_members tables). Falls back to static defaults if offline.
 */
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { services as defaultServices } from '../data/services';
import { teamMembers as defaultTeam } from '../data/team';

const ContentContext = createContext(null);

export const defaultHero = {
  tagline: 'S. & J. Associates · Vadodara',
  heading: 'Client‑focused, practical & result‑driven legal solutions.',
  subheading:
    'We assist individuals and businesses with clear advice, strong representation and reliable legal support in contentious and non‑contentious matters.',
  ctaPrimary: 'Book a Consultation',
  ctaSecondary: 'Our Practice Areas',
};

export const defaultApproach = [
  { step: '01', title: 'Initial Consultation', desc: 'We listen to your matter in full, ask clarifying questions and give you an honest initial assessment of your legal position.' },
  { step: '02', title: 'Written Case Assessment', desc: 'You receive a clear written summary of the legal position, options available and our recommended course of action.' },
  { step: '03', title: 'Engagement & Strategy', desc: 'We agree on a fee structure upfront, then execute the agreed strategy with regular updates at every stage.' },
];

export const defaultContact = {
  heading: 'Schedule a Confidential Consultation',
  subheading: 'Share a brief overview of your matter. Our team will review your request and reach out with available slots.',
  email: 'contact@sjassociates.com',
  phone_rituraj: '+91 82003 80901',
  phone_swati: '+91 88004 13165',
  phone_abhishek: '+91 98710 12151',
  address: 'Vadodara, Gujarat, India',
  whatsapp_number: '918200380901',
};

export const defaultSeo = {
  siteName: 'S. & J. Associates',
  siteUrl: 'https://sjassociates.com',
  defaultTitle: 'S. & J. Associates — Legal Services',
  defaultDescription:
    'S. & J. Associates is a client-focused law firm offering practical, ethical legal solutions in litigation, corporate law, arbitration, data privacy, documentation and family matters.',
  ogImage: '/og-image.jpg',
  twitterHandle: '',
};

export function ContentProvider({ children }) {
  const [hero,     setHero]     = useState(defaultHero);
  const [approach, setApproach] = useState(defaultApproach);
  const [contact,  setContact]  = useState(defaultContact);
  const [seo,      setSeo]      = useState(defaultSeo);
  const [services, setServices] = useState(defaultServices);
  const [team,     setTeam]     = useState(defaultTeam);
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      // Load site_settings (hero, approach, contact, seo)
      const { data: settings } = await supabase
        .from('site_settings')
        .select('key, value');

      if (active && settings) {
        settings.forEach(({ key, value }) => {
          if (key === 'hero')     setHero(value);
          if (key === 'approach') setApproach(value);
          if (key === 'contact')  setContact(value);
          if (key === 'seo')      setSeo(value);
        });
      }

      // Load published services
      const { data: svcRows } = await supabase
        .from('services')
        .select('*')
        .eq('published', true)
        .order('display_order');

      if (active && svcRows && svcRows.length > 0) setServices(svcRows);

      // Load published team members
      const { data: teamRows } = await supabase
        .from('team_members')
        .select('*')
        .eq('published', true)
        .order('display_order');

      if (active && teamRows && teamRows.length > 0) setTeam(teamRows);

      if (active) setLoading(false);
    }

    load();
    return () => { active = false; };
  }, []);

  return (
    <ContentContext.Provider value={{ hero, approach, contact, seo, services, team, loading }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used inside ContentProvider');
  return ctx;
}
