const TESTIMONIALS = [
  {
    initials: "BM",
    photo: "/assets/people/benoit-marzanasco.png",
    quote:
      "La plateforme permet de gagner du temps, de limiter les frictions dans le parcours de souscription et d'offrir une expérience plus fluide aux clients. Pour un conseiller, c'est un vrai confort de pouvoir s'appuyer sur un outil structuré et sur une équipe fiable au quotidien.",
    name: "Benoit Marzanasco",
    role: "Cabinet L.A.Z.",
  },
  {
    initials: "JL",
    photo: "/assets/people/jean-luc-le-grix-de-la-salle.png",
    quote:
      "La valeur ajoutée de Wenimmo est réelle : avoir un seul point d'entrée pour la souscription des SCPI est un gain de temps considérable. L'outil digital est intuitif et performant. L'offre et l'outil sont en perpétuelle évolution, faisant de Wenimmo un partenaire incontournable. La disponibilité et la réactivité de l'équipe se vérifient à chaque demande.",
    name: "Jean-Luc Le Grix De La Salle",
    role: "Praesidium Patrimoine",
  },
  {
    initials: "GR",
    photo: "/assets/people/guillaume-robilliard.jpg",
    photoPosition: "center top",
    quote:
      "Wenimmo, c'est une équipe avant tout. Professionnelle, dévouée et attentive à nos besoins et remarques. Une présence de tous les instants qui nous rend crédibles auprès de nos clients. C'est aussi des produits : une sélection rigoureuse, la possibilité de s'adresser directement aux fournisseurs, et une gamme qui couvre une grande partie des besoins de la clientèle.",
    name: "Guillaume Robilliard",
    role: "Alpagos Patrimoine",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials" id="temoignages">
      <div className="container">
        <div className="section__head reveal">
          <p className="section__kicker">Ils travaillent avec nous</p>
          <h2 className="section__title">
            La parole à nos cabinets <em className="accent">partenaires</em>
          </h2>
        </div>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial) => (
            <figure className="testimonial reveal" key={testimonial.initials}>
              <span className="testimonial__quote">“</span>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                {testimonial.photo ? (
                  <img
                    className="testimonial__avatar testimonial__avatar--photo"
                    src={testimonial.photo}
                    alt={testimonial.name}
                    loading="lazy"
                    style={
                      testimonial.photoPosition
                        ? { objectPosition: testimonial.photoPosition }
                        : undefined
                    }
                  />
                ) : (
                  <span className="testimonial__avatar">{testimonial.initials}</span>
                )}
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
