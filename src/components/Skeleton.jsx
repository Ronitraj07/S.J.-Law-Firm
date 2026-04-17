/**
 * Skeleton — shimmer placeholder for loading states.
 *
 * Props:
 *   width   — CSS width  (default: '100%')
 *   height  — CSS height (default: '1em')
 *   radius  — CSS border-radius (default: 'var(--radius-sm)')
 *   circle  — shorthand for a circular avatar skeleton
 *   style   — extra inline styles
 *   className
 */
function Skeleton({ width = '100%', height = '1em', radius, circle = false, style = {}, className = '' }) {
  const baseStyle = {
    display: 'block',
    width: circle ? height : width,
    height,
    borderRadius: circle ? '50%' : (radius ?? 'var(--radius-sm)'),
    background: 'linear-gradient(90deg, var(--bg-light) 25%, var(--bg-card) 50%, var(--bg-light) 75%)',
    backgroundSize: '600px 100%',
    animation: 'shimmer 1.5s ease-in-out infinite',
    flexShrink: 0,
    ...style,
  };

  return <span className={`skeleton ${className}`} style={baseStyle} aria-hidden="true" />;
}

/** Pre-built skeleton for a team member card */
export function TeamCardSkeleton() {
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(30,45,61,0.08)',
      padding: '2rem 1.8rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
    }}>
      <Skeleton circle height="88px" />
      <Skeleton width="60%" height="1rem" />
      <Skeleton width="45%" height="0.75rem" />
      <Skeleton width="80%" height="0.75rem" />
      <Skeleton width="35%" height="0.75rem" />
    </div>
  );
}

/** Pre-built skeleton for a service/article card */
export function CardSkeleton({ lines = 3 }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(30,45,61,0.08)',
      padding: '1.8rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.65rem',
    }}>
      <Skeleton width="40%" height="0.75rem" />
      <Skeleton width="75%" height="1.1rem" />
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} width={i === lines - 1 ? '60%' : '100%'} height="0.85rem" />
      ))}
      <Skeleton width="30%" height="0.75rem" style={{ marginTop: '0.5rem' }} />
    </div>
  );
}

/** Pre-built skeleton for the article list on ResourcesPage */
export function ArticleListSkeleton({ count = 3 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} lines={3} />
      ))}
    </div>
  );
}

export default Skeleton;
