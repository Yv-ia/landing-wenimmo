"use client";

import { useEffect, useMemo, useState } from "react";

/* ==========================================================================
   Mock cliquable de la plateforme Wenimmo
   Reproduit l'écran « Produits » (cf. mockup-plateforme.svg) en HTML, mais
   interactif : onglets, recherche, navigation latérale, fiche produit.
   S'ouvre en modal quand l'utilisateur clique sur « Connexion ».
   ========================================================================== */

const PRODUCTS = {
  scpi: [
    { name: "Accès Valeur Pierre", cat: "Bureaux", tdvm: "3.51 %", capi: "1 829 606 130 €", tof: "90.10 %", ran: "-", status: "mapping" },
    { name: "Accimmo Pierre", cat: "Bureaux", tdvm: "3.51 %", capi: "2 680 203 435 €", tof: "90.74 %", ran: "62.86", status: "mapping" },
    { name: "Activimmo", cat: "Activité/Logistique", tdvm: "5.58 %", capi: "1 260 000 000 €", tof: "98.30 %", ran: "7.07", status: "complet" },
    { name: "Aestiam Agora", cat: "Commerces", tdvm: "4.50 %", capi: "401 400 000 €", tof: "93.15 %", ran: "28.17", status: "mapping" },
    { name: "Alta Convictions", cat: "Diversifiée", tdvm: "6.00 %", capi: "49 173 600 €", tof: "100.00 %", ran: "-", status: "complet" },
    { name: "Altixia Cadence XII", cat: "Diversifiée", tdvm: "5.60 %", capi: "165 257 400 €", tof: "98.07 %", ran: "26.85", status: "complet" },
    { name: "Altixia Commerces", cat: "Commerces", tdvm: "5.31 %", capi: "107 605 022 €", tof: "87.20 %", ran: "26.4", status: "complet" },
    { name: "Amundi Immo", cat: "Bureaux", tdvm: "4.20 %", capi: "312 480 000 €", tof: "95.60 %", ran: "18.4", status: "complet" },
    { name: "Épargne Pierre", cat: "Diversifiée", tdvm: "5.28 %", capi: "2 100 000 000 €", tof: "96.80 %", ran: "15.2", status: "complet" },
    { name: "Iroko Zen", cat: "Diversifiée", tdvm: "7.12 %", capi: "850 000 000 €", tof: "99.10 %", ran: "4.5", status: "complet" },
    { name: "Novaxia Neo", cat: "Bureaux", tdvm: "6.51 %", capi: "640 000 000 €", tof: "94.30 %", ran: "9.8", status: "complet" },
    { name: "Remake Live", cat: "Diversifiée", tdvm: "7.79 %", capi: "1 020 000 000 €", tof: "97.50 %", ran: "3.2", status: "complet" },
  ],
  pe: [
    { name: "Altaroc Global 2024", cat: "Buyout mondial", tdvm: "—", capi: "500 000 000 €", tof: "—", ran: "-", status: "complet" },
    { name: "Eurazeo Private Value", cat: "Secondaire", tdvm: "—", capi: "1 300 000 000 €", tof: "—", ran: "-", status: "complet" },
    { name: "Peqan Ambition", cat: "Growth", tdvm: "—", capi: "220 000 000 €", tof: "—", ran: "-", status: "mapping" },
  ],
  naturels: [
    { name: "France Valley Forêts", cat: "GFI forestier", tdvm: "2.10 %", capi: "180 000 000 €", tof: "—", ran: "-", status: "complet" },
    { name: "Groupement Viticole Bordeaux", cat: "GFV", tdvm: "3.00 %", capi: "42 000 000 €", tof: "—", ran: "-", status: "mapping" },
  ],
  diversification: [
    { name: "Corum Origin Obligations", cat: "Dette privée", tdvm: "6.40 %", capi: "760 000 000 €", tof: "—", ran: "-", status: "complet" },
    { name: "Sienna Actifs Réels", cat: "Infrastructures", tdvm: "5.10 %", capi: "310 000 000 €", tof: "—", ran: "-", status: "complet" },
  ],
};

const TABS = [
  { key: "scpi", label: "SCPI" },
  { key: "pe", label: "Private Equity" },
  { key: "naturels", label: "Actifs Naturels" },
  { key: "diversification", label: "Diversification" },
];

/* --- Espace souscription -------------------------------------------------- */
const SUB_TABS = [
  { key: "brouillons", label: "Brouillons", count: 482, accent: false },
  { key: "traiter", label: "À traiter", count: 787, accent: false },
  { key: "signature", label: "En attente de signature", count: 439, accent: true },
  { key: "contrepartie", label: "En attente de contrepartie", count: 0, accent: true },
  { key: "sdg", label: "À transmettre SDG", count: 262, accent: true },
  { key: "validation", label: "En attente de validation", count: 71, accent: false },
  { key: "validees", label: "Validées", count: 73, accent: false },
];

const SUBSCRIPTIONS = {
  brouillons: [
    { sub: "TESTPM", type: "Personne morale", cabinet: "Wenimmo", email: "caroline.clerc@wenimmo.com", phone: "0607080910", product: "Cristal Rente", stype: "Pleine propriété", amount: "255.68 €", parts: "1" },
    { sub: "TESTPM", type: "Personne morale", cabinet: "Wenimmo", email: "caroline.clerc@wenimmo.com", phone: "0607080910", product: "Corum Eurion", stype: "Pleine propriété", amount: "215.00 €", parts: "1" },
    { sub: "TESTPM", type: "Personne morale", cabinet: "Wenimmo", email: "caroline.clerc@wenimmo.com", phone: "0607080910", product: "Wemo One", stype: "Pleine propriété", amount: "1 000.00 €", parts: "5" },
    { sub: "Lyvia BERRAH", type: "Personne physique", cabinet: "Smartchain", email: "lydia.soula+cgp@smart-chain.fr", phone: "", product: "Wemo One", stype: "Pleine propriété", amount: "1 000.00 €", parts: "5" },
    { sub: "Lydia Aich", type: "Personne physique", cabinet: "Smartchain", email: "lydia.soula+cgp@smart-chain.fr", phone: "", product: "Cristal Rente", stype: "Pleine propriété", amount: "255.68 €", parts: "1" },
    { sub: "Smart-chain", type: "Personne morale", cabinet: "Root Admin", email: "team.fullstack+cgp@smart-chain.fr", phone: "0607080910", product: "Coeur de Régions", stype: "Pleine propriété", amount: "2 656.00 €", parts: "4" },
    { sub: "Martin DUBOIS", type: "Personne physique", cabinet: "Patrimoine & Co", email: "m.dubois@patrimoine-co.fr", phone: "0612345678", product: "Épargne Pierre", stype: "Nue-propriété", amount: "5 280.00 €", parts: "12" },
    { sub: "SCI Les Tilleuls", type: "Personne morale", cabinet: "Cabinet Vasseur", email: "contact@vasseur-conseil.fr", phone: "0698765432", product: "Iroko Zen", stype: "Pleine propriété", amount: "10 000.00 €", parts: "50" },
  ],
  traiter: [
    { sub: "Nadia BENALI", type: "Personne physique", cabinet: "Smartchain", email: "n.benali+cgp@smart-chain.fr", phone: "0611223344", product: "Activimmo", stype: "Pleine propriété", amount: "3 250.00 €", parts: "5" },
    { sub: "TESTPM", type: "Personne morale", cabinet: "Wenimmo", email: "caroline.clerc@wenimmo.com", phone: "0607080910", product: "Remake Live", stype: "Pleine propriété", amount: "2 000.00 €", parts: "10" },
    { sub: "Julien FAURE", type: "Personne physique", cabinet: "Patrimoine & Co", email: "j.faure@patrimoine-co.fr", phone: "0655667788", product: "Novaxia Neo", stype: "Démembrement", amount: "8 100.00 €", parts: "9" },
  ],
  signature: [
    { sub: "Amélie ROUX", type: "Personne physique", cabinet: "Cabinet Vasseur", email: "a.roux@vasseur-conseil.fr", phone: "0644556677", product: "Épargne Pierre", stype: "Pleine propriété", amount: "1 320.00 €", parts: "3" },
    { sub: "SARL Horizon", type: "Personne morale", cabinet: "Smartchain", email: "gerance@sarl-horizon.fr", phone: "0601020304", product: "Corum Eurion", stype: "Pleine propriété", amount: "4 300.00 €", parts: "20" },
  ],
  contrepartie: [],
  sdg: [
    { sub: "Karim HADDAD", type: "Personne physique", cabinet: "Root Admin", email: "team.fullstack+cgp@smart-chain.fr", phone: "0607080910", product: "Cristal Rente", stype: "Pleine propriété", amount: "255.68 €", parts: "1" },
    { sub: "TESTPM", type: "Personne morale", cabinet: "Wenimmo", email: "caroline.clerc@wenimmo.com", phone: "0607080910", product: "Wemo One", stype: "Pleine propriété", amount: "6 000.00 €", parts: "30" },
  ],
  validation: [
    { sub: "Claire MERCIER", type: "Personne physique", cabinet: "Patrimoine & Co", email: "c.mercier@patrimoine-co.fr", phone: "0678901234", product: "Iroko Zen", stype: "Pleine propriété", amount: "1 700.00 €", parts: "8" },
  ],
  validees: [
    { sub: "Smart-chain", type: "Personne morale", cabinet: "Root Admin", email: "team.fullstack+cgp@smart-chain.fr", phone: "0607080910", product: "Coeur de Régions", stype: "Pleine propriété", amount: "2 656.00 €", parts: "4" },
    { sub: "Sophie LEROY", type: "Personne physique", cabinet: "Cabinet Vasseur", email: "s.leroy@vasseur-conseil.fr", phone: "0623456789", product: "Activimmo", stype: "Pleine propriété", amount: "3 900.00 €", parts: "6" },
  ],
};

const NAV = [
  { key: "produits", label: "Produits" },
  { key: "souscriptions", label: "Souscriptions" },
  { key: "financement", label: "Financement", isNew: true },
  { key: "partenaires", label: "Partenaires" },
  { key: "compte", label: "Mon compte" },
];

/* --- Financement (partenariat Consortium Financement) --------------------- */
const FIN_STEPS = [
  {
    num: "1",
    title: "Pré-scoring de la capacité",
    text: "Consortium Financement évalue la capacité de financement de votre client selon les mêmes critères que la banque — réponse indicative sous 24 h ouvrées.",
  },
  {
    num: "2",
    title: "Collecte des pièces",
    text: "Votre client dépose ses justificatifs en ligne. Consortium Financement vérifie la complétude du dossier et vous tient informé.",
  },
  {
    num: "3",
    title: "Montage & présentation du dossier",
    text: "Le dossier de financement est monté par Consortium Financement puis présenté aux banques partenaires jusqu'à l'obtention de l'offre de prêt.",
  },
];

function ConsortiumMark({ small }) {
  return (
    <span className={`pmk-cf-mark${small ? " pmk-cf-mark--sm" : ""}`} aria-hidden="true">
      CF
    </span>
  );
}

function NavIcon({ k }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinejoin: "round", strokeLinecap: "round" };
  switch (k) {
    case "produits":
      return <svg viewBox="0 0 24 24" width="18" height="18"><rect x="5" y="5" width="14" height="14" rx="3" transform="rotate(45 12 12)" {...p} /></svg>;
    case "souscriptions":
      return <svg viewBox="0 0 24 24" width="18" height="18"><rect x="4" y="5" width="16" height="13" rx="2" {...p} /><line x1="12" y1="5" x2="12" y2="18" strokeDasharray="2.2 2.2" {...p} /></svg>;
    case "partenaires":
      return <svg viewBox="0 0 24 24" width="18" height="18"><circle cx="9" cy="8" r="3" {...p} /><path d="M4 18 a5 5 0 0 1 10 0" {...p} /><circle cx="17" cy="8.5" r="2.4" {...p} /><path d="M14.5 15.5 a4.2 4.2 0 0 1 6.5 0" {...p} /></svg>;
    case "financement":
      return <svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 9.5 L12 4 L20 9.5" {...p} /><line x1="6" y1="12" x2="6" y2="17" {...p} /><line x1="12" y1="12" x2="12" y2="17" {...p} /><line x1="18" y1="12" x2="18" y2="17" {...p} /><line x1="4" y1="20" x2="20" y2="20" {...p} /></svg>;
    case "compte":
      return <svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="9" {...p} /><circle cx="12" cy="10" r="2.8" {...p} /><path d="M6.5 19 a5.6 5.6 0 0 1 11 0" {...p} /></svg>;
    default:
      return null;
  }
}

function StatusBadge({ status }) {
  if (status === "complet") {
    return (
      <span className="pmk-status pmk-status--ok">
        <span>Complet</span>
        <i className="pmk-dot pmk-dot--green" />
      </span>
    );
  }
  return (
    <span className="pmk-status pmk-status--ko">
      <span>Pas de mapping</span>
      <i className="pmk-dot pmk-dot--red" />
    </span>
  );
}

export default function PlatformDemo() {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState("produits");
  const [tab, setTab] = useState("scpi");
  const [subTab, setSubTab] = useState("brouillons");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [promoBanner, setPromoBanner] = useState(true);
  const [scoring, setScoring] = useState(false);
  const [scoringSent, setScoringSent] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      setNav("produits");
      setTab("scpi");
      setSubTab("brouillons");
      setQuery("");
      setSelected(null);
      setSelectedSub(null);
      setPromoBanner(true);
      setScoring(false);
      setScoringSent(false);
      setOpen(true);
    };
    window.addEventListener("open-platform-demo", onOpen);
    return () => window.removeEventListener("open-platform-demo", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (scoring) { setScoring(false); setScoringSent(false); }
      else if (selectedSub) setSelectedSub(null);
      else if (selected) setSelected(null);
      else setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, selected, selectedSub, scoring]);

  const rows = useMemo(() => {
    const list = PRODUCTS[tab] ?? [];
    const q = query.trim().toLowerCase();
    return q ? list.filter((p) => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)) : list;
  }, [tab, query]);

  const subRows = useMemo(() => {
    const list = SUBSCRIPTIONS[subTab] ?? [];
    const q = query.trim().toLowerCase();
    return q
      ? list.filter((s) => `${s.sub} ${s.product} ${s.cabinet} ${s.email}`.toLowerCase().includes(q))
      : list;
  }, [subTab, query]);

  const subTabInfo = SUB_TABS.find((t) => t.key === subTab);

  if (!open) return null;

  return (
    <div className="pdemo-overlay" role="dialog" aria-modal="true" aria-label="Plateforme Wenimmo — démonstration" onClick={() => setOpen(false)}>
      <div className="pdemo-window" onClick={(e) => e.stopPropagation()}>
        {/* Chrome navigateur */}
        <div className="pdemo-chrome">
          <span className="pdemo-lights"><i /><i /><i /></span>
          <span className="pdemo-url">app.wenimmo.com/{nav === "produits" ? "produits" : nav}</span>
          <button className="pdemo-close" aria-label="Fermer la démonstration" onClick={() => setOpen(false)}>×</button>
        </div>

        <div className="pmk">
          {/* Sidebar */}
          <aside className="pmk-side">
            <div className="pmk-brand">
              <img src="/assets/logos/logo-wenimmo-dark.svg" alt="Wenimmo" />
            </div>
            <nav className="pmk-nav">
              {NAV.map((n) => (
                <button
                  key={n.key}
                  className={`pmk-navitem${nav === n.key ? " is-active" : ""}`}
                  onClick={() => { setNav(n.key); setQuery(""); setSelected(null); setSelectedSub(null); setScoring(false); setScoringSent(false); }}
                >
                  <NavIcon k={n.key} />
                  <span>{n.label}</span>
                  {n.isNew && <span className="pmk-navnew">Nouveau</span>}
                </button>
              ))}
            </nav>
            <div className="pmk-help">
              <p>Une question ?</p>
              <a href="https://www.wenimmo.com/#rejoindre" target="_blank" rel="noopener noreferrer">Contacter Wenimmo</a>
            </div>
            <button className="pmk-logout" onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="4" x2="12" y2="12" /><path d="M7 8 a7 7 0 1 0 10 0" /></svg>
              Déconnexion
            </button>
          </aside>

          {/* Contenu */}
          <main className="pmk-main">
            {nav === "produits" ? (
              <>
                {promoBanner && (
                  <div className="pmk-promo" role="note">
                    <ConsortiumMark small />
                    <span className="pmk-promo-new">Nouveau</span>
                    <p>
                      <strong>Financez les SCPI de vos clients</strong> avec Consortium Financement — pré-scoring de la capacité de financement en 24 h.
                    </p>
                    <button className="pmk-promo-cta" onClick={() => { setNav("financement"); setSelected(null); }}>
                      Découvrir
                    </button>
                    <button className="pmk-promo-close" aria-label="Fermer l'annonce" onClick={() => setPromoBanner(false)}>×</button>
                  </div>
                )}
                <h2 className="pmk-title pmk-title--serif">Produits</h2>
                <div className="pmk-topbar">
                  <div className="pmk-tabs">
                    {TABS.map((t) => (
                      <button
                        key={t.key}
                        className={`pmk-tab${tab === t.key ? " is-active" : ""}`}
                        onClick={() => { setTab(t.key); setQuery(""); setSelected(null); }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <div className="pmk-search">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="6" /><line x1="15.5" y1="15.5" x2="20" y2="20" /></svg>
                    <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Chercher un produit" />
                  </div>
                </div>
                <p className="pmk-count">{rows.length} Résultat{rows.length > 1 ? "s" : ""}</p>

                <div className="pmk-tablewrap">
                  <table className="pmk-table">
                    <thead>
                      <tr>
                        <th>Produit</th>
                        <th>Catégorie</th>
                        <th>Taux de distribution N-1</th>
                        <th>Capitalisation</th>
                        <th>Taux d'occupation financier</th>
                        <th>Report à nouveau (jours)</th>
                        <th>Statut</th>
                        <th aria-label="Consulter"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((p) => (
                        <tr key={p.name} onClick={() => setSelected(p)}>
                          <td className="pmk-name">{p.name}</td>
                          <td>{p.cat}</td>
                          <td>{p.tdvm}</td>
                          <td>{p.capi}</td>
                          <td>{p.tof}</td>
                          <td>{p.ran}</td>
                          <td><StatusBadge status={p.status} /></td>
                          <td>
                            <button className="pmk-consult" onClick={(e) => { e.stopPropagation(); setSelected(p); }}>
                              Consulter <span>→</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {rows.length === 0 && (
                        <tr><td colSpan={8} className="pmk-empty">Aucun produit ne correspond à « {query} ».</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            ) : nav === "souscriptions" ? (
              <>
                <div className="pmk-headrow">
                  <h2 className="pmk-title pmk-title--serif">Espace souscription</h2>
                  <button className="pmk-manual" onClick={() => setSelectedSub(subRows[0] ?? null)}>Créer une souscription manuelle</button>
                </div>
                <div className="pmk-topbar pmk-topbar--sub">
                  <div className="pmk-tabs pmk-tabs--sub">
                    {SUB_TABS.map((t) => (
                      <button
                        key={t.key}
                        className={`pmk-tab${subTab === t.key ? " is-active" : ""}`}
                        onClick={() => { setSubTab(t.key); setQuery(""); setSelectedSub(null); }}
                      >
                        {t.label}
                        <span className={`pmk-badge${t.accent ? " pmk-badge--accent" : ""}`}>{t.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pmk-subresults">
                  <p className="pmk-count">{(query.trim() ? subRows.length : subTabInfo?.count ?? subRows.length)} Résultats</p>
                  <div className="pmk-search">
                    <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Chercher une souscription" />
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="6" /><line x1="15.5" y1="15.5" x2="20" y2="20" /></svg>
                  </div>
                </div>

                <div className="pmk-tablewrap">
                  <table className="pmk-table pmk-table--sub">
                    <thead>
                      <tr>
                        <th>Souscripteur</th>
                        <th>Type</th>
                        <th>Nom du cabinet (CGP)</th>
                        <th>Email du CGP</th>
                        <th>Téléphone du CGP</th>
                        <th>Nom du produit</th>
                        <th>Type de souscription</th>
                        <th>Montant</th>
                        <th>Nombre de parts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subRows.map((s, i) => (
                        <tr key={`${s.sub}-${s.product}-${i}`} onClick={() => setSelectedSub(s)}>
                          <td className="pmk-name">{s.sub}</td>
                          <td>{s.type}</td>
                          <td>{s.cabinet}</td>
                          <td className="pmk-email">{s.email}</td>
                          <td>{s.phone || "—"}</td>
                          <td>{s.product}</td>
                          <td>{s.stype}</td>
                          <td>{s.amount}</td>
                          <td>{s.parts}</td>
                        </tr>
                      ))}
                      {subRows.length === 0 && (
                        <tr><td colSpan={9} className="pmk-empty">Aucune souscription dans « {subTabInfo?.label} »{query.trim() ? ` pour « ${query} »` : ""}.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            ) : nav === "financement" ? (
              <div className="pmk-fin">
                <div className="pmk-fin-hero">
                  <div className="pmk-fin-cobrand">
                    <img src="/assets/logos/logo-wenimmo-dark.svg" alt="Wenimmo" />
                    <span>×</span>
                    <span className="pmk-cf-wordmark"><ConsortiumMark /> Consortium Financement</span>
                  </div>
                  <span className="pmk-fin-badge">Nouveau partenariat</span>
                  <h2 className="pmk-title pmk-title--serif">Financez les SCPI de vos clients</h2>
                  <p className="pmk-fin-sub">
                    Votre client veut investir mais n'a pas toute la liquidité ? Wenimmo s'associe à{" "}
                    <strong>Consortium Financement</strong> pour financer à crédit les SCPI souscrites sur la
                    plateforme : capacité de financement évaluée en amont, pièces collectées, dossier monté et
                    présenté à la banque — sans que vous sortiez de votre parcours.
                  </p>
                </div>

                <div className="pmk-fin-steps">
                  {FIN_STEPS.map((s) => (
                    <div className="pmk-fin-step" key={s.num}>
                      <span className="pmk-fin-num">{s.num}</span>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  ))}
                </div>

                <div className="pmk-fin-actions">
                  <button className="pmk-fin-cta" onClick={() => { setScoring(true); setScoringSent(false); }}>
                    Démarrer un pré-scoring
                  </button>
                  <p className="pmk-fin-note">Sans engagement — réponse indicative sous 24 h ouvrées.</p>
                </div>
              </div>
            ) : (
              <div className="pmk-placeholder">
                <div className="pmk-placeholder-icon"><NavIcon k={nav} /></div>
                <h2 className="pmk-title pmk-title--serif">{NAV.find((n) => n.key === nav)?.label}</h2>
                <p>Cet espace fait partie de la plateforme Wenimmo.<br />Créez votre accès pour l'explorer avec vos données réelles.</p>
                <a className="pmk-cta" href="https://www.wenimmo.com/#rejoindre" target="_blank" rel="noopener noreferrer">Demander une démo</a>
              </div>
            )}
          </main>

          {/* Fiche produit (drawer) */}
          {selected && (
            <div className="pmk-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="pmk-drawer-head">
                <div>
                  <p className="pmk-drawer-cat">{selected.cat}</p>
                  <h3>{selected.name}</h3>
                </div>
                <button className="pmk-drawer-close" aria-label="Fermer la fiche" onClick={() => setSelected(null)}>×</button>
              </div>
              <StatusBadge status={selected.status} />
              <dl className="pmk-facts">
                <div><dt>Taux de distribution N-1</dt><dd>{selected.tdvm}</dd></div>
                <div><dt>Capitalisation</dt><dd>{selected.capi}</dd></div>
                <div><dt>Taux d'occupation financier</dt><dd>{selected.tof}</dd></div>
                <div><dt>Report à nouveau (jours)</dt><dd>{selected.ran}</dd></div>
              </dl>
              <button className="pmk-subscribe" onClick={() => setSelected(null)}>Démarrer une souscription</button>
              {tab === "scpi" && (
                <div className="pmk-fincard">
                  <p className="pmk-fincard-brand"><ConsortiumMark small /> Wenimmo × Consortium Financement</p>
                  <p className="pmk-fincard-text">
                    Votre client n'a pas toute la liquidité ? <strong>Cette SCPI est finançable à crédit.</strong>
                  </p>
                  <button className="pmk-fincard-cta" onClick={() => { setSelected(null); setNav("financement"); }}>
                    Étudier la capacité de financement <span>→</span>
                  </button>
                </div>
              )}
              <p className="pmk-drawer-note">Données de démonstration — l'accès complet est réservé aux partenaires Wenimmo.</p>
            </div>
          )}

          {/* Fiche souscription (drawer) */}
          {selectedSub && (
            <div className="pmk-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="pmk-drawer-head">
                <div>
                  <p className="pmk-drawer-cat">{subTabInfo?.label}</p>
                  <h3>{selectedSub.sub}</h3>
                </div>
                <button className="pmk-drawer-close" aria-label="Fermer la fiche" onClick={() => setSelectedSub(null)}>×</button>
              </div>
              <dl className="pmk-facts">
                <div><dt>Type</dt><dd>{selectedSub.type}</dd></div>
                <div><dt>Cabinet (CGP)</dt><dd>{selectedSub.cabinet}</dd></div>
                <div><dt>Email du CGP</dt><dd>{selectedSub.email}</dd></div>
                <div><dt>Téléphone du CGP</dt><dd>{selectedSub.phone || "—"}</dd></div>
                <div><dt>Produit</dt><dd>{selectedSub.product}</dd></div>
                <div><dt>Type de souscription</dt><dd>{selectedSub.stype}</dd></div>
                <div><dt>Montant</dt><dd>{selectedSub.amount}</dd></div>
                <div><dt>Nombre de parts</dt><dd>{selectedSub.parts}</dd></div>
              </dl>
              <button className="pmk-subscribe" onClick={() => setSelectedSub(null)}>Poursuivre la souscription</button>
              <p className="pmk-drawer-note">Données de démonstration — l'accès complet est réservé aux partenaires Wenimmo.</p>
            </div>
          )}

          {/* Pré-scoring Consortium Financement (drawer) */}
          {scoring && (
            <div className="pmk-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="pmk-drawer-head">
                <div>
                  <p className="pmk-drawer-cat pmk-drawer-cat--fin">Consortium Financement</p>
                  <h3>Pré-scoring de capacité</h3>
                </div>
                <button className="pmk-drawer-close" aria-label="Fermer le pré-scoring" onClick={() => { setScoring(false); setScoringSent(false); }}>×</button>
              </div>
              {scoringSent ? (
                <div className="pmk-scoring-done">
                  <span className="pmk-scoring-check">✓</span>
                  <h4>Demande transmise</h4>
                  <p>
                    Consortium Financement analyse la capacité de financement de votre client et revient vers vous
                    sous 24 h ouvrées avec une réponse indicative, puis lance la collecte des pièces.
                  </p>
                  <button className="pmk-subscribe" onClick={() => { setScoring(false); setScoringSent(false); }}>Fermer</button>
                </div>
              ) : (
                <>
                  <p className="pmk-scoring-intro">
                    Quelques informations suffisent pour évaluer la capacité de financement de votre client — comme
                    la banque le fera.
                  </p>
                  <div className="pmk-scoring-form">
                    <label>
                      <span>Montant de SCPI envisagé</span>
                      <input defaultValue="100 000 €" />
                    </label>
                    <label>
                      <span>Apport disponible</span>
                      <input defaultValue="20 000 €" />
                    </label>
                    <label>
                      <span>Revenus nets mensuels du foyer</span>
                      <input defaultValue="6 500 €" />
                    </label>
                    <label>
                      <span>Durée souhaitée</span>
                      <input defaultValue="20 ans" />
                    </label>
                  </div>
                  <button className="pmk-subscribe pmk-subscribe--fin" onClick={() => setScoringSent(true)}>
                    Envoyer à Consortium Financement
                  </button>
                  <p className="pmk-drawer-note">Démonstration — aucune donnée n'est transmise.</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
