/* Encart partenaire 2nd Market — section autonome, hors des onglets "Nos offres"
   pour rester affiché en permanence sans re-rendu au changement d'onglet. */
export default function PartnerNote() {
  return (
    <section className="partner-strip" aria-label="Partenaire 2nd Market">
      <div className="container">
        <a
          href="https://2ndmarket.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="partner-note reveal"
        >
          <span className="partner-note__main">
            <span className="partner-note__head">
              <img
                src="/assets/partners/2nd-market.svg"
                alt="2nd Market"
                className="partner-note__logo"
              />
              <span className="partner-note__tag">Partenaire · Marché secondaire</span>
            </span>
            <span className="partner-note__body">
              La place de marché qui met en relation directe vendeurs et acheteurs de parts de
              SCPI sur le marché secondaire. Décotes de -10&nbsp;% à -35&nbsp;%, transactions
              sécurisées par notaire. Aucune rétrocommission, aucun conseil en investissement.
            </span>
          </span>
          <span className="text-button">
            Découvrir 2nd&nbsp;Market <span className="btn__arrow">→</span>
          </span>
        </a>
      </div>
    </section>
  );
}
