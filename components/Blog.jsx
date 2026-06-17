const LINKEDIN_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);

const YOUTUBE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z" />
  </svg>
);

const MAIL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinejoin="round" />
    <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Blog() {
  return (
    <section className="section resources" id="blog">
      <div className="container">
        <div className="section__head reveal">
          <p className="section__kicker">Blog &amp; actualités</p>
          <h2 className="section__title">
            Suivez l'actualité <em className="accent">Wenimmo</em>
          </h2>
        </div>
        <div className="resources__grid">
          <a href="https://www.linkedin.com/company/wenimmo" target="_blank" rel="noopener noreferrer" className="resource reveal">
            <div className="resource__icon">{LINKEDIN_ICON}</div>
            <h3>Posts LinkedIn</h3>
            <p>Nos analyses et annonces partenaires, publiées chaque semaine sur LinkedIn.</p>
            <span className="resource__link">Suivre Wenimmo →</span>
          </a>
          {/* TODO : URL chaîne YouTube Cash Investissement à confirmer */}
          <a href="#" className="resource reveal" data-todo="URL chaîne YouTube Cash Investissement à confirmer">
            <div className="resource__icon">{YOUTUBE_ICON}</div>
            <h3>Cash Investissement</h3>
            <p>Nos vidéos pédagogiques et décryptages marchés, sur notre chaîne YouTube.</p>
            <span className="resource__link">Voir les vidéos →</span>
          </a>
          <a href="#rejoindre" className="resource reveal">
            <div className="resource__icon">{MAIL_ICON}</div>
            <h3>Newsletters</h3>
            <p>L'essentiel de l'actualité des offres et des partenaires, directement dans votre boîte mail.</p>
            <span className="resource__link">S'abonner →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
