import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Politique de confidentialité — Wenimmo",
  description:
    "Politique de confidentialité de Wenimmo : données collectées via le formulaire de contact, finalités, durées de conservation et exercice de vos droits (RGPD).",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité" updatedAt="24 juin 2026">
      <p>
        Wenimmo accorde une grande importance à la protection de votre vie privée et de vos données à
        caractère personnel. La présente politique décrit la manière dont vos données sont collectées
        et traitées lorsque vous utilisez le site <strong>wenimmo.com</strong>, conformément au
        Règlement (UE) 2016/679 (RGPD) et à la loi « Informatique et Libertés » du 6 janvier 1978
        modifiée.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement est <strong>Wenimmo</strong>, dont le siège social est situé
        26, rue Poncelet, 75017 Paris. Pour toute question relative à vos données, vous pouvez nous
        contacter à l'adresse <a href="mailto:backoffice@wenimmo.com">backoffice@wenimmo.com</a>.
      </p>

      <h2>2. Données que nous collectons</h2>
      <p>Nous collectons les données suivantes :</p>
      <ul>
        <li>
          <strong>Données que vous nous transmettez</strong> via le formulaire de contact / demande
          de partenariat : nom, prénom, adresse e-mail, numéro de téléphone, numéro ORIAS et le
          contenu de votre message.
        </li>
        <li>
          <strong>Données techniques</strong> collectées automatiquement pour le bon fonctionnement
          et la sécurité du site (adresse IP, journaux de connexion, type de navigateur), par
          l'intermédiaire de notre hébergeur.
        </li>
      </ul>

      <h2>3. Finalités et bases légales</h2>
      <dl className="legal__dl">
        <dt>Répondre à vos demandes de contact et de partenariat</dt>
        <dd>
          Mesures précontractuelles prises à votre demande et intérêt légitime de Wenimmo à traiter
          les sollicitations reçues.
        </dd>
        <dt>Gérer la relation avec nos partenaires (CGP, courtiers)</dt>
        <dd>Exécution du contrat et intérêt légitime.</dd>
        <dt>Assurer la sécurité et le bon fonctionnement du site</dt>
        <dd>Intérêt légitime de Wenimmo.</dd>
        <dt>Respecter nos obligations légales et réglementaires</dt>
        <dd>
          Obligation légale (notamment en matière de lutte contre le blanchiment et de conservation
          des documents).
        </dd>
      </dl>

      <h2>4. Caractère obligatoire des données</h2>
      <p>
        Les informations marquées comme obligatoires dans le formulaire sont nécessaires au
        traitement de votre demande ; à défaut, nous ne serons pas en mesure d'y répondre. Les autres
        informations sont facultatives.
      </p>

      <h2>5. Destinataires et sous-traitants</h2>
      <p>
        Vos données sont destinées aux équipes habilitées de Wenimmo. Nous faisons appel à des
        prestataires techniques (sous-traitants au sens du RGPD) agissant pour notre compte et selon
        nos instructions :
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> — hébergement du site.
        </li>
        <li>
          <strong>Resend, Inc.</strong> — acheminement des e-mails issus du formulaire de contact.
        </li>
        <li>
          <strong>Google</strong> — fourniture des polices d'écriture (Google Fonts) ; à ce titre,
          votre adresse IP peut être transmise aux serveurs de Google lors du chargement des pages.
        </li>
      </ul>
      <p>Vos données ne sont ni vendues ni cédées à des tiers à des fins commerciales.</p>

      <h2>6. Transferts hors Union européenne</h2>
      <p>
        Certains de nos prestataires (Vercel, Resend, Google) sont établis aux États-Unis. Les
        transferts de données vers ces prestataires sont encadrés par des garanties appropriées au
        sens du RGPD, telles que les clauses contractuelles types de la Commission européenne et/ou
        l'adhésion au « Data Privacy Framework » UE–États-Unis.
      </p>

      <h2>7. Durées de conservation</h2>
      <ul>
        <li>
          Demandes de contact et données de prospection : <strong>3 ans</strong> à compter de notre
          dernier contact.
        </li>
        <li>
          Données liées à une relation contractuelle : pendant toute la durée de la relation, puis
          durant les délais de prescription légale applicables.
        </li>
        <li>
          Journaux de connexion : <strong>12 mois</strong> maximum.
        </li>
      </ul>

      <h2>8. Sécurité</h2>
      <p>
        Wenimmo met en œuvre des mesures techniques et organisationnelles appropriées pour protéger
        vos données contre tout accès, altération, divulgation ou destruction non autorisés
        (connexion sécurisée HTTPS, accès restreint aux personnes habilitées).
      </p>

      <h2>9. Vos droits</h2>
      <p>
        Conformément à la réglementation, vous disposez des droits suivants sur vos données : droit
        d'accès, de rectification, d'effacement, de limitation du traitement, d'opposition, de
        portabilité, ainsi que du droit de définir des directives relatives au sort de vos données
        après votre décès. Lorsque le traitement repose sur votre consentement, vous pouvez le
        retirer à tout moment.
      </p>
      <p>
        Pour exercer ces droits, écrivez-nous à{" "}
        <a href="mailto:backoffice@wenimmo.com">backoffice@wenimmo.com</a>. Une preuve d'identité pourra
        vous être demandée. Nous nous engageons à répondre dans un délai d'un mois.
      </p>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
        auprès de la <strong>CNIL</strong> — 3, place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          www.cnil.fr
        </a>
        .
      </p>

      <h2>10. Cookies et traceurs</h2>
      <p>
        À ce jour, le site n'utilise pas de cookies de mesure d'audience ni de cookies publicitaires.
        Seuls peuvent être mis en œuvre des éléments strictement nécessaires à son bon
        fonctionnement. Le chargement des polices d'écriture via Google Fonts est susceptible de
        communiquer votre adresse IP à Google (voir l'article 5). Si des outils de mesure d'audience
        venaient à être ajoutés, votre consentement serait recueilli au préalable et la présente
        politique serait mise à jour.
      </p>

      <h2>11. Modification de la politique</h2>
      <p>
        Wenimmo peut être amenée à modifier la présente politique de confidentialité afin de
        l'adapter aux évolutions légales, réglementaires ou techniques. La version applicable est
        celle en vigueur à la date de votre consultation du site.
      </p>

      <h2>12. Contact</h2>
      <p>
        Pour toute question relative à la présente politique ou au traitement de vos données, vous
        pouvez nous écrire à <a href="mailto:backoffice@wenimmo.com">backoffice@wenimmo.com</a> ou par
        courrier à l'adresse du siège social indiquée ci-dessus.
      </p>
    </LegalLayout>
  );
}
