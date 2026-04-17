const shimmer = {
  background: 'linear-gradient(90deg, #f0ece0 25%, #e8e3d4 50%, #f0ece0 75%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 1.4s ease-in-out infinite',
  borderRadius: '4px',
};

export function ServiceCardSkeleton() {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
      <div style={{ ...shimmer, height: '1.1rem', width: '60%', marginBottom: '0.9rem' }} />
      <div style={{ ...shimmer, height: '0.8rem', width: '100%', marginBottom: '0.4rem' }} />
      <div style={{ ...shimmer, height: '0.8rem', width: '85%', marginBottom: '0.4rem' }} />
      <div style={{ ...shimmer, height: '0.8rem', width: '70%', marginBottom: '1.2rem' }} />
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.2rem' }}>
        {[40, 55, 48].map(w => (
          <div key={w} style={{ ...shimmer, height: '1.4rem', width: `${w}px`, borderRadius: '4px' }} />
        ))}
      </div>
      <div style={{ ...shimmer, height: '0.75rem', width: '40%' }} />
    </div>
  );
}

export function TeamCardSkeleton() {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', padding: '2.2rem 1.8rem', textAlign: 'center', boxShadow: 'var(--shadow-card)' }}>
      <div style={{ ...shimmer, width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 1.2rem' }} />
      <div style={{ ...shimmer, height: '1rem', width: '55%', margin: '0 auto 0.5rem' }} />
      <div style={{ ...shimmer, height: '0.75rem', width: '40%', margin: '0 auto 0.9rem' }} />
      <div style={{ ...shimmer, height: '0.75rem', width: '80%', margin: '0 auto 0.4rem' }} />
      <div style={{ ...shimmer, height: '0.75rem', width: '65%', margin: '0 auto 1rem' }} />
      <div style={{ ...shimmer, height: '0.75rem', width: '45%', margin: '0 auto' }} />
    </div>
  );
}

export function ArticleCardSkeleton() {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', padding: '1.8rem', boxShadow: 'var(--shadow-card)' }}>
      <div style={{ ...shimmer, height: '0.7rem', width: '30%', marginBottom: '0.8rem' }} />
      <div style={{ ...shimmer, height: '1rem', width: '75%', marginBottom: '0.5rem' }} />
      <div style={{ ...shimmer, height: '0.8rem', width: '100%', marginBottom: '0.4rem' }} />
      <div style={{ ...shimmer, height: '0.8rem', width: '60%', marginBottom: '1rem' }} />
      <div style={{ ...shimmer, height: '0.75rem', width: '25%' }} />
    </div>
  );
}

export default { ServiceCardSkeleton, TeamCardSkeleton, ArticleCardSkeleton };
