import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Marqueur des informations légales à renseigner avant mise en ligne
   (forme juridique, capital, directeur de publication…). Volontairement
   visible pour qu'aucun champ obligatoire ne soit oublié. */
export function Todo({ children }) {
  return <span className="legal-todo">[à compléter : {children}]</span>;
}

export default function LegalLayout({ title, updatedAt, children }) {
  return (
    <>
      <Header />
      <main className="legal">
        {/* Bandeau sombre : le header (texte blanc tant qu'on n'a pas scrollé)
            reste lisible par-dessus, comme sur le hero de l'accueil. */}
        <section className="legal__hero">
          <div className="container">
            <a href="/" className="legal__back">← Retour à l'accueil</a>
            <h1 className="legal__title">{title}</h1>
            {updatedAt && (
              <p className="legal__updated">Dernière mise à jour : {updatedAt}</p>
            )}
          </div>
        </section>
        <div className="container">
          <article className="legal__content">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
