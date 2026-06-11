const STEPS = [
  {
    num: "01",
    title: "Client",
    text: "Une saisie unique des informations client — le KYC est récupéré automatiquement depuis votre base cabinet.",
  },
  {
    num: "02",
    title: "Produits",
    text: "Plusieurs produits souscrits en parallèle, sur l'ensemble de nos univers d'investissement.",
  },
  {
    num: "03",
    title: "Documents",
    text: "Les documents réglementaires et commerciaux sont générés automatiquement, prêts à être signés.",
  },
  {
    num: "04",
    title: "Signature",
    text: "Signature électronique, puis transmission automatique aux sociétés de gestion.",
  },
];

export default function Steps() {
  return (
    <section className="section steps" id="plateforme">
      <div className="container">
        <div className="section__head reveal">
          <p className="section__kicker">Comment ça marche&nbsp;?</p>
          <h2 className="section__title">
            De l'entretien client au dossier transmis, en <em className="accent">quatre étapes</em>
          </h2>
          <p className="section__lead">
            Wenimmo automatise ce qui prenait des heures&nbsp;: saisie, génération documentaire,
            signature électronique et transmissions automatiques aux sociétés de gestion.
          </p>
        </div>
        <ol className="steps__grid">
          {STEPS.map((step) => (
            <li className="step reveal" key={step.num}>
              <span className="step__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
