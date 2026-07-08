"use client";

// Bouton « Connexion » : ouvre le mock cliquable de la plateforme (au lieu
// de rediriger vers app.wenimmo.com). Le modal écoute l'événement global.
export function openPlatformDemo() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-platform-demo"));
  }
}

export default function ConnexionButton({ className = "btn btn--primary", children, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick?.(e);
    openPlatformDemo();
  };

  return (
    <a href="#connexion" className={className} onClick={handleClick} aria-haspopup="dialog">
      {children ?? (
        <>
          Connexion <span className="btn__arrow">→</span>
        </>
      )}
    </a>
  );
}
