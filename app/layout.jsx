import { Mona_Sans } from "next/font/google";
import "./globals.css";

/* Mona Sans (corps de texte) auto-hébergée via next/font : téléchargée au build,
   servie depuis notre domaine — plus aucune requête vers fonts.googleapis.com.
   Les grands titres utilisent Mona Sans Expanded, auto-hébergée dans public/assets/fonts. */
const monaSans = Mona_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-mona-sans",
  display: "swap",
});

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
    <html lang="fr" className={monaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
