export default function Team() {
  return (
    <section className="section team" id="rejoindre">
      <div className="container">
        <div className="section__head reveal">
          <p className="section__kicker">Nous contacter</p>
          <h2 className="section__title">
            Rejoignez Wenimmo, un réseau <em className="accent">à taille humaine</em>.
          </h2>
        </div>
        <div className="team__cols">
          {/* Carte sombre : back-office */}
          <div className="team__panel team__panel--dark reveal">
            <h3>
              Un back-office <em className="accent">à vos côtés</em>
            </h3>
            <p className="team__panel-lead">
              Un dossier complexe&nbsp;? Une question de conformité&nbsp;?
              Notre équipe est là pour vous accompagner.
            </p>
            <ul className="contact-rows">
              <li>
                <a href="tel:+33670886334" className="contact-row">
                  <span className="contact-row__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="contact-row__value">06 70 88 63 34</span>
                  <span className="contact-row__note">Lun – Ven · 9h – 19h</span>
                </a>
              </li>
              <li>
                <a href="mailto:backoffice@wenimmo.com" className="contact-row">
                  <span className="contact-row__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinejoin="round" />
                      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="contact-row__value">backoffice@wenimmo.com</span>
                  <span className="contact-row__note">Réponse &lt; 4h</span>
                </a>
              </li>
              <li>
                <span className="contact-row">
                  <span className="contact-row__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="contact-row__value">26 rue Poncelet, 75017 Paris</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Carte claire : vos interlocuteurs commerciaux */}
          <div className="team__panel reveal">
            <h3>
              Vos interlocuteurs <em className="accent">commerciaux</em>
            </h3>
            <p className="team__panel-lead">
              Une équipe dédiée par univers d'investissement, joignable directement.
            </p>

            {/* TODO : numéros de téléphone directs à renseigner */}
            <div className="persons-group">
              <p className="persons-group__head">
                FIA <span>— SCPI · Private Equity · GFI / GFV</span>
              </p>
              <ul className="persons">
                <li className="person">
                  <span className="person__avatar">BF</span>
                  <strong>Benjamin Flottes de Pouzols</strong>
                  <span className="person__phone">06 00 00 00 00</span>
                </li>
                <li className="person">
                  <span className="person__avatar">LT</span>
                  <strong>Linda Taillefer</strong>
                  <span className="person__phone">06 00 00 00 00</span>
                </li>
                <li className="person">
                  <span className="person__avatar">IS</span>
                  <strong>Illona Stanescu</strong>
                  <span className="person__phone">06 00 00 00 00</span>
                </li>
                <li className="person">
                  <span className="person__avatar">PL</span>
                  <strong>Patrick Lemaire</strong>
                  <span className="person__phone">06 00 00 00 00</span>
                </li>
              </ul>
            </div>
            <div className="persons-group">
              <p className="persons-group__head">
                Assurance <span>— Assurance-vie · Retraite · Prévoyance</span>
              </p>
              <ul className="persons">
                <li className="person">
                  <span className="person__avatar">FA</span>
                  <strong>Franck Accambray</strong>
                  <span className="person__phone">06 00 00 00 00</span>
                </li>
                <li className="person">
                  <span className="person__avatar">YA</span>
                  <strong>Yohann Aimée</strong>
                  <span className="person__phone">06 00 00 00 00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
