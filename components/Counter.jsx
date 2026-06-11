"use client";

import { useEffect, useRef } from "react";

/** Compteur animé au scroll (format français : 5 000). */
export default function Counter({ target, prefix = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (value) => prefix + Math.round(value).toLocaleString("fr-FR");

    const animate = () => {
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        // easing easeOutCubic pour un effet dynamique
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = format(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      el.textContent = format(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, prefix]);

  return <span ref={ref}>0</span>;
}
