"use client";

import { useEffect, useState } from "react";

// Liens racine-relatifs (/#…) pour fonctionner aussi depuis les sous-pages (mentions légales…)
const NAV_LINKS = [
  { href: "/#plateforme", label: "Notre plateforme" },
  { href: "/#scpi", label: "SCPI" },
  { href: "/#assurance", label: "Assurance" },
  { href: "/#private-equity", label: "Private Equity" },
  { href: "/#gfi-gfv", label: "GFI · GFV" },
  // Masqué tant que le blog n'a pas de vrai contenu — réactiver en décommentant.
  // { href: "#blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`} id="header">
        <div className="container header__inner">
          <a href="/" className="header__logo" aria-label="Wenimmo — Accueil">
            <img src="/assets/logos/logo-wenimmo-dark.svg" alt="Wenimmo" className="header__logo-img header__logo-img--dark" />
            <img src="/assets/logos/logo-wenimmo.svg" alt="Wenimmo" className="header__logo-img header__logo-img--light" />
          </a>

          {/* Menu rapproché des boutons de connexion (cf. feedback) */}
          <div className="header__right">
            <nav className="header__nav" aria-label="Navigation principale">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="header__link">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="header__cta">
              <a href="/#rejoindre" className="btn btn--ghost btn--sm">Nous contacter</a>
              <a href="https://app.wenimmo.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                Connexion →
              </a>
            </div>
            <button
              className="header__burger"
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        <nav className="mobile-menu__nav" aria-label="Navigation mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__cta">
          <a href="/#rejoindre" className="btn btn--ghost" onClick={closeMenu}>Nous contacter</a>
          <a href="https://app.wenimmo.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary" onClick={closeMenu}>
            Connexion →
          </a>
        </div>
      </div>
    </>
  );
}
