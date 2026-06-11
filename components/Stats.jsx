import Counter from "@/components/Counter";

export default function Stats() {
  return (
    <section className="section stats" id="chiffres">
      <div className="container">
        <div className="section__head section__head--center reveal">
          <p className="section__kicker">Depuis 2020</p>
          <h2 className="section__title">
            Une plateforme déjà adoptée par des <em className="accent">centaines de cabinets</em>.
          </h2>
        </div>
        <div className="stats-row">
          <div className="stat reveal">
            <p className="stat__figure"><Counter target={400} prefix="+" /></p>
            <p className="stat__label">Cabinets CGP partenaires</p>
          </div>
          <div className="stat reveal">
            <p className="stat__figure">&lt;15&nbsp;min</p>
            <p className="stat__label">Pour une souscription multi-produits</p>
          </div>
          <div className="stat reveal">
            <p className="stat__figure"><Counter target={5000} prefix="+" /></p>
            <p className="stat__label">Opérations réalisées</p>
          </div>
        </div>
      </div>
    </section>
  );
}
