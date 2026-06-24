import LegalLayout, { Todo } from "@/components/LegalLayout";

export const metadata = {
  title: "Mentions légales — Wenimmo",
  description:
    "Mentions légales du site wenimmo.com : éditeur, immatriculation ORIAS, hébergement et informations réglementaires.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" updatedAt="24 juin 2026">
      <p>
        Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004
        pour la confiance dans l'économie numérique (LCEN), il est porté à la connaissance des
        utilisateurs du site <strong>wenimmo.com</strong> les présentes mentions légales.
      </p>

      <h2>1. Éditeur du site</h2>
      <dl className="legal__dl">
        <dt>Dénomination</dt>
        <dd>Wenimmo</dd>
        <dt>Forme juridique</dt>
        <dd>
          <Todo>forme juridique (ex. SAS)</Todo>
        </dd>
        <dt>Capital social</dt>
        <dd>
          <Todo>montant du capital social</Todo>
        </dd>
        <dt>Siège social</dt>
        <dd>26, rue Poncelet, 75017 Paris, France</dd>
        <dt>RCS</dt>
        <dd>Paris 883 127 946</dd>
        <dt>SIREN</dt>
        <dd>883 127 946</dd>
        <dt>N° TVA intracommunautaire</dt>
        <dd>
          <Todo>n° TVA (FR…)</Todo>
        </dd>
        <dt>Téléphone</dt>
        <dd>
          <a href="tel:+33670886334">06 70 88 63 34</a>
        </dd>
        <dt>Adresse e-mail</dt>
        <dd>
          <a href="mailto:contact@wenimmo.com">contact@wenimmo.com</a>
        </dd>
      </dl>

      <h2>2. Directeur de la publication</h2>
      <p>
        Le directeur de la publication est <Todo>nom et qualité du représentant légal</Todo>, en sa
        qualité de représentant légal de la société.
      </p>

      <h2>3. Activité réglementée et immatriculation</h2>
      <p>
        Wenimmo est immatriculée au registre unique des intermédiaires en assurance, banque et
        finance tenu par l'
        <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">
          ORIAS
        </a>{" "}
        sous le numéro <strong>20 004 922</strong>, immatriculation vérifiable sur{" "}
        <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">
          www.orias.fr
        </a>
        .
      </p>
      <p>
        Wenimmo exerce les activités suivantes :{" "}
        <Todo>
          catégories ORIAS exactes — ex. Conseiller en Investissements Financiers (CIF), Courtier en
          assurance (COA), Intermédiaire en opérations de banque et en services de paiement (IOBSP)
        </Todo>
        .
      </p>
      <p>
        En qualité de Conseiller en Investissements Financiers, Wenimmo est adhérente de
        l'association professionnelle{" "}
        <Todo>nom de l'association agréée AMF (ex. CNCGP, ANACOFI-CIF, La Compagnie des CGP)</Todo>,
        agréée par l'Autorité des marchés financiers.
      </p>
      <p>Les activités de Wenimmo sont soumises au contrôle des autorités suivantes :</p>
      <ul>
        <li>
          <strong>Autorité de Contrôle Prudentiel et de Résolution (ACPR)</strong> — 4, place de
          Budapest, CS 92459, 75436 Paris Cedex 09 (activités d'assurance et bancaires).
        </li>
        <li>
          <strong>Autorité des marchés financiers (AMF)</strong> — 17, place de la Bourse, 75082
          Paris Cedex 02 (conseil en investissements financiers).
        </li>
      </ul>
      <p>
        Conformément à la réglementation, Wenimmo dispose d'une assurance de responsabilité civile
        professionnelle et, le cas échéant, d'une garantie financière :{" "}
        <Todo>nom de l'assureur et n° de contrat RC Pro</Todo>.
      </p>

      <h2>4. Hébergement</h2>
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

      <h2>5. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments composant le site (textes, graphismes, logos, icônes, images, mise
        en page, charte graphique, ainsi que le nom et la marque « Wenimmo ») est la propriété
        exclusive de Wenimmo ou de ses partenaires, et est protégé par les lois françaises et
        internationales relatives à la propriété intellectuelle. Toute reproduction, représentation,
        modification, publication ou adaptation, totale ou partielle, de ces éléments, quel que soit
        le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Wenimmo.
      </p>

      <h2>6. Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. Wenimmo n'exerce aucun contrôle sur ces
        sites et décline toute responsabilité quant à leur contenu ou à l'usage qui pourrait en être
        fait.
      </p>

      <h2>7. Données personnelles et cookies</h2>
      <p>
        Les traitements de données à caractère personnel mis en œuvre sur le site sont décrits dans
        notre <a href="/politique-de-confidentialite">politique de confidentialité</a>.
      </p>

      <h2>8. Avertissement</h2>
      <p>
        Les informations présentées sur ce site ont une vocation générale et informative. Elles ne
        constituent ni un conseil en investissement personnalisé, ni une offre, ni une sollicitation
        d'achat ou de vente de produits financiers ou immobiliers. Tout investissement comporte des
        risques, notamment un risque de perte en capital, et les performances passées ne préjugent
        pas des performances futures. Tout projet doit faire l'objet d'un conseil personnalisé tenant
        compte de votre situation.
      </p>

      <h2>9. Responsabilité</h2>
      <p>
        Wenimmo s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le
        site, sans pouvoir garantir l'absence d'erreurs ou d'omissions. Wenimmo ne saurait être tenue
        responsable des dommages directs ou indirects résultant de l'accès au site ou de son
        utilisation, ni d'une éventuelle indisponibilité du service.
      </p>

      <h2>10. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas de litige, et à
        défaut de résolution amiable, les tribunaux français seront seuls compétents.
      </p>
    </LegalLayout>
  );
}
