export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <img src="/assets/logos/logo-wenimmo.svg" alt="Wenimmo" className="footer__logo" />
            <p className="footer__tagline">
              La plateforme de souscription dédiée aux conseillers en gestion de patrimoine.
            </p>
            <address className="footer__address">
              26, rue Poncelet
              <br />
              75017 Paris
            </address>
            <p className="footer__contact">
              <a href="tel:+33670886334">06 70 88 63 34</a>
              <br />
              <a href="mailto:contact@wenimmo.com">contact@wenimmo.com</a>
            </p>
            <div className="footer__social">
              <a
                href="https://www.linkedin.com/company/wenimmo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Wenimmo"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
                </svg>
              </a>
              {/* Lien YouTube Cash Investissement (cf. feedback) — URL à confirmer */}
              <a href="#" aria-label="Chaîne YouTube Cash Investissement" data-todo="URL chaîne YouTube à confirmer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Navigation</h4>
            <nav className="footer__nav" aria-label="Navigation pied de page">
              <a href="#plateforme">Notre plateforme</a>
              <a href="#scpi">SCPI</a>
              <a href="#assurance">Assurance</a>
              <a href="#private-equity">Private Equity</a>
              <a href="#gfi-gfv">GFI / GFV</a>
              <a href="#rejoindre">Nous rejoindre</a>
            </nav>
          </div>

          <div className="footer__col">
            <h4>Mentions légales</h4>
            <p className="footer__legal-line">
              Immatriculé à l'
              <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">
                ORIAS
              </a>{" "}
              sous le n°&nbsp;20&nbsp;004&nbsp;922
              <br />
              RCS Paris 883&nbsp;127&nbsp;946
            </p>
            <nav className="footer__nav" aria-label="Liens légaux">
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
            </nav>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Wenimmo — Tous droits réservés · ORIAS n°&nbsp;20&nbsp;004&nbsp;922 · RCS Paris 883&nbsp;127&nbsp;946</p>
        </div>
      </div>
    </footer>
  );
}
