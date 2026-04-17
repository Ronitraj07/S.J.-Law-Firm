import { useEffect, useRef } from 'react';

const animations = {
  fadeUp:   { hidden: 'opacity:0;transform:translateY(28px)', visible: 'opacity:1;transform:translateY(0)' },
  fadeIn:   { hidden: 'opacity:0', visible: 'opacity:1' },
  fadeLeft: { hidden: 'opacity:0;transform:translateX(-28px)', visible: 'opacity:1;transform:translateX(0)' },
  fadeRight:{ hidden: 'opacity:0;transform:translateX(28px)',  visible: 'opacity:1;transform:translateX(0)' },
  scaleUp:  { hidden: 'opacity:0;transform:scale(0.94)',       visible: 'opacity:1;transform:scale(1)' },
};

function ScrollReveal({ children, animation = 'fadeUp', delay = 0, duration = 550, threshold = 0.12 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const anim = animations[animation] || animations.fadeUp;
    el.style.cssText += anim.hidden + ';transition:opacity ' + duration + 'ms cubic-bezier(.22,.68,0,1.2) ' + delay + 'ms,transform ' + duration + 'ms cubic-bezier(.22,.68,0,1.2) ' + delay + 'ms';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.cssText += anim.visible;
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration, threshold]);

  return <div ref={ref}>{children}</div>;
}

export default ScrollReveal;
