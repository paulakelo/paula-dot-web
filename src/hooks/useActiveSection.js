import { useEffect, useState, useRef } from 'react';

// useActiveSection(ids, options)
// - ids: array of section id strings to observe (e.g. ['hero','about'])
// - options: { root, rootMargin, threshold, idFallback }
// Returns: [activeId, setActiveId]

export default function useActiveSection(ids = [], options = {}) {
  const { root = null, rootMargin = '-40% 0px -50% 0px', threshold = 0, idFallback = {} } = options;
  const [active, setActive] = useState(ids && ids.length ? ids[0] : null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!ids || ids.length === 0 || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const handleIntersect = (entries) => {
      // Choose the most visible intersecting entry. If none intersecting, do nothing.
      const visible = entries.filter(e => e.isIntersecting && e.target && e.target.id);
      if (visible.length === 0) return;

      // Prefer entry with largest intersectionRatio, fallback to nearest to top
      visible.sort((a, b) => {
        if (a.intersectionRatio !== b.intersectionRatio) return b.intersectionRatio - a.intersectionRatio;
        return a.boundingClientRect.top - b.boundingClientRect.top;
      });

      const chosen = visible[0];
      if (chosen && chosen.target && chosen.target.id) {
        const id = chosen.target.id;
        setActive(prev => (prev !== id ? id : prev));
      }
    };

    const observer = new IntersectionObserver(handleIntersect, { root, rootMargin, threshold });
    observerRef.current = observer;

    ids.forEach((id) => {
      const el = document.getElementById(id) || document.getElementById(idFallback[id]);
      if (el) observer.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [JSON.stringify(ids), root, rootMargin, threshold, JSON.stringify(idFallback)]);

  return [active, setActive];
}

