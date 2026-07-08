"use client";

import { openPlatformDemo } from "./ConnexionButton";

// Rend l'aperçu de la plateforme (hero) cliquable : ouvre le mock interactif.
export default function MockupTrigger({ children }) {
  return (
    <button
      type="button"
      className="hero__mockup-frame hero__mockup-frame--btn"
      onClick={openPlatformDemo}
      aria-label="Explorer la plateforme Wenimmo"
    >
      {children}
    </button>
  );
}
