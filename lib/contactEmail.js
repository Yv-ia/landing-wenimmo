/**
 * Génère l'email envoyé à l'équipe Wenimmo lorsqu'un CGP soumet le
 * formulaire de partenariat (section « Nous contacter »).
 *
 * Deux rendus sont exposés :
 *  - renderContactEmail() : version HTML (layout en tables + styles inline
 *    pour rester compatible avec la majorité des clients mail) ;
 *  - renderContactText()  : version texte brut (fallback / clients sans HTML).
 */

const BRAND = {
  primary: "#4646f0",
  navy: "#0e0e2c",
  heading: "#141414",
  text: "#525252",
  muted: "#8b8b9e",
  border: "#e7e7ef",
  soft: "#f7f8fc",
  white: "#ffffff",
};

const FONT =
  "'Mona Sans','Helvetica Neue',Helvetica,Arial,sans-serif";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const PLACEHOLDER = "—";

/** Une ligne « label / valeur » du tableau récapitulatif. */
function infoRow(label, value, { link } = {}) {
  const raw = String(value ?? "").trim();
  const safe = raw ? escapeHtml(raw) : PLACEHOLDER;
  const display =
    raw && link
      ? `<a href="${escapeHtml(link)}" style="color:${BRAND.primary};text-decoration:none;">${safe}</a>`
      : safe;

  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${BRAND.border};font-family:${FONT};font-size:13px;font-weight:700;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.04em;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:14px 0;border-bottom:1px solid ${BRAND.border};font-family:${FONT};font-size:15px;font-weight:600;color:${BRAND.heading};vertical-align:top;">${display}</td>
    </tr>`;
}

export function renderContactEmail(data = {}) {
  const { lastname, firstname, email, phone, orias, message } = data;
  const fullName = [firstname, lastname].filter(Boolean).join(" ").trim();
  const messageHtml = message
    ? escapeHtml(message).replace(/\r?\n/g, "<br>")
    : PLACEHOLDER;

  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>Nouvelle demande de partenariat CGP</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.soft};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Nouvelle demande de partenariat CGP${fullName ? ` — ${escapeHtml(fullName)}` : ""}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.soft};padding:32px 16px;">
  <tr>
    <td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:${BRAND.white};border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(20,20,60,0.08);">
        <!-- En-tête -->
        <tr>
          <td style="background:${BRAND.navy};padding:32px 40px;">
            <div style="font-family:${FONT};font-size:20px;font-weight:800;letter-spacing:-0.01em;color:${BRAND.white};">wenimmo</div>
            <div style="font-family:${FONT};font-size:14px;font-weight:600;color:rgba(255,255,255,0.62);margin-top:6px;">Nouvelle demande de partenariat CGP</div>
          </td>
        </tr>
        <!-- Corps -->
        <tr>
          <td style="padding:36px 40px 8px;">
            <p style="margin:0 0 4px;font-family:${FONT};font-size:16px;line-height:1.5;color:${BRAND.text};">
              ${fullName ? `<strong style="color:${BRAND.heading};">${escapeHtml(fullName)}</strong> souhaite` : "Un conseiller souhaite"} rejoindre le réseau Wenimmo.
            </p>
            <p style="margin:0 0 24px;font-family:${FONT};font-size:14px;line-height:1.5;color:${BRAND.muted};">
              Voici les informations transmises via le formulaire de contact.
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${infoRow("Nom", lastname)}
              ${infoRow("Prénom", firstname)}
              ${infoRow("Email professionnel", email, { link: email ? `mailto:${email}` : null })}
              ${infoRow("Téléphone", phone, { link: phone ? `tel:${String(phone).replace(/[^+\d]/g, "")}` : null })}
              ${infoRow("N° ORIAS", orias)}
            </table>
            <p style="margin:28px 0 8px;font-family:${FONT};font-size:13px;font-weight:700;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.04em;">Message</p>
            <div style="font-family:${FONT};font-size:15px;line-height:1.6;color:${BRAND.heading};background:${BRAND.soft};border:1px solid ${BRAND.border};border-radius:12px;padding:16px 18px;">${messageHtml}</div>
          </td>
        </tr>
        <!-- Bouton répondre -->
        ${
          email
            ? `<tr>
          <td style="padding:24px 40px 36px;">
            <a href="mailto:${escapeHtml(email)}" style="display:inline-block;font-family:${FONT};font-size:15px;font-weight:700;color:${BRAND.white};background:${BRAND.primary};text-decoration:none;padding:13px 26px;border-radius:999px;">Répondre à ${escapeHtml(firstname || fullName || "ce contact")} →</a>
          </td>
        </tr>`
            : ""
        }
        <!-- Pied -->
        <tr>
          <td style="background:${BRAND.soft};padding:20px 40px;border-top:1px solid ${BRAND.border};">
            <p style="margin:0;font-family:${FONT};font-size:12px;line-height:1.5;color:${BRAND.muted};">
              Email automatique envoyé depuis le formulaire CGP de wenimmo.com.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export function renderContactText(data = {}) {
  const { lastname, firstname, email, phone, orias, message } = data;
  const fullName = [firstname, lastname].filter(Boolean).join(" ").trim();
  return [
    "Nouvelle demande de partenariat CGP",
    "",
    `${fullName || "Un conseiller"} souhaite rejoindre le réseau Wenimmo.`,
    "",
    `Nom : ${lastname || PLACEHOLDER}`,
    `Prénom : ${firstname || PLACEHOLDER}`,
    `Email professionnel : ${email || PLACEHOLDER}`,
    `Téléphone : ${phone || PLACEHOLDER}`,
    `N° ORIAS : ${orias || PLACEHOLDER}`,
    "",
    "Message :",
    message || PLACEHOLDER,
    "",
    "—",
    "Email automatique envoyé depuis le formulaire CGP de wenimmo.com.",
  ].join("\n");
}
