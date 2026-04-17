import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children and animates them into view
 * when they enter the viewport using IntersectionObserver.
 *
 * Props:
 *   animation  — CSS class from animations.css (default: 'fadeInUp')
 *   delay      — ms delay before the animation fires (default: 0)
 *   threshold  — how much of the element must be visible (default: 0.15)
 *   className  — extra class names to forward to the wrapper div
 *   style      — inline styles to forward to the wrapper div
 *   tag        — HTML tag for the wrapper (default: 'div')
 */
function ScrollReveal({
  children,
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.15,
  className = '',
  style = {},
  tag: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.opacity = '1';
      return;
    }

    el.style.opacity = '0';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add(`animate-${animation}`);
            el.style.opacity = '';
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

export default ScrollReveal;
