import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Mentions légales — Wenimmo",
  description:
    "Mentions légales du site wenimmo.com : éditeur, immatriculation ORIAS, hébergement et informations réglementaires.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" updatedAt="15 juillet 2026">
      <p>
        Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004
        pour la confiance dans l'économie numérique (LCEN), il est porté à la connaissance des
        utilisateurs du site <strong>wenimmo.com</strong> les présentes mentions légales.
      </p>

      <h2>1. Éditeur du site</h2>
      <p>
        WENIMMO au capital de 2.200 € – RCS Paris 883 127 946 – Code APE 6622Z – TVA FR55883127946
        <br />
        Siège social : 26 rue Poncelet 75017 PARIS – Tel : +33 6 70 88 63 34 – E-mail/ contact :
        contact@wenimmo.com
        <br />
        ORIAS n° 20004922 (www.orias.fr)
        <br />
        Conseil en investissements financiers enregistré sous le n°E009437 auprès de la CNCGP,
        association agréée par l'Autorité des Marchés Financiers
        <br />
        Courtier en assurance (IAS). Les activités d'IAS sont contrôlables par l'ACPR, 61 rue Taibout
        75346 Paris Cedex 9
        <br />
        Garantie Financière et Responsabilité Civile Professionnelle conforme au Code des Assurances
        : MMA n°114240090
      </p>

      <h2>2. Hébergement</h2>
      <p>Le site est hébergé par :</p>
      <dl className="legal__dl">
        <dt>Hébergeur</dt>
        <dd>Vercel Inc.</dd>
        <dt>Adresse</dt>
        <dd>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</dd>
        <dt>Site web</dt>
        <dd>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
        </dd>
      </dl>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments composant le site (textes, graphismes, logos, icônes, images, mise
        en page, charte graphique, ainsi que le nom et la marque « Wenimmo ») est la propriété
        exclusive de Wenimmo ou de ses partenaires, et est protégé par les lois françaises et
        internationales relatives à la propriété intellectuelle. Toute reproduction, représentation,
        modification, publication ou adaptation, totale ou partielle, de ces éléments, quel que soit
        le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Wenimmo.
      </p>

      <h2>4. Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. Wenimmo n'exerce aucun contrôle sur ces
        sites et décline toute responsabilité quant à leur contenu ou à l'usage qui pourrait en être
        fait.
      </p>

      <h2>5. Données personnelles et cookies</h2>
      <p>
        Les traitements de données à caractère personnel mis en œuvre sur le site sont décrits dans
        notre <a href="/politique-de-confidentialite">politique de confidentialité</a>.
      </p>

      <h2>6. Avertissement</h2>
      <p>
        Les informations présentées sur ce site ont une vocation générale et informative. Elles ne
        constituent ni un conseil en investissement personnalisé, ni une offre, ni une sollicitation
        d'achat ou de vente de produits financiers ou immobiliers. Tout investissement comporte des
        risques, notamment un risque de perte en capital, et les performances passées ne préjugent
        pas des performances futures. Tout projet doit faire l'objet d'un conseil personnalisé tenant
        compte de votre situation.
      </p>

      <h2>7. Responsabilité</h2>
      <p>
        Wenimmo s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le
        site, sans pouvoir garantir l'absence d'erreurs ou d'omissions. Wenimmo ne saurait être tenue
        responsable des dommages directs ou indirects résultant de l'accès au site ou de son
        utilisation, ni d'une éventuelle indisponibilité du service.
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas de litige, et à
        défaut de résolution amiable, les tribunaux français seront seuls compétents.
      </p>
    </LegalLayout>
  );
}
