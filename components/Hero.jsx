export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" role="presentation"></div>
      <img src="/assets/logos/wenimmo-strokes.svg" alt="" className="hero__strokes" role="presentation" />

      <div className="container hero__content">
        <p className="hero__badge reveal">
          Plateforme CGP &amp; courtiers
        </p>
        <h1 className="hero__title reveal">
          Libérez du temps pour <em className="accent">vos clients</em>
        </h1>
        <p className="hero__subtitle reveal">
          Une saisie unique, plusieurs produits souscrits en parallèle. Documents générés,
          signés et transmis aux sociétés de gestion.
        </p>
        <div className="hero__actions reveal">
          <a href="https://app.wenimmo.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
            Connexion <span className="btn__arrow">→</span>
          </a>
          <a href="#rejoindre" className="btn btn--outline-light btn--lg">Demander une démo</a>
        </div>
        <div className="hero__stats reveal">
          <div className="hero__stat"><strong>✓</strong><span>ORIAS · Conformité ACPR</span></div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat"><strong>✓</strong><span>Signature électronique eIDAS</span></div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat"><strong>✓</strong><span>Hébergement français</span></div>
        </div>
      </div>

      {/* Aperçu de la plateforme (image provisoire — à remplacer par la vraie capture) */}
      <div className="container hero__mockup reveal">
        <div className="hero__mockup-frame">
          <img src="/assets/mockup-plateforme.svg" alt="Aperçu de la plateforme Wenimmo" />
        </div>
      </div>
    </section>
  );
}
