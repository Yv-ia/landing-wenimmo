import ConnexionButton from "./ConnexionButton";
import MockupTrigger from "./MockupTrigger";

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
          <ConnexionButton className="btn btn--primary btn--lg" />
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

      {/* Aperçu de la plateforme — cliquable : ouvre le mock interactif */}
      <div className="container hero__mockup reveal">
        <MockupTrigger>
          <img src="/assets/mockup-plateforme.svg" alt="Aperçu de la plateforme Wenimmo" />
          <span className="hero__mockup-hint">Cliquer pour explorer la plateforme →</span>
        </MockupTrigger>
      </div>
    </section>
  );
}
