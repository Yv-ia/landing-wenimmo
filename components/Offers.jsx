"use client";

import { useEffect, useState } from "react";

/* "scale" : ajustement fin pour les logos sans marges internes */
const SCPI_LOGOS = [
  { src: "/assets/partners/corum.svg", alt: "Corum", scale: 0.78 },
  { src: "/assets/partners/iroko.png", alt: "Iroko" },
  { src: "/assets/partners/remake.png", alt: "Remake AM" },
  { src: "/assets/partners/edmond-de-rothschild.png", alt: "Edmond de Rothschild" },
  { src: "/assets/partners/alderan.png", alt: "Alderan" },
  { src: "/assets/partners/arkea.png", alt: "Arkéa REIM" },
  { src: "/assets/partners/atland.png", alt: "Atland Voisin" },
  { src: "/assets/partners/wemo.png", alt: "Wemo Reim" },
  { src: "/assets/partners/mnk-partners.png", alt: "MNK Partners" },
  { src: "/assets/partners/norma-capital.png", alt: "Norma Capital" },
  { src: "/assets/partners/sogenial.png", alt: "Sogenial" },
];

const TABS = [
  { id: "scpi", label: "SCPI" },
  { id: "assurance", label: "Assurance-vie" },
  { id: "private-equity", label: "Private Equity" },
  { id: "gfi-gfv", label: "GFI / GFV" },
];

/* Liens externes vers les sociétés (cf. feedback) */
const INSURANCE_PARTNERS = [
  { name: "Cardif", url: "https://cardif.fr", logo: "/assets/partners/cardif.svg" },
  { name: "Selencia", url: "https://www.selencia.fr", logo: "/assets/partners/selencia.svg" },
  { name: "MMA", url: "https://www.mma.fr", logo: "/assets/partners/mma.svg" },
  { name: "Corum Life", url: "https://www.corum.fr", logo: "/assets/partners/corum.svg", scale: 0.78 },
  { name: "Le Conservateur", url: "https://www.conservateur.fr", logo: "/assets/partners/conservateur.svg" },
  { name: "AFI Esca", url: "https://www.afi-esca.com", logo: "/assets/partners/afi-esca.png" },
];

const PE_PARTNERS = [
  { name: "Epicure AM", url: "https://epicuream.fr", logo: "/assets/partners/epicure-am.png" },
  { name: "France Valley", url: "https://www.france-valley.com", logo: "/assets/partners/france-valley.svg" },
  { name: "OG2I", url: "https://www.og2i.fr", logo: "/assets/partners/og2i.png" },
  { name: "Scale Up Capital", url: "https://scaleup-capital.com", logo: "/assets/partners/scale-up-capital.png" },
  { name: "Valhyr Capital", url: "https://www.valhyrcapital.com", logo: "/assets/partners/valhyr-capital.svg" },
];

const GFI_PARTNERS = [
  { name: "France Valley", url: "https://www.france-valley.com", logo: "/assets/partners/france-valley.svg" },
  { name: "Epicure AM", url: "https://epicuream.fr", logo: "/assets/partners/epicure-am.png" },
  { name: "Sogenial", url: "https://www.sogenial.fr", logo: "/assets/partners/sogenial.png", scale: 1.6 },
];

/* Grille de logos partenaires, cliquables vers leurs sites */
function LogoGrid({ partners }) {
  return (
    <div className="logo-grid logo-grid--compact">
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="logo-grid__cell"
          aria-label={partner.name}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            title={partner.name}
            loading="lazy"
            style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
          />
        </a>
      ))}
    </div>
  );
}

export default function Offers() {
  const [activeTab, setActiveTab] = useState("scpi");

  // Les liens d'ancre (menu, footer) vers une offre activent l'onglet correspondant
  useEffect(() => {
    const fromHash = () => {
      const id = location.hash.slice(1);
      if (TABS.some((tab) => tab.id === id)) setActiveTab(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);

    // Capte aussi les clics répétés sur un même lien (pas de hashchange dans ce cas)
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      if (TABS.some((tab) => tab.id === id)) setActiveTab(id);
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", fromHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const panelProps = (id) => ({
    className: `tabs__panel${activeTab === id ? " is-active" : ""}`,
    id,
    role: "tabpanel",
    hidden: activeTab !== id,
  });

  return (
    <section className="section offers" id="offres">
      <div className="container">
        <div className="section__head reveal">
          <p className="section__kicker">Nos offres</p>
          <h2 className="section__title">
            Un univers de produits adaptés aux besoins de <em className="accent">vos clients</em>.
          </h2>
        </div>

        <div className="tabs reveal">
          <div className="tabs__bar" role="tablist" aria-label="Nos offres">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tabs__tab${activeTab === tab.id ? " is-active" : ""}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
            <button className="tabs__tab tabs__tab--soon" disabled>
              Comptes-titres / PEA <span className="tabs__soon-badge">Bientôt</span>
            </button>
          </div>

          {/* 3.1 SCPI */}
          <div {...panelProps("scpi")}>
            <div className="offer-panel">
              <div className="offer-panel__figure">
                <div className="offer-panel__topline">
                  <p className="offer-panel__num">+90</p>
                  <p className="offer-panel__numlabel">SCPI · Financement inclus</p>
                </div>
                {/* Logos des sociétés de gestion, en grille sous le chiffre */}
                <div className="logo-grid">
                  {SCPI_LOGOS.map((logo) => (
                    <div className="logo-grid__cell" key={logo.src}>
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.alt}
                        loading="lazy"
                        style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                      />
                    </div>
                  ))}
                </div>
                <p className="logo-grid__note">…et plus de 30 autres sociétés de gestion</p>
              </div>
              <div className="offer-panel__body">
                <h3 className="offer__title">Plus de 90 SCPI accessibles</h3>
                <p className="offer__lead">
                  Accédez à plus de 90 SCPI soigneusement sélectionnées, avec des outils de
                  simulation et de financement intégrés.
                </p>
                <ul className="checklist">
                  <li>+90 SCPI disponibles&nbsp;: logos et fiches descriptives intégrés</li>
                  <li>Financement de SCPI&nbsp;: solutions de crédit associées</li>
                  <li>Simulation en ligne&nbsp;: projetez les performances pour vos clients</li>
                  <li>Documents réglementaires et commerciaux accessibles directement</li>
                </ul>
                <a href="https://app.wenimmo.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  Explorer l'offre SCPI <span className="btn__arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3.2 GFI / GFV */}
          <div {...panelProps("gfi-gfv")}>
            <div className="offer-panel">
              <div className="offer-panel__figure">
                <div className="offer-panel__topline">
                  <p className="offer-panel__num">3</p>
                  <p className="offer-panel__numlabel">GFI · GFV</p>
                </div>
                <LogoGrid partners={GFI_PARTNERS} />
              </div>
              <div className="offer-panel__body">
                <h3 className="offer__title">GFI &amp; GFV — Investir dans le foncier et la forêt avec une fiscalité optimisée</h3>
                <p className="offer__lead">
                  Accédez à une sélection de GFI et GFV conjuguant diversification, fiscalité
                  avantageuse et actifs tangibles de long terme.
                </p>
                <ul className="checklist">
                  <li>GFI&nbsp;: investissement sylvicole à faible corrélation aux marchés</li>
                  <li>GFV&nbsp;: vignobles sélectionnés, revenus et valorisation</li>
                  <li>Avantages fiscaux associés (IFI, transmission)</li>
                  <li>Logos et fiches partenaires disponibles sur la plateforme</li>
                </ul>
                <a href="https://app.wenimmo.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  Découvrir les partenaires <span className="btn__arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3.3 Assurance */}
          <div {...panelProps("assurance")}>
            <div className="offer-panel">
              <div className="offer-panel__figure">
                <div className="offer-panel__topline">
                  <p className="offer-panel__num">6</p>
                  <p className="offer-panel__numlabel">compagnies partenaires, en architecture ouverte</p>
                </div>
                <LogoGrid partners={INSURANCE_PARTNERS} />
              </div>
              <div className="offer-panel__body">
                <h3 className="offer__title">Assurance vie — Une gamme complète en architecture ouverte</h3>
                <p className="offer__lead">
                  Des contrats d'assurance-vie et de retraite sélectionnés auprès de compagnies
                  partenaires reconnues.
                </p>
                <ul className="checklist">
                  <li>6 compagnies partenaires&nbsp;: Cardif, Selencia, MMA, Corum Life, Le Conservateur et AFI&nbsp;Esca</li>
                  <li>Assurance-vie multi-support et contrat de capitalisation</li>
                  <li>Solutions retraite (PER individuel et collectif)</li>
                  <li>Prévoyance complémentaire</li>
                </ul>
                <a href="https://app.wenimmo.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  Accéder à l'offre assurance <span className="btn__arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3.4 Private Equity */}
          <div {...panelProps("private-equity")}>
            <div className="offer-panel">
              <div className="offer-panel__figure">
                <div className="offer-panel__topline">
                  <p className="offer-panel__num">5</p>
                  <p className="offer-panel__numlabel">partenariats exclusifs avec des gérants spécialistes</p>
                </div>
                <LogoGrid partners={PE_PARTNERS} />
              </div>
              <div className="offer-panel__body">
                <h3 className="offer__title">Private Equity — Accédez aux meilleures opportunités</h3>
                <p className="offer__lead">
                  Offrez à vos clients des opportunités d'investissement en non coté, rigoureusement
                  sélectionnées auprès de gérants spécialistes du private equity.
                </p>
                <ul className="checklist">
                  <li>5 partenariats exclusifs&nbsp;: Epicure AM, France Valley, OG2I, Scale Up Capital, Valhyr Capital</li>
                  <li>Fonds diversifiés&nbsp;: croissance, transmission, impact</li>
                  <li>Accompagnement à la souscription</li>
                  <li>Documentation réglementaire complète</li>
                </ul>
                <a href="https://app.wenimmo.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  Explorer le Private Equity <span className="btn__arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
