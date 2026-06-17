import "./globals.css";

export const metadata = {
  title: "Wenimmo — Libérez du temps pour vos clients",
  description:
    "La plateforme de souscription dédiée aux conseillers en gestion de patrimoine. Une saisie unique, plusieurs produits souscrits en parallèle. Documents générés, signés et transmis aux sociétés de gestion.",
  icons: {
    icon: "/assets/logos/logo-wenimmo-dark.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Mona Sans (corps de texte) — les grands titres utilisent Mona Sans Expanded, auto-hébergée dans public/assets/fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
