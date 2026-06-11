"use client";

import { useEffect } from "react";

/**
 * Animations d'apparition au scroll.
 * Ajoute la classe "js" sur <body> (le contenu reste visible sans JavaScript)
 * puis révèle chaque élément .reveal quand il entre dans le viewport.
 */
export default function RevealInit() {
  useEffect(() => {
    document.body.classList.add("js");

    const reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const viewportHeight = window.innerHeight;
    reveals.forEach((el) => {
      // Les éléments déjà à l'écran apparaissent immédiatement,
      // sans attendre le premier déclenchement de l'observer
      if (el.getBoundingClientRect().top < viewportHeight) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
